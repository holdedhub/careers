We build Holded using the following technologies and technical decisions.

Our technological stacks are always evolving in a way that allow us to innovate and create sustainable, maintainable and
scalable software.

- [Front-end](#front-end)
- [Mobile](#mobile)
- [Server applications](#server-applications)
- [Infrastructure and operations](#infrastructure-and-operations)
- [Analytics](#analytics)
- [QA](#qa)

# Front-end

- **Programming language**: TypeScript
- **Rendering library**: React
- **State management**: Redux
- **Utility-first CSS framework**: Tailwind
- **Testing library**: Jest
- **Module bundler**: Webpack, Vite
- **Styling**: SCSS, PostCSS, SCSS Modules, Emotion
- **Other libraries**:
    - React Query: Fetching, caching and updating data
    - React Hook Form: Performant, flexible and extensible forms with easy-to-use validation

### Architectural foundations

- Maintainability and scalability is a must
- Modular application design
- Separation of concerns (domain, application, infrastructure and UI layers)
- Dependencies only go in one direction UI -> application -> domain
- We only use headless 3rd party components
- We think twice before adding a 3rd party library, but always balancing the tradeoffs of building vs buying

### Things we value the most

- Maintainable, testable, and readable code.
- Striving for an optimal solution, but keeping in mind maintainability over premature optimization
- Testable code over using a concrete framework.

### What is next in the roadmap?

- Bi-directional data streaming for real time features with gRPC web
- Next.js
- Public websites with headless CMS (TBD)

# Mobile

- **Programming language**: TypeScript
- **Application framework**: React Native
- **Other libraries**:
    - React Query: Fetching, caching and updating data
    - React Hook Form: Performant, flexible and extensible forms with easy-to-use validation

### Architectural foundations

- Maintainability and scalability is a must
- Modular application design

### Things we value the most

- Maintainable, testable, and readable code.
- Striving for an optimal solution, but keeping in mind maintainability over premature optimization
- Testable code over using a concrete framework.

### What is next in the roadmap?


# Server applications

**Programming languages**: PHP 7.4 for the main operational application and Golang for supporting services and tools.

**Operational databases**: MongoDB, Redis

**Testing framework**: PHPUnit

**Components and libraries**: Symfony components and other secure and well maintained open source components.

### Architectural foundations

- Maintainability and scalability is a must
- Modular application design
- Separation of concerns (domain, application, infrastructure and UI layers)
- Command–query separation
- Strategic and tactical Domain-Driven Design (DDD)
- Testable code by design

### Things we value the most

- Maintainable, testable, and readable code.
- Striving for an optimal solution, but keeping in mind maintainability over premature optimization
- Testable and well architectured code over using a concrete framework

### What is next in the roadmap?

- Bi-directional data streaming for real time features with gRPC
- PHP 8

# Infrastructure and operations

- Google Cloud Platform
- Kubernetes
- Infrastructure as Code (IaC) with Terraform
- Internal tooling with Golang

### Foundations

- Maintainability and scalability is a must
- [Security](https://www.visma.com/trust-centre/security/) is an integral part of our operations.
- Technology with security at its core
- Modular application deployment design
- Private connectivity between components through VPC and peerings
- Golang tooling microservice based
- Any change in Infrastructure stack should be applied through IaC
- Secret management through Vault
- Monitoring data provisioning

### Things we value the most

- Security and protection of our customers' data
- Maintainable and readable code
- Striving for an optimal solution, but keeping in mind maintainability over premature optimization
- Application security
- Infrastructure security
- Being cost-efficient

### What is next in the roadmap?

- Multiple node-pools with delegated responsibility
- Bring E2E tests automations to the next level
- Provisioning custom metrics for HPA

# Analytics

**Programming languages**: SQL, Python and JavaScript

**Tools**:

- dbt
- Fivetran
- Google Tag Manager Server Side
- Google Data Studio

**Google Cloud Platform**:

- BigQuery
- BigQueryML
- Pub/Sub
- Dataflow
- Cloud Functions
- Kubernetes Engine

### Foundations

- We conduct ourselves as a product team that generates data solutions
- Our purpose is to implement a data-driven culture and replace gut-feeling decisions
- Our goal is to empower and potentiate all the teams within the organization through data solutions
- We strive to democratize the use of data.
- We are involved in the whole life cycle of a feature, from defining KPIs and goals with business to event data
  validation with QA

### Things we value the most

- Scalability, availability, and fault tolerance
- We care about the quality and consistency of the collected data

### What is next in the roadmap?

- ML-powered Qualification event and Lead Rating system
- Event anomaly detection
- Growth Loops analytics
- Experimentation framework for in-product A/B testing
- Churn Prediction
- In-product recommender
- Auto migration tools
- Product-embedded analytics

# QA

We use the [Cypress](https://www.cypress.io/) end-to-end testing framework.

### Foundations

- We help development teams to embrace quality culture.
- We participate in the whole development cycle rather than just validating in the last step.
- We care about the end user and think on them to deliver the best quality product.
- We are always looking forward to improving our methodologies and technologies.

### Motivations

- We follow a quality assistance model rather than a quality assurance one.
- We see quality is a shared responsibility of the whole team, and we as quality experts help on following best
  practices and making good decisions.

### What is next in the roadmap?

- Complete automated test suite for web applications
- Automated test suite for mobile applications
- Data-driven quality assurance
- Improve observability, monitoring and alerting 

<p align="center">
  <img src="https://europe-west1-holded-analytics-dev-208b.cloudfunctions.net/image_tracker/stacks.png?id=stacks.md" title="logo">
</p>

