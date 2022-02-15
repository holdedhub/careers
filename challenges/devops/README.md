# DevOps Technical challenge

We think infrastructure is best represented as code, and provisioning of resources should be automated as much as possible.

We are testing your ability to implement modern automated infrastructure, as well as general knowledge of system administration and coding. In your solution you should emphasize readability, maintainability and DevOps methodologies.

To begin, create a GitHub repository and start adding your work. Commit often, we would rather see a history of trial and error than a single monolithic push. When you're finished, send us the URL to your repository.

You can use the following folder structure or create your own:

```
./
├─ 1_infrastructure
│  └─ <your project>
└─ 2_application
   └─ <your project>
```

## 1. Infrastructure Test

Build out some basic Infrastructure in AWS or GCP to deploy our [Golang server](app/server.go) that can be used in a repeatable way.
Bonus points for the following:

* Use of Terraform.
* Use of Kubernetes.
* Clearly explaining why you're doing things a certain way.
* Providing a PNG diagram of your infrastructure.

## 2.1 Application (CI/CD)

Use a tool of your choice such as Ansible, Bash, Chef or similar to automate the docker build and deploy of the [Golang server](app/server.go) that serves some static or dynamic content.
Bonus points for the following:

* Using Containers as part of your automation.
* Creating a CI pipeline, using a tool of your choice, that deploys the web server to a cloud environment of your choice.
* Serve traffic from 443 port with self-signed certificate would be highly appreciate.

## 2.2 Application (Coding)

Add a new handler in our Golang application of your choice that does _something_ you'd normally end up having to do manually.
Some ideas:

* Backing up a file and sending the output to a cloud storage solution.
* A basic API to provide you with some useful information.
* Some healthcheck endpoint to check application status.
* Getting some information back from an external source and presenting it to the end user.

Bonus points:

* Generate and run a test of our application to prevent deploy some errors in your environment.
