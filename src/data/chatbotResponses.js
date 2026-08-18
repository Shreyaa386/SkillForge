const chatbotResponses = [
  {
    keywords: ["what should i learn next", "learn next", "next step", "what next"],
    response:
      "If you've completed JavaScript, your next step is React. Start with components and JSX, then learn props, state, hooks, and finally build a real project."
  },

  {
    keywords: ["roadmap", "learning path", "show me the path"],
    response:
      "Your SkillForge path is: HTML & CSS → JavaScript → React → Node.js → MongoDB → Full Stack Projects."
  },

  {
    keywords: ["html", "start html", "learn html"],
    response:
      "Start with HTML fundamentals: semantic elements, headings, forms, links, images, tables, and accessibility. Then practice by building a simple multi-section webpage."
  },

  {
    keywords: ["css", "learn css", "styling"],
    response:
      "After HTML, focus on CSS fundamentals, Flexbox, Grid, responsive design, positioning, transitions, and then build responsive layouts."
  },

  {
    keywords: ["javascript", "js", "learn javascript"],
    response:
      "For JavaScript, focus on variables, functions, arrays, objects, DOM manipulation, ES6+, promises, async/await, and APIs before moving deeply into React."
  },

  {
    keywords: ["react", "react developer", "learn react"],
    response:
      "For React, learn JSX, components, props, state, events, conditional rendering, lists, useState, useEffect, and then build projects to strengthen your skills."
  },

  {
    keywords: ["node", "nodejs", "node.js", "backend"],
    response:
      "Once you're comfortable with React, Node.js is a great next step. Learn Express, REST APIs, routing, middleware, authentication, and how to connect your application to a database."
  },

  {
    keywords: ["mongodb", "mongo", "database"],
    response:
      "For MongoDB, start with databases, collections, documents, CRUD operations, queries, indexes, and then learn how to connect MongoDB with Node.js."
  },

  {
    keywords: ["project", "projects", "build a project", "what should i build"],
    response:
      "Projects turn learning into proof of skill. Start with a small project, then gradually build applications using APIs, forms, state management, authentication, and real-world UI patterns."
  },

  {
    keywords: ["dsa", "data structures", "algorithms"],
    response:
      "For DSA, start with arrays and strings, then move to linked lists, stacks, queues, hashing, recursion, trees, graphs, and dynamic programming. Practice problems consistently alongside learning."
  },

  {
    keywords: ["interview", "placement", "placements", "job"],
    response:
      "For placement preparation, combine DSA with CS fundamentals, SQL, projects, JavaScript/React concepts, and practice explaining your projects clearly."
  },

  {
    keywords: ["help", "hello", "hi", "hey"],
    response:
      "Hi! I'm Forge. I can help you with your SkillForge roadmap, technologies, projects, DSA, or placement preparation. What would you like to learn?"
  },

  {
    keywords: [],
    response:
      "I'm Forge, your SkillForge learning assistant. Ask me about HTML, CSS, JavaScript, React, Node.js, MongoDB, your roadmap, projects, DSA, or what you should learn next."
  }
]

export default chatbotResponses