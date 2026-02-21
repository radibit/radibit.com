---
title: 'What You See Is Faster Than What You Get: Techniques for Perceived Performance'
layout: ../../layouts/BlogPost.astro
---

This May, I had the pleasure to present at [Web Performance Meetup](https://www.meetup.com/Berlin-Web-Performance-Group/) in Berlin. This was a very special moment for me as it was my first public talk :blush: The following is a transcript and slides from my presentation. You can also find links to all resources I used preparing for this talk. Enjoy!

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.001.webp">
		<img src="/uploads/2017/06/images.001.jpg" alt="Title slide: What You See Is Faster Than What You Get — talk introduction">
	</picture>
	<div class="c-slide__annotations">
		<p>
      Hey everyone, thanks for having me tonight!
		</p>
    <p>
      I'm going to talk about perceived performance, why it matters, and how we can be better at it.
    </p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.002.webp">
		<img src="/uploads/2017/06/images.002.jpg" alt="Speaker introduction — Radimir, front-end developer passionate about web performance, accessibility, and interface animation">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Let me introduce myself first. My name is Radimir and I'm a front-end developer with a passion for web performance, accessibility, and interface animation.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.003.webp">
		<img src="/uploads/2017/06/images.003.jpg" alt="Speaker's social media channels listed under the handle @radibit">
	</picture>
	<div class="c-slide__annotations">
		<p>
			You can find me on all of these social medial channels as <a href="https://twitter.com/radibit">@radibit</a>. I'm pretty active on Twitter, so please ping me if you have any questions 😃.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.004.webp">
		<img src="/uploads/2017/06/images.004.jpg" alt="Lewis Carroll quote illustrating how tricky time perception can be">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Time perception can be really tricky and the following quote by Lewis Carroll shows exactly that.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.005.webp">
		<img src="/uploads/2017/06/images.005.jpg" alt="Time as an objective, precisely measurable quantity — atomic clocks">
	</picture>
	<div class="c-slide__annotations">
		<p>
			It's also an objective quantity which means we can measure it very precisely e.g. atomic clocks.
		</p>
	</div>
</article>

<article class="c-slide">
	<video class="c-slide__image" controls preload="metadata" src="/uploads/2017/06/videos.001.mp4">
		Sorry, your browser doesn't support embedded videos. Try
		<a href="/uploads/2017/06/videos.001.mp4">downloading it</a>
		instead.
	</video>
	<div class="c-slide__annotations">
		<p>
			And we're really inventive when it comes to clocks and watches. Here we can see a beautiful digital clock made out of smaller analog clocks created by <a href="www.dillongallery.com/humans-since-1982/">Humans Since 1982</a>.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.007.webp">
		<img src="/uploads/2017/06/images.007.jpg" alt="Too much focus on objective page load time — web performance tracking tools">
	</picture>
	<div class="c-slide__annotations">
		<p>
			We focus too much on improving the objective time! There are so many great tools built with the idea of tracking the page load time.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.008.webp">
		<img src="/uploads/2017/06/images.008.jpg" alt="The way people perceive time is subjective">
	</picture>
	<div class="c-slide__annotations">
		<p>
			However, the way how people perceive time is subjective.
		</p>
	</div>
</article>

<article class="c-slide c-slide--large">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.009.webp">
		<img src="/uploads/2017/06/images.009.jpg" alt="The Kappa effect — a journey covering more distance appears to take longer even when time is equal">
	</picture>
	<div class="c-slide__annotations">
		<p>
			To illustrate that I will use the <a href="https://www.wikiwand.com/en/Kappa_effect">Kappa effect</a>. It can be explained with a journey made in two parts that take an equal amount of time. Between these two parts, the journey that covers more distance may appear to take longer than the journey covering less distance, even though they take an equal amount of time.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.010.webp">
		<img src="/uploads/2017/06/images.010.jpg" alt="Vital performance metrics: time-to-interact, first meaningful paint, and above-the-fold loading time">
	</picture>
	<div class="c-slide__annotations">
		<p>
			It’s vital for the success of our apps to consider the following metrics time-to-interact, first meaningful paint, and above the fold loading time.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.011.webp">
		<img src="/uploads/2017/06/images.011.jpg" alt="Web performance tools: WebPagetest, Lighthouse, and perf-tooling.today">
	</picture>
	<div class="c-slide__annotations">
		<p>Great tools and resources:</p>
		<ul>
			<li>
				<a href="https://www.webpagetest.org/">WebPagetest</a>
			</li>
			<li>
				<a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a>
			</li>
			<li>
				Even more on:
				<a href="http://www.perf-tooling.today/">perf-tooling.today</a>
			</li>
		</ul>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.012.webp">
		<img src="/uploads/2017/06/images.012.jpg" alt="People care about how apps feel — everyone contributes to great user experience">
	</picture>
	<div class="c-slide__annotations">
		<p>
			As web developers, we need to understand that people care only about the feel of our apps. But it’s not only about the technicality. Everyone should contribute in the process of building great user experience.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.016.webp">
		<img src="/uploads/2017/06/images.016.jpg" alt="Talk outline: why perceived performance matters, how people perceive time, and techniques to improve it">
	</picture>
	<div class="c-slide__annotations">
		<p>
			In the next minutes, I'm going to explain why perceived performance matters, how people perceive time, and which techniques we can use to improve the perception of our apps.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.017.webp">
		<img src="/uploads/2017/06/images.017.jpg" alt="Reasons why perceived performance matters">
	</picture>
	<div class="c-slide__annotations">
		<p>
			So let's elaborate on the reasons why perceived performance matters!
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.018.webp">
		<img src="/uploads/2017/06/images.018.jpg" alt="Twitter's progressive web app with data saver and progressive loading — impact on brand perception">
	</picture>
	<div class="c-slide__annotations">
		<p>
			For starters, it affects the perception of your brand. Twitter released recently <a href="https://developers.google.com/web/progressive-web-apps/">progressive web app</a> for their main product which includes data saver feature, progressive image loading etc. Source <a href="pwastats.com">pwastats.com</a>
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.019.webp">
		<img src="/uploads/2017/06/images.019.jpg" alt="housing.com's new progressive web app platform and its performance improvements">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Another great example of how performance optimizations produce better results is the new <a href="https://developers.google.com/web/showcase/2016/housing">PWA platform</a> for <a href="https://housing.com/">housing.com</a>.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.020.webp">
		<img src="/uploads/2017/06/images.020.jpg" alt="Radware's study: a 500ms delay increases user frustration by 26% and drops satisfaction by 8%">
	</picture>
	<div class="c-slide__annotations">
		<p>
			<a href="https://www.radware.com/mobile-eeg2013/">Radware's study</a> proves that 500ms delay increased users’ frustration by 26%, while at the same time satisfaction dropped by 8%.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.021.webp">
		<img src="/uploads/2017/06/images.021.jpg" alt="Slow websites dramatically reduce purchase intent and perceived brand functionality">
	</picture>
	<div class="c-slide__annotations">
		<p>
			They also concluded that slow websites dramatically reduced the measured emotional aspect of purchase intent and brand functionality.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.022.webp">
		<img src="/uploads/2017/06/images.022.jpg" alt="Ilya Grigorik's definition: perceived performance as a function of expected performance, actual performance, and UX">
	</picture>
	<div class="c-slide__annotations">
		<p>
			<a href="https://www.igvita.com/">Ilya Grigorik</a> defined in his <a href="https://www.youtube.com/watch?v=7ubJzEi3HuA">Fluent 2014 talk</a> that perceived performance is a function of the expected performance from the users, actual performance, and the UX. The latter is every team member's contribution.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.023.webp">
		<img src="/uploads/2017/06/images.023.jpg" alt="Perceived performance as an opportunity to optimize by thinking like the user">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Perceived performance is our chance to optimize our apps and websites by thinking like our user.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.024.webp">
		<img src="/uploads/2017/06/images.024.jpg" alt="How people perceive time — section introduction">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Let’s start with describing how people perceive time.
		</p>
	</div>
</article>

<article class="c-slide c-slide--large">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.025.webp">
		<img src="/uploads/2017/06/images.025.jpg" alt="The internal clock model: pacemaker, memory, and decision-making stages of time perception">
	</picture>
	<div class="c-slide__annotations">
		<p>
			<a href="https://pdfs.semanticscholar.org/707a/b6961398bb12007252c454539e42f3ce121e.pdf">The internal clock model</a> shows how our time perception depends on our memory associated with a certain stimulus. It starts by activating a pacemaker. Then in the second (memory) stage the neurons transmit the information and our brains start looking for previous experiences connected with this stimulus. Finally, we are making a decision based on the accumulated information. The time of decision making shortens considerably if we have a memory connected with the received stimulus.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.026.webp">
		<img src="/uploads/2017/06/images.026.jpg" alt="Perceived duration between successive events — eye saccades cause ~40 minutes of lost time per day">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Perceived duration is the perceived time interval between two successive events.
		</p>
		<p>
			For example with each movement of our eyeballs we are loosing a fraction of a second. This is nearly 40 min every single day!
		</p>
	</div>
</article>

<article class="c-slide">
	<video class="c-slide__image u-noBorder" controls preload="metadata" src="/uploads/2017/06/videos.002.mp4">
		Sorry, your browser doesn't support embedded videos. Try
		<a href="/uploads/2017/06/videos.002.mp4">downloading it</a>
		instead.
	</video>
	<div class="c-slide__annotations">
		<p>
			To illustrate that we can try the <a href="https://www.wikiwand.com/en/Chronostasis">Chronostasis experiment</a>. It's a temporal illusion in which the first impression following the introduction of a new event appears to be extended in time (stopped-clock animation).
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.028.webp">
		<img src="/uploads/2017/06/images.028.jpg" alt="Perceived duration and its impact on web performance — section transition">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Next, let's see what we know about perceived duration and its impact on web performance.
		</p>
	</div>
</article>

<article class="c-slide c-slide--large">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.029.webp">
		<img src="/uploads/2017/06/images.029.jpg" alt="Reaction time studies: four key time durations — 0.1–0.2s, 0.5–1s, 2–5s, and 5–10s">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Reaction time has a been a favorite subject of experimental psychologists for almost a decade.
			<a href="http://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/biae.clemson.edu/bpc/bp/Lab/110/reaction.htm">Studies</a> defined four important time durations in the context of perceived performance:
		</p>
		<ul>
			<li>
				0.1 to 0.2s Acceptable response time which simulates instantaneous behavior.
			</li>
			<li>
				0.5 to 1s Immediate behavior. Usually the response time in a human-to-human conversation. Delays within this interval are noticeable but easily tolerated by most users. During this time, the user must receive a response that their command (click of a button or link) has been accepted.
			</li>
			<li>
				2 to 5s Optimal experience as a state when people experience concentration, absolute absorption in an activity and deep enjoyment.</li>
			<li>
				5 to 10s The user would still be focused on their task but would become easily distracted. This is the time for the system to engage the user in the process. If this is not done, then the user will most probably be lost forever.
			</li>
		</ul>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.030.webp">
		<img src="/uploads/2017/06/images.030.jpg" alt="Visual feedback guidelines: under 1s no indicator needed, 1–3s feedback required, 3–8s explain what the app is doing">
	</picture>
	<div class="c-slide__annotations">
		<ul>
			<li>
				Less than 1s - no need to distract users’ attention with visual indicators.
			</li>
			<li>
				Between 1s and 3s visual feedback is needed, though most people still have patience.
			</li>
			<li>
				Between 3s and 8s we need to explain what is our app doing. Really high chance to lose people’s attention.
			</li>
		</ul>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.035.webp">
		<img src="/uploads/2017/06/images.035.jpg" alt="Allen Pike: joy is lost after 1 second and users lose their feeling of task flow">
	</picture>
	<div class="c-slide__annotations">
		<p>
			<a href="https://www.allenpike.com">Allen Pike</a> gives us another perspective in terms animated feedback. In his article <a href="https://www.allenpike.com/2011/providing-joy-at-60-fps/">Providing joy at 60 fps</a> he states that over 1s joy is lost and users are loosing their feeling of task flow.
		</p>
	</div>
</article>

<article class="c-slide c-slide--large">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.036.webp">
		<img src="/uploads/2017/06/images.036.jpg" alt="Just-noticeable difference (JND) and the Weber–Fechner law relating stimulus change to perceived change">
	</picture>
	<div class="c-slide__annotations">
		<p>
			To prevent this scenario and to understand better how far we need to go optimizing our apps, we should understand the theory of <a href="https://www.wikiwand.com/en/Just-noticeable_difference">just-noticeable difference or JND</a>.
		</p>
		<p>
			It's based on <a href="https://www.wikiwand.com/en/Weber%E2%80%93Fechner_law">Weber–Fechner law</a> which relates to human perception, more specifically the relation between the actual change in a physical stimulus and the perceived change.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.037.webp">
		<img src="/uploads/2017/06/images.037.jpg" alt="Steven Seow's conclusion: a minimum 20% change is required for users to detect any difference">
	</picture>
	<div class="c-slide__annotations">
		<p>
			In his book <a href="https://www.amazon.com/Designing-Engineering-Time-Psychology-Perception/dp/0321509188">"Designing and engineering time"</a>, Steven Seow comes to the conclusion that in order for users to detect any difference (visual, audio etc.) it has to be changed by minimum of 20%.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.038.webp">
		<img src="/uploads/2017/06/images.038.jpg" alt="Aim for 30% improvement to exceed the perception threshold — e.g. 0.9s faster for a 3s action">
	</picture>
	<div class="c-slide__annotations">
		<p>
			We can do even better! Aim for 30% to go beyond the threshold. If we have an action that takes 3s for example, we need to make it 0.9s faster in order for our users to notice the difference.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.039.webp">
		<img src="/uploads/2017/06/images.039.jpg" alt="How to speed up perception — techniques section introduction">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Let's talk about how we can speed up perception.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.040.webp">
		<img src="/uploads/2017/06/images.040.jpg" alt="Twitter poll asking about favorite techniques for improving perceived performance">
	</picture>
	<div class="c-slide__annotations">
		<p>
			<a href="https://twitter.com/radibit/status/857706400985878531">I asked on Twitter</a> about a favorite technique for improving perceived performance 🙂.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.041.webp">
		<img src="/uploads/2017/06/images.041.jpg" alt="Optimistic updates: invisible background operations that happen before the user asks for them">
	</picture>
	<div class="c-slide__annotations">
		<p>
			First are the optimistic updates 🔮. These are invisible, background operations that happen before the user actually asks for them.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.042.webp">
		<img src="/uploads/2017/06/images.042.jpg" alt="Instagram's optimistic update: uploads in the background while the user adds a title and tags">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Great example of this technique is the <a href="https://www.fastcodesign.com/1669788/the-3-white-lies-behind-instagrams-lightning-speed">Instagram app</a>. They invite the user to add a title and tags as the picture uploads in the background. By the time the user is ready to press a share button, upload will be completed and it’ll be possible to share their picture instantly.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.043.webp">
		<img src="/uploads/2017/06/images.043.jpg" alt="Instagram registers a Like action even before the feed has finished loading">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Another example is the fact that they can register the user "Like" action even if the feed is still loading.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.044.webp">
		<img src="/uploads/2017/06/images.044.jpg" alt="Skeleton screens: Luke Wroblewski's alternative to spinners that creates anticipation and reduces cognitive load">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Next are the skeleton screens. <a href="https://www.lukew.com/">Luke Wroblewski</a> first discussed the <a href="https://www.lukew.com/ff/entry.asp?1797">drawbacks of using loading spinners</a> in on-screen experience. He spoke in favor of what he called “skeleton screens”. Skeleton screens create anticipation of what is to come and reduce cognitive load.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.046.webp">
		<img src="/uploads/2017/06/images.046.jpg" alt="Apple Human Interface Guidelines: Safari iOS launch screen that creates an instant, responsive feel">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Apple included it in their <a href="https://developer.apple.com/ios/human-interface-guidelines/graphics/launch-screen/">Human Interface Guidelines</a>. The example shows how in Safari iOS app a launch screen appears instantly when the app starts up. Then it's quickly replaced with the first screen of the app, giving the impression that the app is fast and responsive.
		</p>
	</div>
</article>

<article class="c-slide">
	<video class="c-slide__image" controls preload="metadata" src="/uploads/2017/06/videos.003.mp4">
		Sorry, your browser doesn't support embedded videos. Try
		<a href="/uploads/2017/06/videos.003.mp4">downloading it</a>
		instead.
	</video>
	<div class="c-slide__annotations">
		<p>
			The team behind <a href="http://www.tandemseven.com">tandemseven</a> shows the power of skeleton screens together with incrementally constructed UI before the content is fully loaded, part of their great article on <a href="http://www.tandemseven.com/blog/how-to-use-disneys-principles-of-animation-to-improve-ux/">how to use animations to improve UX.</a>
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.048.webp">
		<img src="/uploads/2017/06/images.048.jpg" alt="Progressive loading — distinct from progressive JPEG loading">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Let's talk about progressive image loading (not to be confused with progressive JPEG loading).
		</p>
	</div>
</article>

<article class="c-slide">
	<video class="c-slide__image" controls preload="metadata" src="/uploads/2017/06/videos.004.mp4">
		Sorry, your browser doesn't support embedded videos. Try
		<a href="/uploads/2017/06/videos.004.mp4">downloading it</a>
		instead.
	</video>
	<div class="c-slide__annotations">
		<p>
			It's a really popular approach to give users idea of what they can expect from the image content.
			With this <a href="https://medium.com/@addyosmani/javascript-start-up-performance-69200f43b201">Medium's blog post</a> we can see the progressive image loading in action (blurred, small version of the original image file has been loaded first).
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.050.webp">
		<img src="/uploads/2017/06/images.050.jpg" alt="Tools for progressive loading">
	</picture>
	<div class="c-slide__annotations">
		<span>
			Some great tools recommended in the following <a href="https://csswizardry.com/2016/10/improving-perceived-performance-with-multiple-background-images/">csswizardry (Harry Roberts) article</a>:
		</span>
		<ul>
			<li>
				<a href="http://www.louisbourque.ca/Color-Extractor/">color-extractor</a>
			</li>
			<li>
				<a href="https://www.npmjs.com/package/get-image-colors">get-image-colors</a>
			</li>
			<li>
				<a href="https://github.com/ben-eb/postcss-resemble-image">postcss-resemble-image</a>
			</li>
		</ul>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.051.webp">
		<img src="/uploads/2017/06/images.051.jpg" alt="CodePen demo using color-extractor and CSS linear-gradient for progressive placeholders">
	</picture>
	<div class="c-slide__annotations">
		<p>
			We can see an example of the result produced using color-extractor and linear-gradient in <a href="https://codepen.io/radibit/pen/WjOZBb">this codepen</a>. For better effect change to 3G throttling in your browser's network preferences.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.052.webp">
		<img src="/uploads/2017/06/images.052.jpg" alt="Progress indicators: combine with exact progress percentage (e.g. 70% or 1 of 4) to reduce perceived wait time">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Next, progress indicators. When people don’t have a sense of how much is left of a particular process they will feel that it takes longer. It’s better to combine it with exact indication of the progress e.g. 70% or 1 of 4 etc.
		</p>
	</div>
</article>

<article class="c-slide">
	<video class="c-slide__image" controls preload="metadata" src="/uploads/2017/06/videos.005.mp4">
		Sorry, your browser doesn't support embedded videos. Try
		<a href="/uploads/2017/06/videos.005.mp4">downloading it</a>
		instead.
	</video>
	<div class="c-slide__annotations">
		<p>
		 With the following <a href="https://codepen.io/restlessdesign/pen/CJrad">codepen example</a> we can demonstrate what <a href="http://www.chrisharrison.net/index.php/Research/ProgressBars">Chris Harrison</a> discovered. The effect of animation in the opposite direction of the progress bar increases the perception of faster completion.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.054.webp">
		<img src="/uploads/2017/06/images.054.jpg" alt="Spinners and loaders — what about them?">
	</picture>
	<div class="c-slide__annotations">
		<p>
			You might ask "What about spinners and loaders?".
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.055.webp">
		<img src="/uploads/2017/06/images.055.jpg" alt="Creative spinners and loaders — fun to build but not ideal as the sole loading indicator">
	</picture>
	<div class="c-slide__annotations">
		<p>
			We all love to <a href="https://codepen.io/RRoberts/pen/pEXWEp">create and play</a> around with them.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.056.webp">
		<img src="/uploads/2017/06/images.056.jpg" alt="Avoid using a spinner as the only loading indicator — it draws attention to the wait">
	</picture>
	<div class="c-slide__annotations">
		<p>
			However, they draw attention to the fact that the user is waiting and we should avoid using them as a single indicator.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.057.webp">
		<img src="/uploads/2017/06/images.057.jpg" alt="Interface animation: one of the most powerful techniques for affecting the perception of time">
	</picture>
	<div class="c-slide__annotations">
		<p>
			One of my favorite techniques is using interface animation. It can affect the perception of time and duration for our site’s visitors.
		</p>
	</div>
</article>

<article class="c-slide">
	<video class="c-slide__image" controls preload="metadata" src="/uploads/2017/06/videos.006.mp4">
		Sorry, your browser doesn't support embedded videos. Try
		<a href="/uploads/2017/06/videos.006.mp4">downloading it</a>
		instead.
	</video>
	<div class="c-slide__annotations">
		<p>
			"<a href="http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)1099-0720">Studies</a> demonstrate that well implemented animations have a direct effect upon cognitive load." However, it's important to note that poorly designed or overly complex animations might have a negative impact on our apps. This indirectly can affect user's perception of time needed to complete certain action. <a href="https://www.mobify.com/insights/designing-appearance-speed/">Source</a>.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.059.webp">
		<img src="/uploads/2017/06/images.059.jpg" alt="Animation helps the eye track newly positioned objects, creating a mental map — Val Head's UI animation article">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Animation can help the eye to follow easily the position of newly appeared objects on the screen. Using motion gives us ability to create a mental map of where items are located. <a href="http://valhead.com/">Val Head</a> (highly recommend to follow her) illustrates this as part of her <a href="https://alistapart.com/article/ui-animation-and-ux-a-not-so-secret-friendship">great article</a> in a form of a <a href="https://codepen.io/valhead/pen/BJrpg">codepen example</a>.
		</p>
	</div>
</article>

<article class="c-slide c-slide--large">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.060.webp">
		<img src="/uploads/2017/06/images.060.jpg" alt="Sarah Drasner on context-shifting animations: space, time, and placement associations make interactions feel fluid">
	</picture>
	<div class="c-slide__annotations">
		<p>
			In her article <a href="https://css-tricks.com/the-importance-of-context-shifting-in-ux-patterns/">"The Importance of Context-Shifting in UX Patterns"</a>, Sarah Drasner elaborates on the animation role as part of web development.
			She states, that the associations of space, time and placement can help an interaction seem more fluid and intuitive. Of course, if it's elegantly implemented it will affect positively the perceived performance of our apps.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.061.webp">
		<img src="/uploads/2017/06/images.061.jpg" alt="Animation is powerful but performance and functionality must not be sacrificed">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Animation is a really powerful technique. Nevertheless, performance and functionality should not be sacrificed.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.062.webp">
		<img src="/uploads/2017/06/images.062.jpg" alt="Providing an active button state: one of the quickest techniques for improving perceived performance">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Most likely one of the quickest techniques for improving perceived performance is providing an active state of button elements.
		</p>
	</div>
</article>

<article class="c-slide">
	<video class="c-slide__image" controls preload="metadata" src="/uploads/2017/06/videos.007.mp4">
		Sorry, your browser doesn't support embedded videos. Try
		<a href="/uploads/2017/06/videos.006.mp4">downloading it</a>
		instead.
	</video>
	<div class="c-slide__annotations">
		<p>
			It's way better to present this immediate visual feedback to our users.
		</p>
	</div>
</article>

<article class="c-slide">
	<video class="c-slide__image" controls preload="metadata" src="/uploads/2017/06/videos.008.mp4">
		Sorry, your browser doesn't support embedded videos. Try
		<a href="/uploads/2017/06/videos.006.mp4">downloading it</a>
		instead.
	</video>
	<div class="c-slide__annotations">
		<p>
			We should avoid using transition with active state as it increases the time between registering user's action and reacting to it.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.065.webp">
		<img src="/uploads/2017/06/images.065.jpg" alt="Think carefully about performance optimizations and their contribution to the user experience">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Think carefully about the performance optimizations and their contribution to the UX.
		</p>
	</div>
</article>

<article class="c-slide">
	<video class="c-slide__image" controls preload="metadata" src="/uploads/2017/06/videos.009.mp4">
		Sorry, your browser doesn't support embedded videos. Try
		<a href="/uploads/2017/06/videos.009.mp4">downloading it</a>
		instead.
	</video>
	<div class="c-slide__annotations">
		<p>
			No need of overengineering!
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.067.webp">
		<img src="/uploads/2017/06/images.067.jpg" alt="What matters most is how fast your website or app feels">
	</picture>
	<div class="c-slide__annotations">
		<p>
			What really matters is how fast your website or app feels.
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.068.webp">
		<img src="/uploads/2017/06/images.068.jpg" alt="Care more about your users — it's all about them">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Care more about your users. It's all about them!
		</p>
	</div>
</article>

<article class="c-slide">
	<picture class="c-slide__image">
		<source type="image/webp" srcset="/uploads/2017/06/images.069.webp">
		<img src="/uploads/2017/06/images.069.jpg" alt="Thank you — closing slide">
	</picture>
	<div class="c-slide__annotations">
		<p>
			Thank you!
		</p>
	</div>
</article>
