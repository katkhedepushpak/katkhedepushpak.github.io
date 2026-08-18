---
title: "Designing a Production RAG Ingestion Pipeline: Hybrid Search and the Chunking Trade-off"
slug: "rag-ingestion-pipeline-hybrid-search"
date: "2026-08-17"
tags: ["rag", "hybrid-search", "chunking", "vector-search", "kafka"]
excerpt: "Chunk it, vectorize it, throw it in a vector DB — until real-world data (PDFs, code, DB dumps) breaks that formula. Notes on hybrid search, the chunking trade-off, and a Kafka-decoupled ingestion architecture for production RAG."
cover: "/images/blog/rag-ingestion-pipeline-hybrid-search/cover.jpg"
featured: true
---

I've been spending a lot of time lately diving back into RAG architectures and mapping out what a production-ready ingestion pipeline actually looks like.

When most of us start out, the formula is simple: chunk some text, vectorize it, and throw it into a vector DB. But once you start dealing with messy, real-world data like PDFs, code blocks, and database dumps, standard vector search starts to hit a wall.

That's why **hybrid search** — combining dense vector search with old-school sparse keyword/BM25 indexing — feels like the real sweet spot. It gives you the best of both worlds: catching the abstract concept of a query while still respecting exact product IDs, serial numbers, or niche technical jargon.

## The chunking trade-off

The biggest puzzle I'm wrapping my head around right now is the chunking trade-off. Are fancy semantic and agentic (LLM-driven) chunking strategies actually worth it?

Traditional chunking is dirt cheap and fast, but it constantly cuts sentences in half and loses context. Agentic/semantic chunking creates beautiful, context-aware chunks, but it introduces massive latency and stacks up API bills before data even hits the database.

## A Kafka-decoupled pipeline

To solve this, I mapped out my proposed pipeline architecture for a near-production environment in the blueprint below.

To make it truly resilient at scale, you can't run it synchronously. I used Apache Kafka to decouple the event triggers from the processing workload, feeding into a dedicated parsing and metadata enrichment layer. This ensures chunk IDs and parent references stay perfectly synced across both storage engines — the vector DB and the sparse/keyword index.

## Open question

If you're currently building or tweaking a RAG pipeline: how are you balancing retrieval accuracy against the cost of advanced chunking? Would love to hear how you're tackling it.
