---
title: Charging for the last inch
layout: post
---

When apple announced the iPhone OS' new capability to provide a tethered cellular data connection to your laptop, the masses rejoiced. When some carriers announced hefty additional charges for the privilege of using your 'unlimited' data plan on a larger screen that you already own, the masses wept. It was as if a great many voices cried out and then were suddenly compelled to create a [new trending topic][o2fail] on Twitter.

The problem, it seems, is that O2 promise to give you unlimited<sup>1</sup> use of your iPhone's data connection, on condition that you do not take them up on the offer<sup>2</sup>. The deal as they see it is that you can consume a reasonable amount of data on your iPhone itself, but if you want to view that data on a big screen - say, a laptop you already own - it'll cost you another £13 per month for the privilege. For those playing along at home, that's the same price as a standard O2 USB modem plan, only they don't give you the modem.

Therein lies the obvious question. Why does it cost more to download a reasonable amount of data to my laptop than to my telephone, especially when the difference between the two is rapidly thinning?

For those who feel that being charged £13/mo to deliver data over the final inch between your phone and your laptop is an insulting proposition, you know have another option. [One brave soul][install] has created a small web application that provides tethering configuration for almost any carrier, enabling iPhone tethering without forcing you to buy a costly data plan in addition to the one already included your standard iPhone contract.

For those who choose this path, there are a few immediately obvious ways to profile a user's connection to determine whether or not they're tethering, so be mindful:

1. If your user agent string is anything other than Mobile Safari, then you're tethering.
2. If you're loading Flash movies, then you're tethering.
3. If you're loading Java applets, then you're tethering.

Whether or not the operators will act on this finding is unknown.

Disclosure: I already hold a data contract with O2 and don't plan on getting rid of it, as I find the USB modem very useful.

<sup>1</sup>. May in fact be strictly limited
<sup>2</sup>. The use of terminology like "unlimited within fair use" is a long-standing tradition among mobile operators, who have no problem using double, triple or even quintuple negatives if it'll shift more phones.


[o2fail]: http://twitter.com/#search?q=o2fail 
[benm]: http://www.benm.at/2009/06/13/helpbenmat/
[install]: http://help.benm.at
