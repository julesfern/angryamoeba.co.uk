#!/usr/bin/env ruby

# Script to import tumblr posts into local markdown posts ready to be consumed by Jekyll.
# Inspired by New Bamboo's post http://blog.new-bamboo.co.uk/2009/2/20/migrating-from-mephisto-to-jekyll

require 'rubygems'
require 'open-uri'
require 'nokogiri'

# Configuration
tumblr_domain =   "http://singlecell.angryamoeba.co.uk"
write_directory = File.dirname(__FILE__) + "/../_jekyll_singlecell/_posts"

# Connect to Tumblr and read the API source
open(tumblr_domain+"/api/read") do |xml|
  doc = Nokogiri::XML.parse(xml)
  doc.css("post").each do |post_tag|
    
  # Gather data about each post 
  # Each type prepares:
  # title: string with the title for this post
  # date: ruby native date for the post's creation
  # body: string with the body for this post
  
  date = Date.parse(post_tag.attributes["date"].content)
  
    case
    when post_tag.attributes["type"].content == "regular"    
      title = post_tag.css("regular-title").first.content
      body = post_tag.css("regular-body").first.content
      filename = "#{date.strftime("%Y-%m-%d")}-#{title.gsub(/(\s|[^a-zA-Z0-9])/,"-").gsub(/-+/,'-').gsub(/-$/,'')}.markdown"
      jekyll_post = <<-EOPOST
---
title: #{title}
layout: post
---  

#{body}
      EOPOST

      # Write files
      puts filename
      puts jekyll_post
      puts ""

      file = File.new("#{write_directory}/#{filename}", "w+")
      file.write(jekyll_post)
      file.close

    end

    
  end
end




