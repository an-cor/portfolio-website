import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
//import { AiOutlineTrophy } from "react-icons/ai";
import aiComputerSecurityProject from "@/resources/aiComputerSecurityProject.png";
import minerfitproject from "@/resources/minerfit.png";
import whip from "@/resources/whip.png";
import mouse from "@/resources/micromouse.png";
import cars from "@/resources/carClassification.png";

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
        title: "Graduated Masters in Software Engineering - The University of Texas at El Paso",
        location: "El Paso, TX",
        description:
            "Finished multiple courses learning Machine Learning & Artificial Intelligence, Computer Security, Web Development and Project Management.",
        icon: React.createElement(LuGraduationCap),
        date: "December 2024",
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
        title: "Software Engineer Intern - Northrop Grumman Corp. - Secret Security Clearance",
        location: "Colorado Springs, CO",
        description:
            "As a return intern in a different team, I built a Kubernetes-based full-stack application to manage and visualize logging information.",
        icon: React.createElement(CgWorkAlt),
        date: "Summer 2024",
    },
    {
        title: "Graduated Bachelors in Computer Science w/ Minor in Mathematics - The University of Texas at El Paso",
        location: "El Paso, TX",
        description:
            "I graduated with honors and multiple stoles from various organizations.",
        icon: React.createElement(LuGraduationCap),
        date: "December 2023",
    },
    {
        title: "Software Engineer Intern - Northrop Grumman Corp. - Secret Security Clearance",
        location: "Colorado Springs, CO",
        description:
            "I added features and debugged issues on a radar that overlooks the northern hemisphere relative to the USA. My features included front-end and back-end functionalities written in Java.",
        icon: React.createElement(CgWorkAlt),
        date: "Summer 2023",
    },
    {
        title: "\"Code Sensei\" Learning Facilitator - Code Ninjas: Coding for kids",
        location: "El Paso, TX",
        description:
            "Work with a range of 7 to 20 students 5-14-year-old children on a day-to-day to build games with code and play once the games are built. I facilitated the learning of CS fundamentals in multiple coding languages (Javascript, C#) with kids to build game functionalities and interfaces.",
        icon: React.createElement(FaReact),
        date: "2021 - 2023",
    },
    {
        title: "Promgramming Intern - Air Force Research Lab",
        location: "Rome, NY",
        description:
            "My first internship in tech. I developed an inventory system for a warfare simulations game in Unity using C#.",
        icon: React.createElement(CgWorkAlt),
        date: "Summer 2022",
    },
    {
        title: "Web Developer - The University of Texas at El Paso",
        location: "El Paso, TX",
        description:
            "I was tasked with building, developing and designing a static website for faculty members in the computer science department at UTEP as part of a (NSF) research program. Hosted on the university's servers, the website had constant updates with related content, useful capabilities, and up-to-date links to outside sources.",
        icon: React.createElement(CgWorkAlt),
        date: "2022 - 2023",
    },
    {
        title: "Tech Exchange Program - Google",
        location: "El Paso, TX",
        description:
            "Completed a semester of courses including Applied Data Structures (taught in python), Product Management, and Careers in Tech taught by Google Engineers through a virtual academic program hosted by Google and my HSI (UTEP).",
        icon: React.createElement(LuGraduationCap),
        date: "Spring 2022",
    },
    {
        title: "Research Assistant - The University of Texas at El Paso",
        location: "El Paso, TX",
        description:
            "I gained over two years of research experience as an undergraduate research assistant, where I explored artificial intelligence and machine learning models, contributing to graduate-led projects and delving into deep learning algorithms.",
        icon: React.createElement(FaReact),
        date: "2021 - 2023",
    },
] as const;

export const projectsData = [
    {
        title: "Computer Security Semantic Chatbox",
        description:
            "Users can ask computer security related questions and a custom AI will give a response on issues and solutions. I worked as a full-stack developer on this practicum project with 5 other devs. Answers are based on curated embeddings built from Common Weakness Enumeration (CWE) and MITRE ATT&CK knowledge bases. Google's BERT and OpenAI's models are used for both creation and comparisons of databases embeddings as well as the user query.",
        tags: ["Python", "Gradio", "Flask", "WeaviateDB", "OpenAI", "Bert AI"],
        imageUrl: aiComputerSecurityProject,
    },
    {
        title: "MinerFIT",
        description:
            "Fitness web app for UTEP students. I was a full-stack developer in small team of 6 devs. This website built from scratch has features like authorization/login, custom workout creation, exercise tracking services, nutrition tracking and user-led community forums. We used firebase database for authentication and user data storage.",
        tags: ["Svelte", "Firebase", "HTML", "CSS", "Javascript"],
        imageUrl: minerfitproject,
    },
    {
        title: "WHIP - Women's Health Insights Platform",
        description:
            "A public web app for quick analytics on women's health. Connect's a person wearable (i.e. Apple watch or Oura ring) info to an analytical AI through an API to track women's health activity and display on custom dashboard insights. This project was part of a 3-day \"Hack-a-thon\" competition, namely Borderland AI Hackathon, where my 2-person team won 1st place with a $2k price after building and showcasing the project.",
        tags: ["Bubble.io", "OpenAI", "Apple API", "Oura API", "MySQL"],
        imageUrl: whip,
    },
    {
        title: "EZ-PARK - Convolutional Neural Networks Car Detection Project",
        description:
            "Implemented a convolutional neural network (CNN) and applied it to parked cars & parking space images to classify the data as being occupied or empty. We used a database from Kaggle for training, cleaned the data & implemented multiple layers to the convolutional neural network for classication consistenting of 2d convolution layers, max pooling, and dense layers reaching an accuracy of 92%. This was a semester-long school project with 2 other grad students worth 40% of the course grade.",
        tags: ["AI", "ML", "Neural Network", "Python", "Keras", "MatPlotLib", "Numpy", "You Only Look Once ML Algorithm"],
        imageUrl: cars,
    },
    {
        title: "MicroMouse - Autonomous Robot Competition",
        description:
            "As a freshman in Computer Science, I teamed up with 3 Electrical Engineering students to build and program a robot from scratch. The robot’s aim was to be placed in a 10ft. by 10ft maze and find the center of the maze as fast as possible with no outside help. The robot had DC motors, Arduino Nano microcontroller, a battery, Bluetooth, LED proximity sensors, and encoders sottered together then programmed for the competition. We won 1st place in the local IEEE chapter of our university.",
        tags: ["C++", "Arduino Nano", "Flood Fill Algorithm", "L293D DC Motor Drive", "MPU6050 IMU", "IR LED Proximity Sensors"],
        imageUrl: mouse,
    },
] as const;

export const languagesData = [
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
] as const;

export const skillsData = [
    "Git",
    "Jira",
    "Postman",
    "Docker",
    "Kubernetes",
    "Apache Kafka",
    "Unity",
    "Firebase",
    "ElasticSearch",
] as const;

export const toolsData = [
    "Machine Learning",
    "Artificial Intelligence",
    "Secret Security Clearance",
    "Agile",
    "Scrum",
    "Software Engineering",
    "Project Management",
    "Sales",
    "Data Analytics",
    "Communication",
    "Customer Relationship Management",
] as const;