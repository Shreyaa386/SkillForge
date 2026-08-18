# SkillForge — Decisions

## 1. Ingestion Strategy

For this assignment, I used a structured, data-driven frontend approach for the SkillForge roadmap instead of building a live external content ingestion pipeline.

The roadmap content is maintained as application data and rendered through reusable React components. I chose this approach because it is reliable, predictable, and allowed me to focus on demonstrating the product experience within the available time.

A live ingestion system would make the roadmap more dynamic, but it would also introduce additional complexity around external source availability, parsing, rate limits, failures, and changing content. Since the goal of this submission was to demonstrate the product and UI experience, the data-driven approach was the better trade-off.

## 2. Trade-off

The main trade-off was prioritizing a polished frontend experience over implementing a complete backend and live data system.

With more time, I would add a backend with persistent user progress, authentication, dynamically generated roadmaps, and live learning-resource ingestion.

For this submission, I prioritized responsive design, product communication, roadmap visualization, interactions, theme switching, and the Forge Assistant.

## 3. AI Tools

I used AI tools during development for ideation, React component structure, UI implementation, debugging, and refinement.

I personally reviewed and tested the generated code, fixed build errors, verified component behavior, and adjusted the implementation to match the assignment requirements and the intended SkillForge design.

I also verified the final homepage locally, including navigation, responsive behavior, roadmap sections, theme switching, and the Forge Assistant.