---
slug: minimal-rails-api
title: Making minimalist Rails APIs
date: 2020-01-13
author: sevensidedmarble
keywords: rails, ruby
description: Starting new lightweight API servers in Rails 6.
published: false
---

A project I've been working on lately has had the need to handle loads of Stripe webhooks that I haven't been particularly thrilled about writing myself.

Luckily, I found a gem called `stripe_event` that seemed to handle a good 50% of the workload for me. I wouldn't have to write any of the boilerplate around listening for the list of different events, instead I could just focus on my code for handling the specific events I cared about.

I wanted to integrate this gem with Sinatra, but I found it worked a lot better in Rails (in terms of just dropping in and working right away with less configuration).

So away I went, trying to see just how lightweight I could make Ruby on Rails.
