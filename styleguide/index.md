---
layout: page
title: Style Guide
---


This is a collection of the visual styles and elements used in the design of this site.
I believe in the methodology of organizing the front-end projects using a
style guide approach. It is the perfect showcase for anyone who wants to get an immediate
understanding of how the site has been created and how can be modified.
If you are not familiar with this concept or want to learn more, check the following resources:

- [Atomic design](http://bradfrost.com/blog/post/atomic-web-design/)
- [Front-end style guide](http://www.maban.co.uk/projects/front-end-style-guides/)
- [Living style guide](https://www.smashingmagazine.com/2015/04/an-in-depth-overview-of-living-style-guide-tools/)

## Colors

<div class="u-displayFlex u-justifyContentBetween u-marginBottomNormal">
	<span class="o-color-preview o-color-preview--redapple">Redapple</span>
	<span class="o-color-preview o-color-preview--peacock">Peacock</span>
	<span class="o-color-preview o-color-preview--smoke">Smoke</span>
</div>
<div class="u-displayFlex u-justifyContentBetween">
	<span class="o-color-preview o-color-preview--lake">Lake</span>
	<span class="o-color-preview o-color-preview--grass">Grass</span>
	<span class="o-color-preview o-color-preview--fox">Fox</span>
</div>


## Headings

# First level heading

First level headings are used only for page and post titles.
They are presented with the secondary typeface.


## Second level heading

Second level headings are used to indicate the start of a new section.


### Third level heading

Third level headings are used to separate visually the sub-sections.


## Links

[Hyperlinks](/styleguide) are underlined and colored when hovered.


## Quotes

> Your work is going to fill a large part of your life, and the only way to be truly satisfied is
to do what you believe is great work. And the only way to do great work is to love what you do.
If you haven't found it yet, keep looking. Don't settle.
As with all matters of the heart, you'll know when you find it.


## Images

This is an example of an image.

![Coast](/uploads/2017/01/coast.jpg){:class="o-img"}


## Bulleted Lists

- Bulleted lists look like this.
- Multi-leveled bulleted lists look like this:
	- This is an example of a second-level bullet
- Another bullet item on the first level.


## Numbered Lists

1. This is a numbered list.
2. Numbered lists can also have multiple levels:
	1. This is a second-level numbered list item
3. Another number list item on the first level.


## Code Block JavaScript

{% highlight javascript linenos %}

// Does a thing
function helloWorld(param1, param2) {
  var something = 0;

  // Do something
  if (2.0 % 2 == something) {
    console.log('Hello, world!');
  } else {
    return null;
  }

  // @TODO comment
}

{% endhighlight %}


## Code Block CSS

{% highlight css linenos %}

.o-helloWorld {
  background-color: #bcbcbc;

  font-size: 1.5rem;

  padding: 1em;
  margin: .5em;

  position: relative;
}

.o-helloWorld:hover {
  transform: rotate(180deg);
}

{% endhighlight %}
