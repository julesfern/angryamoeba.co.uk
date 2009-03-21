---
layout: post
title: Introducing the new Angry amoeba
---

Over the last couple of days, we pushed out several long-overdue updates to the Angry amoeba site - and I thought it'd be fun to go into a little detail about the design and process behind the new version. I wanted the new site to meet several key business objectives:

* Refresh the Angry amoeba brand.
* Drive attention to both our commercial and our open source projects.
* Decrease homepage bounce rate.
* Increase conversion rate from main site to our satellite product sites.

And several key nerd objectives:

* Blog like a hacker using [Jekyll](http://github.com/mojombo/jekyll) (inspired by [TPW](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html) and [New Bamboo](http://blog.new-bamboo.co.uk/2009/2/20/migrating-from-mephisto-to-jekyll)).
* Site source should be available on [Github](http://github.com/danski/angryamoeba.co.uk/).
* Blog posts should be licensed with machine-readable [CC](http://creativecommons.org) Attribution licenses, site copy should be under traditional Copyright.

To start, I made some [customisations to Jekyll](http://github.com/danski/jekyll) to get everything working just as desired. Mainly, I wanted the ability to fold blog posts, and I wanted to be able to handle that elegantly while authoring. I settled on a fairly simple solution, which is to fold posts around &lt;hr /&gt; tags.

Prior to this relaunch, the vast majority of our traffic was organic - that is, occurring naturally through search. Those visitors were arriving at the old site, reading old blog content, and then falling through our fingers. Any successful redesign will expose these users to more recent content through a related posts element, or other means of content suggestion.

The numbers for the first 48 hours seem positive, although I'll wait for the initial ooh-look-a-relaunched-site spike to calm down before doing any serious analysis of the design's success:

* Bounce rate from homepage down 50% - 30% of homepage visits converted into blog visits
* Twitter and Github engagement noticeably increased
* Bounce rate within the blog is noticeably decreased

I also have some advice to offer when migrating to a new site, particularly if your URL structure is changing and you do not wish to lose your hard-earned Google placement.

In order to preserve our existing inbound links, our web server was configured to redirect the most freqently-hit URLs from the old site to their new equivalents. The redirect is done with a HTTP 301 Moved Permanently status, which serves to inform search spiders that the new URLs are formal replacements for the old ones, allowing us to preserve age and placement for our most popular articles. This may seem basic, but you'd be surprised at how easy it is to lose sight of these steps in the rush of deploying a new site or app.

You may have also noticed that [Chirrup](http://chirrup.angryamoeba.co.uk), our Twitter commenting system, has been replaced on our blog with Disqus, a more conventional solution for blog comments. This is because I have concluded that as it stands, Chirrup doesn't *quite* work as a standalone comment system, and that it needs re-examining in the light of Twitter's OAuth support becoming available.

The site also has a [public bugtracker available on Tails](http://www.bugtails.com/projects/13/). If you spot any problems, dropping a ticket there is the best way to let me know about them.