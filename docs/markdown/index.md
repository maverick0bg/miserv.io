---
layout: doc
---

# MiServ

## What is MiServ?

MiServ is an experimenting project to create application with microservirces
approach. Main goals of experimenting are:

- to have clear software delivery lifecycle SDLC with CI/CD
- to have losely coupled services with possibility to change them without
breaking other services
- to have infrastructure as a code
- to have documentation as a code
- to have as early as possible feedback about the quality of the code and
infrastructure

## Source Control and Branching strategy

## Pipelines

### Documentation

```mermaid
stateDiagram
Trigger : On Push Or PR
Deploy : Deploy on GitHub Pages
RebuildIndex : Rebuild search index

Trigger  --> Checkout
Checkout --> Lint
Lint --> Build
Build --> Upload
Upload --> Deploy
Deploy --> RebuildIndex
RebuildIndex --> [*]
```

### Business functionallity

TODO

### Infrastructure as a code

TODO
