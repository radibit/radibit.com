---
title: HTTPS setup for GitHub Pages using Netlify
---

Probably many of you already know that [GitHub announced last year](https://github.com/blog/2186-https-for-github-pages) HTTPS support for GitHub Pages. Of course, this is great news and kudos to the GitHub team for providing this feature. However, I found that this is applicable only for `<username>.github.io` sites, which means we need to look for alternatives to have an encrypted connection for custom domains. With this article, I would like to describe my setup and hopefully, save you some time. But first, why it matters!

## The importance of HTTPS

HTTPS (Hypertext Transfer Protocol Secure) uses a separated protocol called [TLS (Transport Layer Security)](https://hpbn.co/transport-layer-security-tls/) to ensure encrypted communication between client and server. The importance of the standard can be clearly seen by the actions of the teams behind the most popular browsers. Firefox [announced earlier this week](https://blog.mozilla.org/security/2017/01/20/communicating-the-dangers-of-non-secure-http/), that they will mark HTTP connection as not secure and will notify the visitor when it’s encrypted.

![HTTPS Firefox](/uploads/2017/01/https-firefox.png){:class="o-img o-img--center"}

Similar notification will be introduced with the upcoming Chrome release, following [their statement](https://security.googleblog.com/2016/09/moving-towards-more-secure-web.html) published at the end of last year.

![HTTPS Chrome](/uploads/2017/01/https-chrome.png){:class="o-img o-img--center"}

Of course, this is really important, but it’s our responsibility as web developers to provide a trusted connection to our hosted content.

My personal website is static, built using Jekyll and hosted on GitHub Pages. So you may ask why I should care so much if I don’t have any sensitive information. The answer is really simple. There are a lot of benefits that come by serving your web content using HTTPS. Aside from the browser indication for a secure connection, which brings trust to your visitors, it’s the only way to use the HTTP/2 protocol in practice. Another really important factor is the ability to get benefit from performance technologies like [Service Worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) and [Brotli](https://github.com/google/brotli) ⚡. It’s also known that there is a better ranking in search engines for HTTPS websites. Recently Google announced [mobile-first indexing](https://webmasters.googleblog.com/2016/11/mobile-first-indexing.html) and one of their recommendations is to migrate to a secure site. Last, but not least, the [AMP (Accelerated Mobile Pages)](https://www.ampproject.org/) technology requires an encrypted connection for many of its [URL values](https://www.ampproject.org/docs/reference/validation_errors#invalid-attribute-value).

After explaining the importance of having HTTPS-enabled site, let me share my impressions of two services I tried and how I set up the one I ended up with.

## Let’s try CloudFlare

My first choice was [CloudFlare](https://www.cloudflare.com/), primarily because of its popularity, free plan, and very useful [performance services](https://www.cloudflare.com/performance/). The setup was pretty straight forward as I was following the steps explained in their [blog post](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/) on that topic.

After I added my website and configured my DNS records I had to choose TLS mode from the available three options:

- **Flexible SSL** - provides a secure connection between your visitor and CloudFlare, but no secure connection between CloudFlare and your web server. You don't need to have an SSL certificate on your web server, but your visitors still see the site as being HTTPS enabled
- **Full SSL** - provides a secure connection between your visitor and CloudFlare, and secure connection (but not authenticated) between CloudFlare and your web server. You will need to have your server configured to answer HTTPS connections, with a self-signed certificate at least
- **Full SSL (strict)** - provides a secure connection between the visitor and CloudFlare, and secure and authenticated connection between CloudFlare and your web server. You will need to have your server configured to answer HTTPS connections, with a _valid_ SSL certificate

Apparently, the latter two options required a server configured to answer HTTPS connections, with a self-signed certificate, which was in contrast with my initial idea for quick and easy setup. The Flexible SSL was the obvious option, but the communication between GitHub Pages and CloudFlare will remain in plaintext.

![CF Flexible SSL](/uploads/2017/01/cf-flexible-ssl.jpg){:class="o-img o-img--center"}

**This means the browser was going to show my visitors the green, secure connection, although that would not have been entirely true.** This was not an acceptable solution, so I continued my research.

## Why I chose Netlify and how I set it up

Looking for alternatives I found [Netlify](https://www.netlify.com/) was a really good fit for me. The setup, similarly to CloudFlare was quick and simple. The most important part was the provided encrypted connection throughout the whole communication channel. In my opinion, their continuous deployment process is more pleasant for use as well.

From a [performance perspective](https://www.netlify.com/features/), Netlify provides really fast DNS service (I definitely noticed that during my initial setup of the DNS records), global CDN and instant cache invalidation, which is really great. They also have a free upgrade to their pro plan for open source projects ❤.

Let’s start with the actual configuration. After the registration process, you can immediately connect your site powered by GitHub Pages using the “Add a New Project” option from the dashboard.

![Netlify Site Connect](/uploads/2017/01/netlify-site-connect.png){:class="o-img"}

Next, you need to provide your domain name and edit the DNS servers with your domain register. I found really handy the option that Netlify offers to manage your domain, which saves the work of entering the DNS records manually. Of course, you have full control over all DNS settings, in case you need to fine tune them.

![Netlify Domain](/uploads/2017/01/netlify-domain.png){:class="o-img"}

The final step is to enable your TLS certificate issued by Let’s Encrypt from the HTTPS section on the dashboard. This happens with one click and it’s as simple as it sounds. Here you can also specify if you want to force HTTP connection to redirect automatically to HTTPS, which is really useful.

![Netlify HTTPS](/uploads/2017/01/netlify-https.png){:class="o-img"}

By completing this simple process you’ll have an encrypted connection for your site and you can enjoy the green 🔒 in the address bar of your browser.

With authorities like [Let's Encrypt](https://letsencrypt.org/) we can have trusted TLS certificates at zero cost. There are many services that help us to automate and simplify the HTTPS setup and you should find what works best for you. We are responsible for the security of our visitors and it should stay always high priority. The goal is to provide safe and reliable experience, which can lead to a secure internet for everyone.
