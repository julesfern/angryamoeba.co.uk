module Jekyll

	# Generates a JSON digest of all posts which may be loaded via javascript for 
	# search or other query purposes.
	#
	# Each post has its markup pre-rendered using the template specified by the
	# config below.
	#
	# ## Gem dependencies:
	# * json for marshalling
	# * nokogiri for ignoring node content
	#
	# ## _config.yml:
	# post_digest_url: "blog/posts.json" # This is the output path
	# post_digest_template: "_includes/blog-post.html" # This is the partial used to render the template
	# post_digest_template_defaults: # This is a hash for the default payload used to render this partial
	#   foo: "bar"

	require 'json'
	require 'nokogiri'
	require 'jekyll/filters'
	require 'fileutils'

	class PostDigestGenerator < Generator

		# Set iterator stops
		STOP_TAGS = %w(embed object iframe script)
		STOP_WORDS = %w(a the if then and unless but how when where are on up in was at)

		# Safe from arbitrary code exec
	    safe true
	    
	    def generate(site)
	      if (config_path = site.config['post_digest_url']) and 
		     (config_template = site.config['post_digest_template'])

		    config_template_opts = site.config['post_digest_template_defaults'] || {}

		    template_path = File.join(site.source, config_template)
		    template = Liquid::Template.parse(File.read(template_path).to_s)

	      	obj = site.posts.	map {|p| p.transform; p.to_liquid }. # Render and marshal
	      						select {|p| p["published"] != false }. # Reduce to only public posts
	      						map {|p| 
	      							{
		  								# Create actual feed payload
		      							"keyword_digest" => keyword_digest(p),
		      							"search_html"=>	template.render(
						      								config_template_opts.merge(
						      									"post"=>p, 
						      									"site"=>site.config
						      								),
						      								:filters=>Jekyll::Filters
		      											)
	      							}
		      					}

	      	# Only write file if there are changes
	      	data = obj.to_json
			output_path = File.join(site.source, config_path)
			output_dir = File.dirname(output_path)

			if File.exist?(output_path) and File.read(output_path).to_s == data
				puts "Skipping post digest generation as there are no changes"
			else
				puts "Generating post digest to #{output_path} (in #{output_dir})"
				FileUtils.mkdir_p(output_dir)				
	      		File.open(output_path, "w") {|f| f.write data }
			end
	      end
	    end

	    def keyword_digest(post)
	    	# Basic inputs
	    	keywords = [post["title"], 
	    				post["category"], 
	    				post["categories"], 
	    				post["tags"]
	    			]
	    	
	    	# Now handle the content
	    	node = Nokogiri::HTML.fragment(post["content"])	    	
	    	keywords = keyword_digest_nodeset(node.children, flatten_keywords(keywords))
	    	keywords.reject! {|k| STOP_WORDS.include? k.downcase }
	    	return keywords
	    end

	    def keyword_digest_nodeset(set, keywords=[])
	    	set.children.each do |node|
	    		keywords << keyword_digest_node(node)
	    	end
	    	return flatten_keywords(keywords)
	    end

	    def keyword_digest_node(node, keywords=[])
	    	if node.is_a? Nokogiri::XML::Text
	    		keywords << node.content
	    	else
	    		return keywords if STOP_TAGS.include?(node.name.downcase)
	    		keywords = keyword_digest_nodeset(node.children, keywords)
	    	end
	    	return flatten_keywords(keywords)
	    end

	    def flatten_keywords(keywords)
	    	return keywords.flatten.
		    				map {|d| d.to_s.downcase.split(" ").map {|s| s.strip }}.
		    				flatten.
		    				compact.
		    				uniq
	    end
  	end

end