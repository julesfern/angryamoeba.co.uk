require 'nokogiri'

module Jekyll
  module SummarizeFilter

    def summarize(input)
      # Attempt to summarize based on number of top-level elements. If no paragraphs are found, go by word count.

      # Limits for the two parsing techniques
      para_count = 2
      word_count = 100
      # Tags that halt the summariser when encountered
      block_tags = %w(object embed video iframe)
      # Tags that do not count towards the summariser's paragraph count
      ignore_tags = %w(img a)

      if input.strip =~ /^<p>/
      	# Use paragraphs
      	markup = Nokogiri::HTML.fragment('<div id="noko-wrapper">'+input+'</div>')

      	all = markup.css("#noko-wrapper > *")
      	# Work over elements until para limit reached or object/embed reached
      	summary_elements = []
      	summary_count = 0
      	all.each do |elem|
      		limit_reached = (summary_count >= para_count)
      		blocked_tag = (block_tags.include? elem.name.downcase)
      		wrapped_blocked_tag = (elem.children.to_a.select {|c| block_tags.include?(c.name.downcase)}.any?)
      		break if limit_reached or blocked_tag or wrapped_blocked_tag
      		summary_elements << elem
      		summary_count += 1 unless (ignore_tags.include? elem.name.downcase)
      	end

      	return summary_elements.map {|elem| elem.to_s }

      else
      	wc = 0
      	in_tag = false
      	in_gap = false
      	limit = 0
      	input.strip.split("").each_with_index do |c,i|
      		if c == " " and in_gap
      			next
      		elsif c == ">" and in_tag
      			in_tag = false
      		elsif c == "<" and not in_tag
      			in_tag = true
      		elsif c == " " and not in_tag
  				wc += 1
  				limit = i
  				in_gap = true
      		else
      			in_gap = false
      		end

      		if wc >= word_count
      			return (input.length > limit)? input[0..limit].strip+"..." : input
      		end
      	end
      end
    end

  end
end

Liquid::Template.register_filter(Jekyll::SummarizeFilter)