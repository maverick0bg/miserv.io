---
layout: doc
---

# Development process

Като девелопмънт фаза на SDLC разглеждам елементите свързани с организацията
на version control repository-то във всички негови аспекти. Инструменти за
за разработка, тестове и документация. Процес на реализация на нови
функционалности и промени в съществуващите.
Компоненти на девелопмънт фазата са:

- Branching strategy
- pull requests and code reviews
- конфигурация на workspace
- средства за създаване на документация
- Връзката с фазата на планиране от SDLC
- Връзката с build фазата от SDLC

## Branching strategy

В repository-то се използва branching strategy, която е описана като [GitHub flow](https://guides.github.com/introduction/flow/).
Добро визуаллно предтавяне е демонстрирано в статията [What Are the Best Git
Branching Strategies](https://www.flagship.io/git-branching-strategies/).
Конкретнто приложение в miserv-io проекта може да с е опише като следния процес:

1. team member създава feature branch от master branch
2. Разработва функционалността в feature branch-а
3. Приключва работата и прави ъпдейт на feature branch-а си от master branch-а
4. Прави pull request към master branch-а, като при създаването на PR се
задействат CI/CD pipeline-ите за проверка на кода и документацията, build and
test
5. При някакви проблеми с кода или документацията, team member-а прави промени
във feature branch-а си и push-ва към PR-а.
6. Друг team member прави code review и ако е необходимо прави промени във
7. Отново промени във feature branch-а си и push-ва към PR-а. Като 6 и 7 могат
да се повторят многократно
8. Когато се установи завършеност, PR-а се merge-ва в master branch-а, като
се зипълняват CI/CD pipeline-ите за проверка на кода и документацията, build
deploy и test

## Структура на repository-то

Репозиторито е организирано като основен проект, в който е разположена
документацията с gitmodules за всяка от услугите и инфраструктурата.

- miserv-io
  - docs
  - miserv.io-axon-server
  - miserv.io-infrastructure
  - ....
  
## Tools

Като локална среда за разработка се използва IntelliJ IDEA.
Приложима е предимно при разработване на Java код. За инфраструктура и CICD се
използва Visual Studio Code.
Удобно е да използв и [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/maverick0bg/miserv.io)
, което е инструмент за разработка в облак, предварително конфигуиран с всички
инструменти: aws, kubectl, helm, terraform, docker, docker-compose, git.
Конфигурацията е във файла [.gitpod.yml](https://github.com/maverick0bg/miserv.io/blob/main/.gitpod.yml)
, а докер имиджа е дефиниран в [.gitpod.Dockerfile](https://github.com/maverick0bg/miserv.io/blob/main/.gitpod.Dockerfile)

За документация може да използва произволен markdown редактор. Всички документи
се разполагат в директоия docs/markdown. За генериране на HTML документацията се
е конфигуриран CI/CD pipeline, който на push тригер генерира и публикува
статичния сайт в GitHub Pages.
Диаграмите се създават в самия коед с помощта на [Mermaid](https://mermaid-js.github.io/mermaid/#/)
