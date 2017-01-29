---
layout: post
title: HTTPS setup for GitHub Pages
---


Probably many of you already know that [GitHub announced last year](https://github.com/blog/2186-https-for-github-pages) HTTPS support for GitHub Pages. Of course this is great news and kudos to the GitHub team for providing this feature. However I found that this is applicable only for `<username>.github.io` sites, which means we need to look for alternatives in order to have encrypted connection for custom domains. With this article I would like to describe my setup and hopefully save you some time. But first, why it’s so important!


## HTTPS

HTTPS (Hypertext Transfer Protocol Secure) uses separate protocols called SSL (Secure Sockets Layer) and TLS (Transport Layer Security) to ensure encrypted communication between client and server.
The importance of the standard can be clearly seen by the actions of the teams behind the most popular browsers. Firefox [announced earlier this week](https://blog.mozilla.org/security/2017/01/20/communicating-the-dangers-of-non-secure-http/), that they will mark HTTP connection as not secure. Same warning will be introduced with the upcoming Chrome release, following [their statement](https://security.googleblog.com/2016/09/moving-towards-more-secure-web.html) published at the end of the last year. Of course this is really important, but still it’s our responsibility as web developers to provide secure connection to our hosted content.

My personal website is static, built using Jekyll and hosted on GitHub Pages. So you may ask why I should care so much, if I don’t have any sensitive information. The answer is really simple. There are a lot of benefits, that comes by serving your web content using HTTPS. Aside from the browser indication for secure connection, which brings trust to your visitors, it’s the only way at the moment to use the HTTP/2 protocol in practice. Another really important factor is the ability to get benefit from performance technologies like [Service Worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) and [Brotli](https://github.com/google/brotli) ⚡. It’s also known that there is better ranking in search engines for HTTPS websites.


## CloudFlare

My first choice was [CloudFlare](https://www.cloudflare.com/), primarily because of its popularity, free plan, and very useful [performance services](https://www.cloudflare.com/performance/). The setup was pretty much straight forward as I was following the steps
explained in their [blog post](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/) on that topic.

After I added my website and configured my DNS records I had to choose a SSL mode from the available three options:

- Flexible SSL
- Full SSL
- Full SSL (strict)

It appeared to me that for the latter two options required a server configured to answer HTTPS connections, with a self-signed certificate, which was something in contrast with my initial idea for quick and easy setup. The Flexible SSL was the obvious option. However I found that with this SSL option the communication between GitHub Pages and CloudFlare will remain in plaintext.


![CF Flexible SSL](/uploads/2017/01/cf-flexible-ssl.jpg){:class="o-img o-img--center"}


This means that the browser will show my visitors the green, secure connection, though that won't be entirely true. This was not acceptable for me as a solution, so that’s why I continued my research.


## Netlify

Looking for alternatives I found [Netlify](https://www.netlify.com/) as a really good fit for me. The setup, similarly to CloudFlare was quick and simple. The important part for me was the provided encrypted connection throughout the whole communication channel. In my opinion their continuous deployment process is more pleasant for use as well.

From a [performance perspective](https://www.netlify.com/features/) Netlify provides really fast DNS service (I definitely noticed that during my initial setup of the DNS records), global CDN and instant cache invalidation, which is really great. They also have a free upgrade to their pro plan for open source projects :heart:.

Of course CloudFlare offers more performance services, but for me the focus was on the actual HTTPS configuration, easy setup, and simple deployment process, which led me to choose Netlify.

At the end I would like to share with you a link to the following [GitHub thread](https://github.com/isaacs/github/issues/156), which was a helpful part of my research.
