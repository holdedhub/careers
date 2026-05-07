# Senior Backend Engineer challenge
## Vending Machine

The goal of this program is to model a vending machine and the state it must maintain during its operation. How exactly the actions on the machine are driven is left intentionally vague and is up to the candidate

The machine works like all vending machines: it takes money then gives you items. The vending machine accepts money in the form of 0.05, 0.10, 0.25 and 1

You must have at least have 3 primary items that cost 0.65, 1.00, and 1.50. Also user may hit the button "return coin" to get back the money they've entered so far, If you put more money in than the item price, you get the item and change back.

## Context

This challenge simulates a real-world scenario where you need to build a maintainable, extensible system that will evolve over time. While the current requirements are intentionally simple, we expect your solution to demonstrate how you would approach building production-ready software in a growing codebase.

Think of this as a foundation that other engineers will build upon, extend, and maintain for years.

## Specification

### Valid set of actions on the vending machine are:

* 0.05, 0.10, 0.25, 1 - insert money
* Return Coin - returns all inserted money
* GET Water, GET Juice, GET Soda - select item (Water = 0.65, Juice = 1.00, Soda = 1.50)
* SERVICE - a service person opens the machine and set the available change and how many items we have.

### Valid set of responses on the vending machine are:

* 0.05, 0.10, 0.25 - return coin
* Water,  Juice, Soda - vend item

### Vending machine must track the following state:

* Available items - each item has a count, a price and selector
* Available change - Number os coins available
* Currently inserted money

## Examples
```
Example 1: Buy Soda with exact change
1, 0.25, 0.25, GET-SODA
-> SODA

Example 2: Start adding money, but user ask for return coin
0.10, 0.10, RETURN-COIN
-> 0.10, 0.10

Example 3: Buy Water without exact change
1, GET-WATER
-> WATER, 0.25, 0.10
```

# What We're Looking For

This is a **senior-level** technical assessment. We're not just evaluating if the code works. We're evaluating how it's built.

## Core Expectations

### Code Quality & Architecture
* Your solution should reflect production-ready code that scales beyond the initial requirements
* Consider how your design handles change: What if we need to add new products? New functionalities? New business rules?
* Structure your code as if multiple engineers will need to understand, extend, and maintain it
* Show us how you organize complex business logic in a way that remains clear and testable

### Technical Requirements
* Programming language: **PHP**
* Solution with `Dockerfile` or `docker-compose` is highly appreciated for easy evaluation
* Comprehensive test coverage is **expected**. Your tests should demonstrate your understanding of what and how to test at different levels
* Use whatever tools and libraries make sense for building a well-architected solution. We care about your design decisions, not reinventing the wheel

## What Gets Evaluated

We will assess your submission based on:
1. **Architectural decisions**: how you structure and organize your code
2. **Code maintainability**: readability, clarity, and how easy it is for others to work with your code
3. **Extensibility**: how well your design accommodates future changes
4. **Testing approach**: coverage, test design, and testing strategy
5. **Business logic modeling**: how you represent and handle the business rules
6. **Engineering principles**: evidence of solid engineering practices applied appropriately

## Important Notes

* **This is not about "just making it work"** - a single-file script that processes commands won't demonstrate senior-level engineering
* **Avoid under-engineering** - while over-engineering is a valid concern, this challenge specifically asks you to show depth of knowledge. This challenge is intentionally simple in functionality so you can focus on demonstrating software engineering principles. We want to see **how** you build software, not just **that** it works
* **Think enterprise-scale** - imagine this code will be part of a larger system with multiple developers and evolving requirements

Remember: We're hiring for a **senior position** in a **large engineering organization**. Your solution should reflect the level of sophistication and thoughtfulness we'd expect to see in a PR from a senior engineer.

## AI-Assisted Development

**AI tools are welcome.** At Holded, we embrace AI as part of our daily development workflow, and we expect senior engineers to leverage these tools effectively.

However, keep in mind:
* You will need to **defend your solution in a technical interview**
* We will ask you to explain your architectural decisions, trade-offs, and implementation details
* We'll explore alternative approaches and how you'd handle different scenarios
* The code you submit should reflect **your understanding**, not just AI-generated output

**Think of AI as your pair programming partner**, not a replacement for your engineering judgment. We want to see that you can:
- Make informed architectural decisions
- Understand the code you're submitting deeply
- Articulate why you chose one approach over another
- Discuss implications and trade-offs of your design

Your submission should represent code you **deeply understand** and can **confidently explain, modify, and extend in case AI agents disappeared tomorrow**.

If you use AI tools, use them as a senior engineer would: to accelerate implementation, explore options, and validate ideas—but always with your expertise guiding the decisions.

# Additional Notes
* The provided solutions needs to be uploaded into a public repository (Github, Gitlab, bitbucket) with a README.MD providing the following information.
    * Instructions on how to run your solution
    * Requirements
* Please make sure the name **Holded** are not referenced in any place in your code.
* Commit from the very beginning and commit often. We value the possibility to review your git log.
* **Prepare to defend your work**: During the technical interview, we'll may do a deep-dive into your solution. You should be able to explain every architectural decision, discuss alternatives you considered, and walk through how you'd extend the system for new requirements.

<p align="center">
  <img src="https://europe-west1-holded-analytics-dev-208b.cloudfunctions.net/image_tracker/challenges-backend.png?id=challenges-backend.md" title="logo">
</p>

