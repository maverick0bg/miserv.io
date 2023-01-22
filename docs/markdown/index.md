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

## Елементи на които е обърнато внимание

- [Phases of SDLC](/sdlc)
- [Source control](/coding)
- [Branching strategies](/coding#branching-strategy)
- [Building Pipelines](/pipelines)
- Observability - Deploy [tobs - The Observability Stack for Kubernetes](https://github.com/timescale/tobs)
- Docker - developed services are dockerized
- Kubernetes - developed services are deployed on kubernetes
- Public Cloud - AWS is used as public cloud and the Database and Kubernetes
are deployed there
- [Infrastructure as a code](/infrastructure)

## Елементи които са разгледани в детайли

- Branching strategy
- Infrastructure as a code
- Documentation as a code
- Public Cloud
