---
title: What does HTML5 mean for viral video?
layout: post
---

Okay, so I'm basing my optimism for [HTML5 video][html5video] on a hypothetical future where Internet Explorer vanishes from the earth, and even in the browsers that *do* support it, codec support is inconsistent, but in my opinion those differences will become meaningless very rapidly because there is only one truly dominant browser engine in the mobile space, and it's [Webkit][webkit]. And mobile is where HTML5 video will truly shine, because you don't get Flash video on the iPhone and you do get Webkit. I wish it were more complicated, I really do. If it were more complicated I could make some extra money as a consultant.

I digress. Or rather, because the digression occurs so early, I fail to begin. So let us begin.

Where does the value in viral video come from?
----------------------------------------------

Why are agencies able to charge gigantic sums for the privilege of having their brand associated with a video of fifteen hundred people being a bloody nuisance at King's Cross station? Firstly, it builds intangible value. Exercising control over any large brand has traditionally been an epic, thankless task, so the concept of simply producing something amusing and using people's newfound capacity for mass sharing as a delivery and targeting strategy was a bit of a sensation. 

Secondly, an embedded flash video naturally must come with a user interface, which means interactivity. And where you have interactivity you can generate clicks that lead directly to your product. The value comes from not just embedding the video, but embedding the video player with all its little hidden engagement-measuring technology and up-front calls to action. In most commercial video environments, the content itself is just a tiny part of what gets delivered to the user's browser.

HTML5 video is referenced assets, not embedded behavior
-------------------------------------------------------

Now. HTML5's new &lt;video /&gt; tag lets us deliver the content - the video file itself - but it does not let us deliver all the other bits and bobs that make web video so valuable. Video rendered with the &lt;video /&gt; tag will have no interactive elements such as advertising or social features, nor will it have the ability to share an embed code for itself. These features must now be delegated to the HTML and Javascript *around* the video player rather than being encapsulated within it.

This behavior makes sense, given the semantics of HTML - much like the &lt;img /&gt; tag, the &lt;video /&gt; tag is a dumb reference to an external asset, and the browser is free to ignore it, use the alternate text, or render it depending on the situation and its capabilities.

What's missing from the HTML5 picture?
--------------------------------------

The point I'm trying to demonstrate here is that the &lt;video /&gt; tag is just a small part of the puzzle for video on a post-flash web. As a video publisher, I want to be able to deliver a player - not just a video file - to users, and make it easy for them to share that experience with others.

"But Dan," I hear you cry, "you can just build a player out of markup and javascript!" And indeed you can. Youtube already have an [excellent duplicate of their flash player built in HTML5][youtubehtml5], after all. But let's look at the problems of sharing such a player.

First, you're going to try having users copy and paste the gigantic wedge of markup and javascript that make up your player. This will fail for a few reasons - most notably, you can't release patches for the player once it's been embedded, and you must implement permanent URLs for your video assets.

Then you're going to refactor the bloody thing to something like this:

<pre><code class="html">&lt;script type=&quot;text/javascript&quot; src=&quot;http://mysite.com/player.js?replace=thevideotag&quot; /&gt;
	&lt;video src=&quot;http://assets.mysite.com/some-overdone-meme-lol.mp4&quot; id=&quot;thevideotag&quot; /&gt;</code></pre>
	
Which is cool, because if the Javascript fails then you still have the video tag to fall back on. However this will also fail, because you can't share &lt;script /&gt; tags on forums or social networks for security reasons. And that pesky asset URL problem is still there.

"Eureka!" You will think next, "I will serve the player remotely from my application as an HTML5 document unto itself!" And that is a good suggestion. However, the only way to embed such an application is by using an &lt;iframe /&gt;, and that is, to be blunt, fucking disgusting. You can't use iframes on most forums or social networks, and they have absolutely monstrous security problems. They also have very poor semantic value for the use to which we want them put.

HTML5 is supposed to be an *application* markup language. It's not just for documents anymore. The standard is absolutely lousy with interesting interactivity (such as [OS-native drag and drop][html5dragdrop]), but it contains no firm way for applications to be nested or otherwise made modular.

For this, I have a suggestion. I would like to see the following work in HTML5:

<pre><code class="html">&lt;embed type=&quot;text/html&quot; width=&quot;800&quot; height=&quot;450&quot; src=&quot;http://mysite.com/player.html?video_id=FOO&quot; /&gt;</code></pre>

No, you haven't gone mad. That is an &lt;embed /&gt; tag. Yes, they're disgusting. But they also match the semantic we want - we want an *embedded application* which just *happens* to have been written as an HTML5 document. We want the security domain inherent to embed tags, which allows the host document to remain opaque to the client document at the host browser's discretion. This is the semantic I would like to see for embedded applications in HTML5.

[html5video]: http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html
[webkit]: http://webkit.org/
[youtubehtml5]: http://youtube.com/html5
[html5dragdrop]: http://www.whatwg.org/specs/web-apps/current-work/#dnd