---
title: "Poor Man’s CI: The OverCommit Gem"
date: 2019-01-10
archive: true
tags: [archive]
summary: "Poor Man’s CI: The OverCommit Gem"
---

I’m a huge fan of the [OverCommit](https://github.com/sds/overcommit) gem. The gem uses Git hooks, which you can already use with plain Git, to simplify the process of running test suites and linters as a part of source control.

![Image of the Overcommit CLI](/archive/overcommit.png)

This is a wonder. I can’t tell you how many times I’ve worked with teams that use [CodeClimate](https://codeclimate.com/) or a CI solution to run linters after the fact. Just like it’s better to tell users up front about validation errors before they hit submit, it’s also better to tell developers up front about a linting error before they commit and push.

Here’s how it works:

You install the gem, then run `overcommit --install` to add the OverCommit hook code to your project `.git` directory. This will also add a `overcommit.yml` configuration file to your project. You make some tweaks to support the linters or test suites specific to your project and you’re done.

Every developer who has run `overcommit --install` once in that project gets the full benefit of all of that configuration.

At LoadUp, we’ve found that with a small team we rarely ever need the test suites in our CI and are saving significant amounts of money getting rid of it. Heroku still handles automated builds, but we’ve kept our test suites fast enough that the whole suite runs on `git push`. Sure we could have a suite pass on one developer machine and fail on another. However, that would be caught quite quickly. So give OverCommit a shot in your project and let me know what you think!
