---
title: "What is Client Side Routing?"
date: 2018-11-24
archive: true
tags: [archive]
summary: "Describes what client side routing is"
---

If you’re familiar with traditional web development where you actually have different HTML files for different URL paths, routing in the Single Page App world can be kind of confusing.

> Stop telling me there is only one page in your so-called Single Page Application. I’m clicking around your site and I can tell you there is more than one “page” sir!
>
> — A Very Confused Me

When I started doing modern development, a lot of the explanations I found used a lot of technical jargon alongside more React / Angular / [Anything](https://github.com/Rabrennie/anything.js/) technical jargon. So I wrote this article as a more practical explanation.

## How We Used To Do It

Let’s say you had a traditional site with just a bunch of HTML, CSS, and JS files and you just hosted it with a standard web server. If you then visited the site with a URL like `http://www.yoursite.com/some/path`, the web server would actually look in the files and folders on the server. It would look for a folder called `some` and then a file inside of that called `path`. Most web servers will then try one more thing if they can’t find a file there. They will also check for `/some/path/index.html`. Let’s say there is a file at that folder path. The web server reads it’s contents and sends it to the browser. Simple! It’s like a file finder on your computer!

## How We Do It Now

However, in the case of a single page web app, like a client rendered React or Angular app. There is nothing at the path `/some/path` or `/some/path/index.html`. If you’ve ever looked at the compiled contents of your web application, you’ll probably only see a `index.html` and an assortment of JS and CSS files. When you click around your application, the fact that the URL may show `/some/path` to the user is basically a simulation. It gives the user the impression they are navigating between pages. In reality, the JS code simply updating the contents of the existing page and telling the browser to show `/some/path` as the route. The browser exposes some JS commands called the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) to allow your JS code to do this. In the React world, you are probably using React Router which is doing this manipulation for you.
