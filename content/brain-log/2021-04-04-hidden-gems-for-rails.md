---
title: "Hidden Gems for Rails"
date: 2021-04-04
archive: true
tags: [archive]
summary: "A list of my top 5 Rails Gems"
---

So the title for this post is pretty self-explanatory. Yes, there are the common popular gems everyone uses, like Devise. However, there are some hidden “gems“ out there. *(Did you catch that?)* Also note that I‘ve used all of these gems in production and found them to be stable over time. So anyway here‘s my list:

## Counter Culture Gem

Rails has a built in system to do counter caches, which means count the related records of another type. However, it‘s pretty primitive. Sometimes you need to sum a column from another class or sometimes you only need to count records given a condition. That‘s what this gem does. The DSL is really simple and has worked pretty reliable for us. [GitHub](https://github.com/magnusvk/counter_culture)

## Kaminari

Oh Kaminari... Kaminari helps you take your ActiveRecord relations and paginate them. So if you want to display a large list of things in a UI, you‘ll need to paginate. You can paginate just be using ActiveRecord, but this gem just makes it so easy and integrates just so seamlessly with ActiveRecord that it‘s a great choice. [GitHub](https://github.com/kaminari/kaminari)

## LightService

I‘ve written a couple of articles on this gem. It helps organize your Rails service objects in a functional pattern. If you‘re business logic code is getting a little convoluted and hard to follow, I highly recommend this project. [GitHub](https://github.com/adomokos/light-service)

## Geocoder

If your application deals with location data, i.e. longitude, latitude, this is a fantastic gem. You can find database records that are near other records. Provide a string and figure out where it is. I don‘t know of a comparable gem as powerful and stable in the Ruby ecosystem. [GitHub](https://github.com/alexreisner/geocoder)

## Lockbox

This is another ActiveRecord integrated gem that makes it super easy to store encrypted data in your database. You simply add it, configure the security keys, and then mark that column as an encrypted column. With some exceptions, you can then just use it in your application as an unencrypted column. [GitHub](https://github.com/ankane/lockbox)
