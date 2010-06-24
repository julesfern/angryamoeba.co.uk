---
title: Introducing Squeenote - Presentations done live with HTML5!
layout: post
---

<p><img src="http://img.skitch.com/20100624-eswfi1h9dym3qq1rp7whacekad.jpg"></p>

I recently gave a presentation to my colleagues at [Videojuicer][videojuicer] about HTML5 and what it means for our business and our technology roadmap. Being a mindless sheep, I did of course opt to create the presentation itself in HTML5 with the intention of having the audience follow along in their browsers, without the aid of a projector.

Then, a thought occurred.

*If I'm putting a slide deck on screens that are owned by the audience, then the audience should get some control of their own.*

Using this principle as a guide, I hacked up a quick [Node.js][node] and [Socket.io][sockets] demo that would allow audience members to either sit back and follow the presentation as I moved through the slides, or to break off from the flow and browse the deck themselves, rejoining the rest of the audience whenever they choose.

Designed for audiences like this.
---------------------------------

<p><a href="http://www.flickr.com/photos/chesh2000/380186134/" title="Photo by Jay Goldman"><img src="http://img.skitch.com/20100624-t71h39wqub8g1cr9752tnwirbx.jpg"></a></p>

The presentation was a success, and I was struck by the creative potential of allowing audience members their own runtime instance of a slide deck. What's possible with this setup that isn't possible with a regular Keynote presentation? Including hyperlinks for audiences to follow for further reading is basic. We can do more:

* Include interactive elements in slides. Navigable data visualisations, canvas objects, tech demos, whatever.
* Use selective disclosure to keep slides brief but allow individual audience members to drill down on items they find interesting.
* Allow audiences to simply save your presentation out of their browsers.

Introducing Squeenote
---------------------

<p><object width="550" height="199" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="videojuicer_seed_demo_presentation_153"> <param name="movie" value="http://player.videojuicer.com/bootstrap.swf" /> <param name="allowfullscreen" value="true" /> <param name="allowscriptaccess" value="always" /> <param name="flashvars" value="seed_name=demo&amp;presentation_id=153" /> <param name="name" value="videojuicer_seed_demo_presentation_153" /> <param name="wmode" value="transparent" /> <embed src="http://player.videojuicer.com/bootstrap.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" flashvars="seed_name=demo&amp;presentation_id=153" width="550" height="199" name="videojuicer_seed_demo_presentation_153" wmode="transparent" /> </object></p>

I've since cleaned up this presentation engine and released it under the name [Squeenote][squeenote]. Authoring presentations for Squeenote is ridiculously simple; a presentation is simply an HTML file containing an ordered list of slides. See the [README][readme] for more information. Here's the initial feature list:

* Presenter follow/unfollow for audience members
* Password-protected presenter mode
* Support for HTML5-friendly browsers. Tested in Safari, Chrome, Firefox, Mobile Safari.
* Themeable. Since a presentation is just an HTML file, a theme is just CSS and/or JS.
* Includes a default theme using CSS3 Transitions, with basic iPad and iPhone support for audience members.
* Modular and hackable. All components, including the Squeenote UI, are replaceable and extendable.
* Designed for archival. A Squeenote presentation can be uploaded to a static web server without the Node.js component and it will run in "presenter offline" mode.

So I heard you like Presentations
---------------------------------

Squeenote includes [a short presentation about Squeenote, authored in Squeenote][presentation].

<p><a href="http://squeenote.angryamoeba.co.uk"><img src="http://img.skitch.com/20100624-g99kep5rqysh17qea3swd4658b.jpg"></a></p>

Clone it and use it
-------------------

Squeenote is available for free at my [Github profile][squeenote]. It's released under a [Creative Commons][cclicense] license as it is intended to be altered in a highly-personalised fashion.

[cclicense]: http://creativecommons.org/licenses/by/2.0/uk/
[readme]: http://github.com/danski/Squeenote/blob/master/readme.mdown
[node]: http://nodejs.org
[sockets]: http://socket.io
[videojuicer]: http://videojuicer.com
[squeenote]: http://github.com/danski/squeenote
[presentation]: http://squeenote.angryamoeba.co.uk