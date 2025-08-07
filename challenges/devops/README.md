# Senior SRE Technical Test

We think infrastructure is best represented as code, and provisioning of resources should be automated as much as possible.

We are testing your ability to implement modern automated infrastructure, as well as general knowledge of system administration and coding. In your solution you should emphasize readability, maintainability and SRE methodologies.

To begin, create a GitHub repository and start adding your work. When you're finished, send us the URL to your repository.

You can use the following folder structure or create your own:

```
./
├─ 1_infrastructure
│  └─ <your answer>
├─ 2_application
│  └─ <your answer>
└─ 3_security
   └─ <your answer>
```

Provide a diagram and the Terraform code about the architecture in GCP to deploy our [Golang server](app/server.go) with high availability (HA) that can be used in a repeatable way.
The answer should contain the following:

* Use of Terraform.
* Use of Kubernetes (GKE).
* Implement multi-region failover architecture.
* Include a monitoring stack (Prometheus/Grafana).
* Design auto-scaling policies based on custom metrics.
* Diagram the complete architecture.
* Terraform code (should be modular and reusable).

Optional:
* Implement GitOps with ArgoCD.
* Add a disaster recovery plan with RTO/RPO definitions.

> Clearly explain why you're doing things a certain way.

## 2. Application (CI/CD)

Provide a complete diagram of the CI/CD proposal using a tool of your choice to automate the Docker build and deploy of the [Golang server](app/server.go) that serves some static or dynamic content.
The answer should contain the following:

* Using Containers as part of your automation.
* Creating a CI pipeline, using a tool of your choice, that deploys the web server to a GCP environment.
* Implement canary deployments.
* Add automated rollback strategies.
* Serve traffic from port 443 with a self-signed certificate would be highly appreciated.

## 3. Security

Provide an explanation about the security that you consider to be implemented to this stack always taking into consideration the best practices that should be introduced for a production deployment.
The answer should contain the following:

* Implement Zero Trust architecture.
* Add a Vault of your choice for secrets management.
* Implement Pod Security Policies.
* Add WAF configuration.
* Implement an audit logging system.
