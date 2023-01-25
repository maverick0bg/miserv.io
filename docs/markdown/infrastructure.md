---
layout: doc
---

# Infrastructure

Инфраструктурата се създава чрез комбинация от Terraform, helm и GitHub
Actions. Всеки компонент елемент и име се създава чрез код. В този смисъл
може да се нарече "Инфраструктура във вид на код".

## Компоненти и подход за създаването им

1. Мрежа - създава се чрез terraform module terraform-aws-modules/vpc/aws
   1. три събнета - public, private, database
   2. nat gateway
   3. dns
2. Kubernetes cluster - създава се чрез terraform module
   terraform-aws-modules/eks/aws със съответните addon модули
   1. coredns
   2. kube-proxy
   3. vpc-cni
   4. aws-ebs-csi-driver
3. namespaces - създават се чрез кубернетис модул за terraform
   1. miserv-io - за услугите които ще бъдата разработени по проекта
   2. tobs - за observability stack-a базиранх на Grafana, Loki и Prometheus
4. OIDC provider - създава се като terraform resource
5. Роли и policies - създават се чрез terraform resource
6. Сървър за база данни - създава се чрез terraform module
   terraform-aws-modules/rds/aws
7. Axon Server - създава се чрез публикуване на yaml файл
