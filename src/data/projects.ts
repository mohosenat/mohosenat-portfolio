import { Dumbbell, ShoppingBasket, Code2 } from "lucide-react";

export const projects = [
  {
    slug: "fitlog",
    number: "01",
    name: "FitLog",
    label: "Fitness tracking application",
    image: "/projects/fitlog.png",
    description:
      "A fitness-focused web application with a clean, responsive interface for working with fitness data.",
    overview:
      "FitLog is a fitness-focused web application built with Next.js, TypeScript, and Tailwind CSS. It connects a responsive interface with a REST API and provides hands-on experience building an application beyond a static landing page.",
    role: "Frontend development and API integration",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    live: "https://fit-log-lake.vercel.app/",
    repo: "https://github.com/mohosenat/fit-log",
    icon: Dumbbell,
    features: [
      "Responsive layout for desktop and mobile",
      "API-connected application structure",
      "Reusable React components and TypeScript types",
      "Consistent dark visual system with a lime accent",
    ],
    challenges: [
      "Organizing the interface into reusable components",
      "Connecting frontend views to API data",
      "Keeping the experience usable across screen sizes",
    ],
    learnings: [
      "Building a Next.js application with TypeScript",
      "Structuring reusable components and shared UI",
      "Working with API-driven interfaces and responsive styling",
    ],
    next: [
  "Add workout history so users can review their previous activities",
  "Introduce personal fitness goals with measurable progress tracking",
  "Build a progress dashboard with charts to visualize fitness activity over time",
],
  },
  {
    slug: "bazar-dor",
    number: "02",
    name: "Bazar Dor",
    label: "Grocery price application",
    image: "/projects/bazardor.png",
    description:
      "A grocery-focused application organized around products, categories, and price information.",
    overview:
      "Bazar Dor is a grocery price application built around product and category information. Its stack includes MongoDB and Better Auth, bringing data and authentication concerns into the project alongside the user interface.",
    role: "Full-stack learning project",
    stack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS",
    ],
    live: "https://bazar-dor-hazel-ten.vercel.app/",
    repo: "https://github.com/mohosenat/bazar-dor",
    icon: ShoppingBasket,
    features: [
      "Product information organized by grocery categories",
      "Responsive interface for browsing product content",
      "MongoDB included in the application data stack",
      "Better Auth included for authentication",
    ],
    challenges: [
      "Connecting interface requirements with data and authentication needs",
      "Keeping product categories and data organized",
      "Managing environment configuration during deployment",
    ],
    learnings: [
      "How frontend and backend concerns fit together",
      "Working with MongoDB as an application database",
      "Understanding authentication and deployment configuration",
    ],
   next: [
  "Introduce product price comparison to help users identify better-value options",
  "Add a personalized shopping list for organizing grocery purchases",
  "Build a shopping budget tracker that estimates the total cost of selected items",
],
  },
  {
    slug: "dev-stack-builder",
    number: "03",
    name: "Dev Stack Builder",
    label: "Developer tools directory",
    image: "/projects/devstack.png",
    description:
      "A React project presenting development technologies through reusable UI components.",
    overview:
      "Dev Stack Builder is a learning project focused on organizing development technologies in a clear interface. It provided practice with component-based UI development and keeping content separate from presentation.",
    role: "Frontend development",
    stack: ["React", "TypeScript", "CSS", "Vite"],
    live: "https://dev-stack-five-sigma.vercel.app/",
    repo: "https://github.com/mohosenat/dev-stack",
    icon: Code2,
    features: [
      "Technology content presented in a structured layout",
      "Reusable components for repeated interface elements",
      "Data-driven content using a technologies JSON file",
      "Maintainable project structure",
    ],
    challenges: [
      "Breaking the page into components with clear responsibilities",
      "Keeping repeated content consistent",
      "Organizing data separately from the UI",
    ],
    learnings: [
      "Building component-based interfaces with React",
      "Passing data through props and rendering lists",
      "Improving project structure and documentation",
    ],
   next: [
  "Add category-based search and filtering to help developers discover relevant tools",
  "Introduce a favorites feature so users can save useful developer resources",
  "Create dedicated tool detail pages with descriptions, use cases, and official links",
],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}




