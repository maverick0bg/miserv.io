---
layout: doc
---

# MiServ

## What is MiServ?

MiServ is an experimenting project to create application with microservirces approach. Main goals of
experimenting are:
- to have clear software delivery lifecycle SDLC with CI/CD
- to have closely coupled services with possibility to change them without breaking other services
- to have infrastructure as a code
- to have documentation as a code
- to have as early as possible feedback about the quality of the code and infrastructure

## The SDLC process used

'''mermaid
stateDiagram
    Plan --> Code
    Code --> Build
    Build --> Test
    Test --> Release
    Release --> Deploy
    Deploy --> Operate
    Operate --> Monitor
    Monitor --> Plan
'''

