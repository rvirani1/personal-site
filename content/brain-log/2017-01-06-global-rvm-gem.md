---
title: "Installing a Ruby Gem Globally in RVM"
date: 2017-01-06
archive: true
tags: [archive]
summary: "Explains how to install a Ruby gem globally in RVM"
---

If you are a Rubyist and use RVM, you have probably used RVM gemsets before. If you haven’t, you should because it has some nifty features that will make your life easier. Here’s one of them

Since gemsets allow you to literally create separate universes of gems, you can run into an interesting problem. **What if you actually want a gem that is globally installed across all of your gemsets?** You probably want bundler in every one of your gemsets, right?

Luckily, RVM makes this very easy and it’s built right in. `rvm @global do gem install <gem name>`

Boom! That‘s it.
