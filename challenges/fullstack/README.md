# Full Stack Engineer challenge
## Vending Machine

The goal of this challenge is to model a vending machine **and** to expose it to end users through a friendly, polished web interface. We want to evaluate both your backend craftsmanship and your ability to translate a domain into a delightful user experience.

The machine works like all vending machines: it takes money and then gives you items. The vending machine accepts coins/notes in the form of 0.05, 0.10, 0.25 and 1.

There must be at least 3 primary items that cost 0.65, 1.00 and 1.50. The user may hit a "return coin" action to get back the money they have entered so far. If they put more money in than the item price, they get the item and the change back.

## Context

This challenge simulates a real-world scenario where you need to build a maintainable, extensible system that will evolve over time. While the current requirements are intentionally simple, we expect your solution to demonstrate how you would approach building production-ready software, both on the server and on the client.

Think of this as a foundation that other engineers will build upon, extend, and maintain for years, and as a product surface that real users will interact with every day.

## Specification

### Valid set of actions on the vending machine

* 0.05, 0.10, 0.25, 1 - insert money
* Return Coin - returns all inserted money
* GET Water, GET Juice, GET Soda - select item (Water = 0.65, Juice = 1.00, Soda = 1.50)
* SERVICE - a service person opens the machine and sets the available change and how many items we have.

### Valid set of responses from the vending machine

* 0.05, 0.10, 0.25 - returned coins
* Water, Juice, Soda - vended item

### State the vending machine must track

* Available items - each item has a count, a price and a selector
* Available change - number of coins available
* Currently inserted money

## Examples
```
Example 1: Buy Soda with exact change
1, 0.25, 0.25, GET-SODA
-> SODA

Example 2: Start adding money, but user asks for return coin
0.10, 0.10, RETURN-COIN
-> 0.10, 0.10

Example 3: Buy Water without exact change
1, GET-WATER
-> WATER, 0.25, 0.10
```

# What We're Looking For

This is a **full stack** technical assessment. We are not just evaluating if the code works: we are evaluating how it is built **and** how it feels to use. The role requires equal ownership of the backend and the frontend, and the submission should reflect that.

## Core Expectations

### Backend: Code Quality & Architecture
* Your solution should reflect production-ready code that scales beyond the initial requirements
* Consider how your design handles change: what if we need to add new products? New payment methods? New business rules?
* Structure your code as if multiple engineers will need to understand, extend, and maintain it
* Show us how you organize business logic in a way that remains clear and testable
* Expose the vending machine's behaviour through a well-designed API that the frontend consumes; do not couple business logic to the transport layer

### Frontend: UX & Craft
A core part of this challenge is the user interface. We want to evaluate your frontend skills, so please put real care into it.

We expect you to:
* Build a clean, intuitive UI that allows a user to interact with the machine (insert coins, pick a product, request change back, see what was vended and what change came out)
* Provide clear, real-time feedback for every action: current balance, available products and stock, returned coins, error states (e.g. not enough money, out of stock, no change available)
* Include a separate "service" view or mode that allows refilling items and coins, distinct from the customer-facing flow
* Pay attention to layout, hierarchy, spacing, states (hover, disabled, loading, error) and accessibility basics (keyboard navigation, semantic markup, sensible contrast)
* Make the application responsive and usable on both desktop and mobile viewports

The UI does not need to be pixel-perfect or visually elaborate, but it should clearly show that you can design and implement a usable, well-structured frontend, not only wire components together.

### Technical Requirements
* **Backend**: PHP, as described in the [Server applications](../../stacks.md#server-applications) section of `stacks.md`
* **Frontend**: the stack defined in the [Front-end](../../stacks.md#front-end) section of `stacks.md`. Any auxiliary library you bring in on top of that stack should be briefly justified in the README
* The frontend and the backend must communicate over HTTP (a REST or RPC-style API is fine). The backend is the source of truth for the machine state
* A `Dockerfile` or `docker-compose` setup that boots both backend and frontend with a single command is **highly appreciated** for easy evaluation
* Comprehensive test coverage is **expected** on both sides. Your tests should demonstrate your understanding of what and how to test at different levels (unit, integration, and at least some UI/component coverage on the frontend)
* Use whatever tools and libraries make sense for building a well-architected solution. We care about your design decisions, not reinventing the wheel

## What Gets Evaluated

We will assess your submission based on:
1. **Architectural decisions**: how you structure and organize your code on both layers and how they communicate
2. **Code maintainability**: readability, clarity, and how easy it is for others to work with your code
3. **Extensibility**: how well your design accommodates future changes (new items, new payment methods, new UI flows)
4. **Testing approach**: coverage, test design, and testing strategy on backend and frontend
5. **Business logic modeling**: how you represent and handle the business rules
6. **Frontend craft**: usability, clarity of feedback, state management, error handling and accessibility
7. **Engineering principles**: evidence of solid engineering practices applied appropriately

## Important Notes

* **This is not about "just making it work"** - a single-file script with a basic HTML page won't demonstrate the level of engineering we are looking for
* **Avoid under-engineering** - while over-engineering is a valid concern, this challenge specifically asks you to show depth of knowledge on both layers. The functional scope is intentionally small so you can focus on demonstrating engineering and product-thinking principles
* **Think enterprise-scale** - imagine this code will be part of a larger system with multiple developers and evolving requirements
* **Backend and frontend deserve equal care** - a great backend with a throwaway UI, or a beautiful UI on top of an unstructured backend, will be considered an incomplete submission

## AI-Assisted Development

**AI tools are welcome.** We embrace AI as part of our daily development workflow, and we expect engineers to leverage these tools effectively.

However, keep in mind:
* You will need to **defend your solution in a technical interview**
* We will ask you to explain your architectural decisions, trade-offs, and implementation details on both backend and frontend
* We'll explore alternative approaches and how you'd handle different scenarios
* The code you submit should reflect **your understanding**, not just AI-generated output

**Think of AI as your pair programming partner**, not a replacement for your engineering judgement. We want to see that you can:
- Make informed architectural decisions
- Understand the code you're submitting deeply
- Articulate why you chose one approach over another
- Discuss implications and trade-offs of your design

Your submission should represent code you **deeply understand** and can **confidently explain, modify, and extend**.

If you use AI tools, use them as a senior engineer would: to accelerate implementation, explore options, and validate ideas, but always with your expertise guiding the decisions.

# Additional Notes
* The provided solution needs to be uploaded into a public repository (GitHub, GitLab, Bitbucket) with a README.md providing the following information:
    * Instructions on how to run the backend, the frontend, and the tests
    * Reasoning behind any auxiliary libraries you bring in beyond the stack defined in `stacks.md`
    * A short section describing the trade-offs you made and what you would improve with more time
* Please make sure the name of our company is not referenced anywhere in your code or repository
* Commit from the very beginning and commit often. We value the possibility to review your git log
* **Prepare to defend your work**: during the technical interview, we may do a deep-dive into your solution. You should be able to explain every architectural decision, discuss alternatives you considered, and walk through how you'd extend the system for new requirements

<p align="center">
  <img src="https://europe-west1-holded-analytics-dev-208b.cloudfunctions.net/image_tracker/challenges-fullstack.png?id=challenges-fullstack.md" title="logo">
</p>
