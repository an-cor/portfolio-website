import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import aiComputerSecurityProject from "@/resources/aiComputerSecurityProject.png";
import minerfitproject from "@/resources/minerfit.png";
import whip from "@/resources/whip.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Research Assistant - The University of Texas at El Paso",
        location: "El Paso, TX",
        description:
            "I gained over two years of research experience as an undergraduate research assistant, where I explored artificial intelligence and machine learning models, contributing to graduate-led projects and delving into deep learning algorithms.",
        icon: React.createElement(FaReact),
        date: "2021 - 2023",
    },
    {
        title: "Promgramming Intern - Air Force Research Lab",
        location: "Rome, NY",
        description:
            "My first internship in tech. I developed an inventory system for a warfare simulations game in Unity using C#.",
        icon: React.createElement(CgWorkAlt),
        date: "2022",
    },
    {
        title: "Software Engineer Intern - Northrop Grumman Corp.",
        location: "Colorado Springs, CO",
        description:
            "I added features and debugged issues on a radar that overlooks the northern hemisphere relative to the USA. My features included front-end and back-end functionalities written in Java.",
        icon: React.createElement(CgWorkAlt),
        date: "2023",
    },
    {
        title: "Graduated Bachelors in Computer Science w/ Minor in Mathematics",
        location: "El Paso, TX",
        description:
            "I graduated with honors and multiple stoles from various organizations.",
        icon: React.createElement(LuGraduationCap),
        date: "2023",
    },
    {
        title: "Software Engineer Intern - Northrop Grumman Corp.",
        location: "Colorado Springs, CO",
        description:
            "As a return intern in a different team, I built a Kubernetes-based full-stack application to manage and visualize logging information.",
        icon: React.createElement(CgWorkAlt),
        date: "2024",
    },
    {
        title: "Teaching Assistant - The University of Texas at El Paso",
        location: "El Paso, TX",
        description:
            "I supported students in several courses including Advanced Object-Oriented Programming, Data Structures and Algorithms through lectures, grading, and personalized office hours.",
        icon: React.createElement(FaReact),
        date: "2023 - 2024",
    },
    {
        title: "Graduated Masters in Software Engineering",
        location: "El Paso, TX",
        description:
            "Finished multiple courses learning Machine Learning & Artificial Intelligence, Computer Security, Web Development and Project Management",
        icon: React.createElement(LuGraduationCap),
        date: "2024",
    },
] as const;

export const projectsData = [
    {
        title: "Computer Security Semantic Chatbox",
        description:
            "I worked as a full-stack developer on this practicum project with 5 other devs. Users can ask computer security related questions and AI will give a response on issues and solutions.",
        tags: ["Python", "Gradio", "Flask", "WeaviateDB", "OpenAI", "Bert AI"],
        imageUrl: aiComputerSecurityProject,
    },
    {
        title: "MinerFIT",
        description:
            "Fitness web app for UTEP students. I was a full-stack developer in small team. It has features like authorization/login, custom workout creation, exercise tracking services, nutrition tracking and user-led community forums.",
        tags: ["Svelte", "Firebase", "HTML", "CSS", "Javascript"],
        imageUrl: minerfitproject,
    },
    {
        title: "WHIP - Women's Health Insights Platform",
        description:
            "A public web app for quick analytics on women's health. Connect's a wearable such as an Apple watch or Oura ring to an analytical AI to track women's health activity and custom dashboard insights.",
        tags: ["Bubble.io", "OpenAI", "Apple API", "Oura API", "MySQL"],
        imageUrl: whip,
    },
] as const;

export const skillsData = [
    "Python",
    "Java",
    "C++",
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind",
    "MySQL",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Git",
    "Jira",
    "Postman",
    "Docker",
    "Kubernetes",
    "Apache Kafka",
    "Unity",
    "Firebase",
    "ElasticSearch",
    "Machine Learning",
    "Artificial Intelligence",
    "Agile",
    "Scrum",
    "Software Engineering",
    "Project Management",
    "Sales",
    "Data Analytics",
    "Communication",
    "Customer Relationship Management",
] as const;