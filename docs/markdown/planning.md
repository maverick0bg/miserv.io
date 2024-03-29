---
layout: doc
---

# Planning phase explained

During the planning phase we capture requirements, business use cases and
business processes. We also define the scope of the project and the project
goals. De planning phase is not executed in a single step. It is an iterative
process where we continuously refine the requirements and the scope of the
project. As a result of the planning phase we have many tasks that need to be
 executed. These tasks are captured in the backlog of the project.

All tasks are written down in the backlog of the project in [GitHub Projects](https://github.com/maverick0bg/miserv.io/edit/main/docs/markdown/planning.md).
They are with priority and are planned in 1week sprints. The backlog is the
single source of truth for the project.

There is a workflow defined in the GitHub project.

```mermaid
stateDiagram
    New --> Backlog
    Backlog --> Ready
    Ready --> InProgress
    InProgress --> InReview
    InReview --> Done
    InReview --> Backlog
    InReview --> Ready
```

The contributor can take task from tasks view in GitHub. He can assign himself
to the task and change the status of the task. Here is a link to create a new
branch for the task.
