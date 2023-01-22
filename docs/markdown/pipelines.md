---
layout: doc
---

# Пайплайни

Пайплайните са дефинирани като GitHub Actions. Те се изпълняват при конкретно
действие в source control repository-то. Пайплайните се намират в папката `.github/workflows`.
За различните видове код се прилагат различни пайплайни в зависимост от
спецификата на съответната технология.

## Ci/CD за документацията

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

## CI/CD за кода

```mermaid
stateDiagram
Trigger : On Push
Lint : Lint code
Build : Build artefacts\n(jar, docker image)
Scan : Scan code\nfor vulnerabilities
Test : Run unit\ntests
Deploy : Deploy on\nKubernetes
[*] --> Trigger
Trigger --> Checkout
Checkout --> Lint
Lint --> Build
Build --> Scan
Build --> Test
Scan --> Deploy
Test --> Deploy
Deploy --> [*]
```

## CI/CD за инфраструктурата

### На PR

```mermaid
stateDiagram
Trigger : On PR
Lint : Lint code
Plan : Plan infrastructure\nchanges
[*] --> Trigger
Trigger --> Checkout
Checkout --> Format
Format --> [*]
Checkout --> Lint
Lint --> [*]
Checkout --> Validate
Validate --> Plan
Plan --> [*]
```

### На Push

```mermaid
stateDiagram
Trigger : On PR
Apply : Apply infrastructure\nchanges
[*] --> Trigger
Trigger --> Checkout
Checkout --> Validate
Checkout --> Format
Format --> [*]
Checkout --> Lint
Lint --> [*]
Validate --> Apply
Apply --> [*]
```
