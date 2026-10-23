---
title: "So I gave Svelte a Try"
date: 2021-03-19
archive: true
tags: [archive]
summary: "So I gave Svelte a Try"
---

When I first started writing this blog, I wanted to try something new. I‘m a big believer in using proven technologies in production, but still taking advantage of opportunities like this site to try new things.

![Svelte Framework logo](/archive/svelte-logo.png)

## What is Svelte?

Svelte is a framework a la React and Vue. It uses a componentized approach just like those frameworks. However, it compiles down to plain JS with no runtime. That way it‘s smaller. It also looks a lot more like plain HTML and JS rather than weird custom syntax (I‘m looking at your Angular). It also has first class support for animations, which some other frameworks (cough React) don‘t have.

## However, there are some problems...

The build ecosystem and routing solutions are a bit of a mess and the maintainers keep changing their mind (despite being well intentioned).

For example, Svelte initially came with a CLI, then the maintainers switched to a format where they give you a template repo and you clone it via a custom tool called [degit](https://github.com/Rich-Harris/degit). They now want to move back to a CLI.

The recommended Svelte build tool is called [Sapper](https://sapper.svelte.dev/). It‘s been deprecated in favor of a to be released build tool called Svelte Kit that is months and months delayed as of March 2021. They‘re also moving it to [Snowpack](https://www.snowpack.dev/) for reasons? However even sticking with Sapper, I had a lot of obvious issues, like styling the `body` tag without triggering a Sapper warning. Build times for any non-trivial app can also get quite long using the webpack version of Sapper, which is something the maintainers acknowledge but can‘t fix until SvelteKit.

Additionally, one of the principles of the framework is to bind JS to the UI in a way that looks like normal JS. However, this can lead to some problems. You think you‘re looking at {/* eslint-disable-next-line react/no-unescaped-entities */} `let a = "b"` But it‘s actually doing a ton of magic to watch the value that expression to update the UI. So when it goes wrong. It‘s a little hard to debug.

## Conclusion

First of all, this is just my opinion and this was my first attempt at using Svelte. However, chances are you‘re in the same boat, so I thought my insights could be valuable. I‘ve said a lot of negative things here, but I don‘t mean to rant. I really like Svelte‘s first class support for animations and the fact that it doesn‘t need to start up a runtime on the client to work. That means Svelte sites are generally fast after compilation. However, the ecosystem needs some more attention. It doesn‘t just need to be bigger but needs for the maintainers to stop using it for experimentation. If an idea is good at one point, it needs overwhelming reasons to change.
