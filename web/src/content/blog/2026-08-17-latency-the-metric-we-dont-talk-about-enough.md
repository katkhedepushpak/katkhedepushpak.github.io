---
title: "Latency — The Metric We Don't Talk About Enough"
slug: "latency-the-metric-we-dont-talk-about-enough"
date: "2026-08-17"
tags: ["distributed-systems", "tail-latency", "latency", "scalability", "system-design", "microservices"]
excerpt: "Throughput gets most of the attention, but as requests fan out across more services, it's the straggler — not the average — that decides how long a user actually waits. A decade after 'The Tail at Scale,' how much of that playbook still holds up?"
featured: true
---

I recently started thinking about latency from a slightly different perspective.

With faster internet, better devices, and increasingly optimized applications, users have become accustomed to getting almost everything *immediately*. Search results, videos, feeds, AI responses, payments, dashboards — we barely tolerate waiting anymore.

And there's an interesting relationship here: as the perceived cost of waiting decreases, our tolerance for waiting seems to decrease with it.

Some research has even explored how our interaction with digital environments is associated with increasingly fragmented attention. But whether we call it shrinking attention span or simply **higher expectations for responsiveness**, the engineering implication is interesting:

**Latency matters. A lot.**

As software engineers, we often talk about scalability in terms of **throughput**.

- How many requests can the system handle?
- How many users can we support?
- How many events can we process per second?

But there's another question: **how long does each user have to wait?**

## The tail, not the average

This brings me back to an OG distributed-systems paper: **"The Tail at Scale" — Dean & Barroso, Google, 2013.**

The paper discusses a problem that becomes increasingly important as systems become more distributed. A single user request may fan out to multiple services or servers to gather the data required to construct a response.

If you have 100 downstream operations involved in fulfilling a request, you don't necessarily care about the *average* response time of those 100 operations. You care about the **straggler** — one unusually slow component can hold up the entire request. And as fan-out increases, the probability of encountering one of those slow responses increases too.

That's the essence of **tail latency amplification**.

## Does a 2013 paper still hold up?

A paper published in 2013 is now more than a decade old. Technology has changed dramatically since then — the internet has scaled, applications have become more distributed, and microservices, containers, Kubernetes, serverless architectures, distributed databases, CDNs, and cloud platforms have become mainstream. User expectations have arguably become even more aggressive.

So how much of *The Tail at Scale* still applies today? Quite a lot, I suspect. But some of the questions become more interesting in today's environment:

- Are **replicated/hedged requests** still a practical strategy, given the additional infrastructure cost and traffic they create?
- Should we really optimize primarily for **P99/P99.9 latency** instead of average latency?
- How do we identify and manage the **struggling/straggling server or service** without simply throwing more resources at the problem?
- At what point does additional distribution create more latency complexity than the scalability benefits it provides?
- With increasingly distributed architectures, are we inadvertently trading **architectural scalability for latency complexity**?

## Monoliths vs. distributed systems

There's also an interesting architectural contrast here. A monolith could, in some cases, keep tightly coupled data and computation within the same process or machine. A distributed architecture may require a request to cross multiple network boundaries to assemble the same response.

I'm *not* arguing that monoliths are better — clearly, distribution solves enormous scalability, reliability, and organizational problems. But it does make me wonder: **are we optimizing our systems for throughput while underestimating the latency tax introduced by distribution?**

And perhaps the bigger question: if users are becoming less tolerant of waiting, should **tail latency be treated as a first-class product metric rather than merely an infrastructure metric?**

## I'd love to hear from you

If you've operated distributed systems at scale — have you seen tail latency become the real bottleneck even when throughput and average latency looked perfectly healthy? And what actually worked for controlling the tail?
