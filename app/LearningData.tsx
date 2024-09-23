import { FaJsSquare, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaCode } from 'react-icons/fa';

const learningData = [
    {
        index: 1,
        name: "JavaScript",
        topics: ["JavaScript Internals", "Hoisting", "Scope", "Prototypal Inheritance"],
        totalTopics: 20,
        totalResources: 104,
        icon: <FaJsSquare size={32} color="#F7DF1E" />
    },
    {
        index: 2,
        name: "React",
        topics: ["JSX", "Hooks", "State Management", "Component Lifecycle"],
        totalTopics: 20,
        totalResources: 95,
        icon: <FaReact size={32} color="#61DAFB" />
    },
    {
        index: 3,
        name: "Angular",
        topics: ["Modules", "Components", "Services", "Dependency Injection"],
        totalTopics: 20,
        totalResources: 88,
        icon: <FaAngular size={32} color="#DD0031" />
    },
    {
        index: 4,
        name: "HTML",
        topics: ["HTML5 Elements", "Forms", "Semantic HTML", "Canvas"],
        totalTopics: 20,
        totalResources: 45,
        icon: <FaHtml5 size={32} color="#E34F26" />
    },
    {
        index: 5,
        name: "CSS",
        topics: ["Selectors", "Box Model", "Flexbox", "Grid Layout"],
        totalTopics: 20,
        totalResources: 67,
        icon: <FaCss3Alt size={32} color="#1572B6" />
    },
    {
        index: 6,
        name: "Bootstrap",
        topics: ["Grid System", "Components", "Utilities", "Themes"],
        totalTopics: 20,
        totalResources: 34,
        icon: <FaBootstrap size={32} color="#563D7C" />
    },
    {
        index: 7,
        name: "Next.js",
        topics: ["Pages", "Routing", "API Routes", "Static Site Generation"],
        totalTopics: 20,
        totalResources: 78,
        icon: <FaNodeJs size={32} color="#000000" />  // Placeholder for Next.js
    },
    {
        index: 8,
        name: "Tailwind CSS",
        topics: ["Utility-First CSS", "Responsive Design", "Customizing", "Animations"],
        totalTopics: 20,
        totalResources: 56,
        icon: <FaCode size={32} color="#38B2AC" />  // Placeholder for Tailwind CSS
    },
    {
        index: 9,
        name: "TypeScript",
        topics: ["Type System", "Interfaces", "Generics", "Decorators"],
        totalTopics: 20,
        totalResources: 45,
        icon: <FaCode size={32} color="#007ACC" />
    }
];

export default learningData;
