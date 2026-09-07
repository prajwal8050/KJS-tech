import { Course, TechService, Testimonial } from '../types';

export const COURSES: Course[] = [
  {
    id: 'java-full-stack',
    title: 'Java Full Stack Development',
    tagline: 'Master End-to-End Enterprise Software Architecture with Spring Boot, Microservices & React',
    description: 'Comprehensive job-oriented curriculum starting from Core Java fundamentals to modern enterprise microservices, Spring Boot, React, Hibernate ORM, Docker containerization, and AWS deployment.',
    duration: '4.5 Months',
    hours: '180+ Hours Live Training',
    mode: 'Classroom & Live Interactive Online',
    level: 'Beginner to Advanced',
    rating: 4.9,
    reviewCount: 380,
    badge: 'Most Enrolled Course',
    iconName: 'Coffee',
    gradient: 'from-amber-500 to-orange-600',
    accentColor: 'orange',
    tools: ['Java 21', 'Spring Boot 3', 'Microservices', 'Hibernate', 'React', 'TypeScript', 'MySQL', 'Docker', 'Git', 'Postman', 'Maven'],
    features: [
      '100% Hands-on Coding from Day 1',
      '2 Enterprise Capstone Live Projects',
      'Spring Cloud & Eureka Microservices Architecture',
      'RESTful API Security & JWT Authentication',
      'Dedicated Weekly Mock Technical Interviews'
    ],
    keyOutcomes: [
      'Architect robust production-grade backend systems using Spring Boot',
      'Build responsive, dynamic Single Page Applications with React & Tailwind',
      'Design relational schemas, optimize complex SQL queries and JPA bindings',
      'Containerize and deploy applications using Docker on AWS EC2'
    ],
    careerRoles: [
      'Java Full Stack Developer',
      'Backend Java Engineer',
      'Software Development Engineer (SDE-1)',
      'Enterprise Application Consultant'
    ],
    nextBatch: 'Next Batch: Monday (Morning & Evening Slots Available)',
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Core Java & Object-Oriented Programming (OOP)',
        duration: '3.5 Weeks',
        topics: [
          'Java Architecture, JVM, JRE, JDK & Classloaders',
          'Data Types, Flow Control, Operators & Arrays',
          'OOP Foundations: Classes, Objects, Inheritance, Polymorphism',
          'Abstraction, Interfaces, Anonymous Classes & Lambda Expressions',
          'Java Exception Handling & Custom Exceptions',
          'Java Collections Framework (List, Set, Map, Queue & Generics)',
          'Java 8/11/17/21 Features: Streams API, Functional Interfaces, Records',
          'Multithreading, Concurrency Utilities & File I/O'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Advanced Java & Database Layer with SQL & Hibernate',
        duration: '3 Weeks',
        topics: [
          'Relational Database Concepts & Normalization',
          'Complex SQL: Joins, Subqueries, Indexes & Transactions in MySQL',
          'JDBC Architecture & Connection Pooling (HikariCP)',
          'Hibernate ORM & JPA (Java Persistence API)',
          'Entity Mappings: One-to-One, One-to-Many, Many-to-Many',
          'HQL, Criteria API, Caching Mechanisms & Performance Tuning'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Spring Framework & Spring Boot 3 Microservices',
        duration: '5 Weeks',
        topics: [
          'Spring Core: Inversion of Control (IoC) & Dependency Injection',
          'Spring Boot Auto-configuration & Starter Dependencies',
          'Building RESTful Web Services with Spring MVC & Spring Data JPA',
          'Request Validation, Custom Exception Handling & DTO Pattern',
          'Spring Security 6 with JWT Token Authentication & RBAC',
          'Microservices Architecture with Spring Cloud (Eureka Registry, API Gateway)',
          'Inter-Service Communication: Feign Client & Resilience4j Circuit Breaker',
          'Kafka / RabbitMQ Message Broker Integration'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Modern Frontend Development (React + TypeScript)',
        duration: '4 Weeks',
        topics: [
          'Modern JavaScript (ES6+): Promises, Async/Await, Destructuring',
          'React 18+ Architecture: Components, Props, JSX & Virtual DOM',
          'React Hooks: useState, useEffect, useContext, useMemo, custom hooks',
          'State Management with Context API & Redux Toolkit',
          'Axios REST Client, Interceptors & Error Boundaries',
          'Tailwind CSS UI Component Building & Responsive Layouts',
          'Client-Side Routing with React Router v6'
        ]
      },
      {
        moduleNumber: 5,
        title: 'DevOps, Cloud Deployment & Capstone Project',
        duration: '2.5 Weeks',
        topics: [
          'Git Version Control & GitHub Collaborative Branching Workflows',
          'Docker Containerization for Spring Boot & React Apps',
          'Docker Compose Multi-Container Orchestration',
          'CI/CD Pipelines with GitHub Actions',
          'Cloud Deployment on AWS (EC2, RDS, S3 basics)',
          'Capstone Project 1: Cloud-Native Microservices E-Commerce System',
          'Capstone Project 2: Banking & Wallet Transaction Gateway'
        ]
      }
    ]
  },
  {
    id: 'python-full-stack',
    title: 'Python Full Stack & Automation',
    tagline: 'Build Scalable Web Applications, Automation Bots & REST APIs with Django & FastAPI',
    description: 'Master Python from syntax fundamentals to powerful web frameworks like Django and FastAPI, automated scripting, database management, and asynchronous web backend architecture.',
    duration: '4 Months',
    hours: '160+ Hours Live Training',
    mode: 'Classroom & Live Interactive Online',
    level: 'Beginner to Advanced',
    rating: 4.88,
    reviewCount: 310,
    badge: 'High Industry Demand',
    iconName: 'Terminal',
    gradient: 'from-blue-600 to-indigo-600',
    accentColor: 'blue',
    tools: ['Python 3.12', 'Django 5', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Postman', 'Tailwind CSS', 'Git'],
    features: [
      'Pure Python Core to Advanced Metaprogramming',
      'High-Performance Asynchronous APIs with FastAPI',
      'Robust Monolithic & Microservices with Django',
      'Background Task Processing with Celery & Redis',
      'Automated Testing with PyTest'
    ],
    keyOutcomes: [
      'Develop full-featured web applications using Django MVC & Django REST Framework',
      'Build lightning-fast async RESTful microservices with FastAPI and Pydantic',
      'Implement real-time background task queues and periodic cron schedulers',
      'Write automated scripts for web scraping, data collection, and system automation'
    ],
    careerRoles: [
      'Python Full Stack Developer',
      'Backend Python Engineer',
      'FastAPI / Django Specialist',
      'Automation & Scripting Consultant'
    ],
    nextBatch: 'Next Batch: Wednesday & Saturday Batches',
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Python Programming Essentials & OOP Mastery',
        duration: '3.5 Weeks',
        topics: [
          'Python Internals, Bytecode, Virtual Environments (venv/pip)',
          'Data Types, Control Flow, Pattern Matching, Built-in Methods',
          'Data Structures: Lists, Tuples, Dictionaries, Sets & Comprehensions',
          'Functions: *args, **kwargs, Lambda, Map, Filter, Generators & Iterators',
          'Decorators, Closures & Context Managers',
          'Object-Oriented Python: Classes, Inheritance, Dunder Methods, Polymorphism',
          'Robust Error Handling, Custom Exceptions & Logging Module'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Databases, ORM & SQL for Python Developers',
        duration: '2.5 Weeks',
        topics: [
          'Relational Databases: PostgreSQL & SQLite setup',
          'SQL Query Mastery: Joins, Indexes, Transactions & Stored Procedures',
          'Connecting Python to Databases using psycopg2 / asyncpg',
          'SQLAlchemy ORM: Models, Sessions, Migrations with Alembic',
          'Redis for In-Memory Caching & Session Store'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Django Web Framework & Django REST Framework (DRF)',
        duration: '4 Weeks',
        topics: [
          'Django MVT Architecture & Project Scaffolding',
          'Django Models, Fields, Migrations & Database Queries',
          'Django Views, URL Routing, Forms & Template Engine',
          'Authentication, User Models, Password Reset & Session Management',
          'Django REST Framework: Serializers, ModelSerializers, ViewSets & Routers',
          'API Authentication (JWT, Token, Session) & Permissions Matrix',
          'File Uploads, Pagination, Filtering & Search Functionality'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Modern Asynchronous APIs with FastAPI',
        duration: '3 Weeks',
        topics: [
          'Asynchronous Programming in Python: async/await & asyncio',
          'FastAPI Architecture, Pydantic Data Validation & Type Hints',
          'Interactive OpenAPI (Swagger) Documentation',
          'Dependency Injection in FastAPI',
          'Background Tasks with Celery & Redis Broker',
          'WebSockets for Real-Time Event Communication'
        ]
      },
      {
        moduleNumber: 5,
        title: 'Automation, Docker & Production Deployment',
        duration: '3 Weeks',
        topics: [
          'Web Scraping with BeautifulSoup4 & Playwright/Selenium',
          'Automated Unit & Integration Testing using PyTest',
          'Containerizing Python Applications with Docker',
          'Nginx Reverse Proxy & Gunicorn/Uvicorn ASGI Production Configuration',
          'Capstone Project: Enterprise SaaS Workflow & Task Automation Platform'
        ]
      }
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst & Business Intelligence',
    tagline: 'Transform Raw Data into Strategic Business Value with SQL, Python, Power BI & Tableau',
    description: 'Comprehensive corporate data analytics training designed to bridge business intelligence and statistical computing. Master advanced SQL, Python data libraries, interactive dashboards, and executive reporting.',
    duration: '3.5 Months',
    hours: '150+ Hours Live Training',
    mode: 'Classroom & Live Interactive Online',
    level: 'Beginner to Advanced (No Prior Coding Required)',
    rating: 4.92,
    reviewCount: 420,
    badge: 'Fastest Career Switch',
    iconName: 'BarChart3',
    gradient: 'from-emerald-600 to-teal-600',
    accentColor: 'emerald',
    tools: ['SQL (PostgreSQL/MySQL)', 'Python (Pandas/NumPy)', 'Power BI', 'Tableau', 'Advanced Excel', 'Matplotlib', 'Seaborn', 'DAX', 'Git'],
    features: [
      'Real-world Industry Datasets (E-Commerce, FinTech, Healthcare)',
      'End-to-End Business Intelligence Projects from Scratch',
      'Advanced SQL Window Functions & Stored Procedures',
      'Interactive Power BI DAX & Executive Dashboard Design',
      'Resume Review with Real Data Analytics Portfolios'
    ],
    keyOutcomes: [
      'Extract, clean, and transform unstructured multi-source data with ease',
      'Query complex relational databases with high-speed advanced SQL',
      'Build executive-ready KPI dashboards using Power BI and DAX formulas',
      'Uncover statistical correlations, sales trends, and actionable insights'
    ],
    careerRoles: [
      'Data Analyst',
      'Business Intelligence (BI) Analyst',
      'SQL & Reporting Specialist',
      'Marketing / Financial Data Analyst'
    ],
    nextBatch: 'Next Batch: Monday & Weekend Executive Batch',
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Advanced Excel & Business Statistics',
        duration: '2.5 Weeks',
        topics: [
          'Advanced Formulas: XLOOKUP, INDEX/MATCH, SUMIFS, dynamic arrays',
          'Data Cleaning, Text-to-Columns, Remove Duplicates, Conditional Formatting',
          'Pivot Tables, Calculated Fields, Slicers & Timelines',
          'Descriptive Statistics: Mean, Median, Variance, Standard Deviation',
          'Probability Distributions, Hypothesis Testing, A/B Testing Fundamentals',
          'Financial & Sales Trend Modeling in Excel'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Mastering SQL for Analytics & Data Extraction',
        duration: '4 Weeks',
        topics: [
          'Database Architecture, Data Definition (DDL) & Manipulation (DML)',
          'Filtering & Aggregation: WHERE, GROUP BY, HAVING, ORDER BY',
          'Multi-Table Joins: INNER, LEFT, RIGHT, FULL OUTER, SELF & CROSS JOINS',
          'Subqueries & Common Table Expressions (CTEs)',
          'Advanced Analytical Window Functions: ROW_NUMBER, RANK, DENSE_RANK, NTILE, LAG/LEAD',
          'String, Date/Time Functions & Case Statements',
          'Performance Tuning: Query Execution Plans & Index Optimization'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Python for Data Analysis (Pandas & NumPy)',
        duration: '3.5 Weeks',
        topics: [
          'Python Fundamentals for Non-Programmers',
          'NumPy Arrays, Vectorized Operations & Matrix Math',
          'Pandas DataFrames: Loading CSV, Excel, SQL, JSON data',
          'Handling Missing Values, Outlier Detection & Data Type Conversions',
          'Merging, Concatenating, Reshaping & Pivoting Datasets',
          'Exploratory Data Analysis (EDA) Workflows',
          'Data Visualization with Matplotlib & Seaborn (Heatmaps, Histograms, Scatter)'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Power BI & Tableau Dashboard Engineering',
        duration: '3 Weeks',
        topics: [
          'Power BI Desktop Architecture & Data Modeling (Star/Snowflake Schemas)',
          'Power Query ETL: Unpivoting, Merging & Custom Column Transformations',
          'DAX Essentials: CALCULATE, FILTER, RELATED, Time Intelligence (YTD, MTD, YoY)',
          'Interactive Visualizations: Drill-Downs, Tooltips, Custom Themes & Bookmarks',
          'Tableau Fundamentals: Dimensions vs Measures, Calculated Fields & Parameters',
          'Publishing & Scheduled Refresh on Power BI Service / Tableau Cloud'
        ]
      },
      {
        moduleNumber: 5,
        title: 'Industry Capstone Analytics Projects & Portfolio',
        duration: '2 Weeks',
        topics: [
          'Project 1: Retail E-Commerce Customer Lifetime Value & RFM Segmentation',
          'Project 2: Banking Credit Risk & Loan Default Exploratory Analysis',
          'Project 3: Healthcare Hospital Readmission & Patient Flow Dashboard',
          'Building an Impressive GitHub Data Portfolio & Interactive Web Dashboard'
        ]
      }
    ]
  }
];

export const TECH_SERVICES: TechService[] = [
  {
    id: 'custom-software',
    title: 'Custom Enterprise Software',
    description: 'End-to-end bespoke software design and engineering tailored to your operational workflows, scalable to millions of users.',
    icon: 'Layers',
    highlights: ['Microservices Architecture', 'High Availability & Fault Tolerant', 'Clean Clean Architecture']
  },
  {
    id: 'web-cloud',
    title: 'Cloud & Full-Stack Web Apps',
    description: 'Modern, reactive web applications built on React, Spring Boot, Python, and automated AWS/GCP cloud environments.',
    icon: 'Cloud',
    highlights: ['AWS / GCP Cloud Native', 'Responsive UI/UX', 'CI/CD Automation']
  },
  {
    id: 'bi-analytics',
    title: 'Data Engineering & Business Intelligence',
    description: 'Transforming messy corporate data into automated real-time BI dashboards, predictive analytics pipelines, and data warehouses.',
    icon: 'PieChart',
    highlights: ['Automated ETL Pipelines', 'Power BI & Tableau Reporting', 'SQL Optimization']
  },
  {
    id: 'talent-staffing',
    title: 'Corporate Training & Staff Augmentation',
    description: 'Upskilling enterprise tech teams and providing pre-vetted, industry-trained software developers and data analysts on demand.',
    icon: 'Users',
    highlights: ['Role-Ready Engineers', 'Customized Tech Bootcamps', 'Flexible Contract Models']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rohit Verma',
    role: 'Full Stack Java Developer',
    company: 'Leading FinTech MNC',
    package: '9.2 LPA',
    course: 'Java Full Stack Development',
    quote: 'Before joining KJS Technologies, I only knew theoretical Java from college. The practical, project-driven training on Spring Boot Microservices and React gave me the real confidence to clear 3 technical interviews in my first month!',
    badge: 'Placed in 3.5 Months'
  },
  {
    id: 't2',
    name: 'Priyanka Sharma',
    role: 'Associate Data Analyst',
    company: 'Global Retail Analytics',
    package: '7.8 LPA',
    course: 'Data Analyst & Business Intelligence',
    quote: 'Coming from a non-CS background, I was intimidated by coding. The mentors at KJS broke down SQL and Power BI so clearly. The capstone portfolio we built got directly noticed by the hiring manager.',
    badge: 'Non-IT to Data Analyst'
  },
  {
    id: 't3',
    name: 'Karthik Raja',
    role: 'Python Backend Engineer',
    company: 'High-Growth Tech Startup',
    package: '8.5 LPA',
    course: 'Python Full Stack & Automation',
    quote: 'FastAPI, Django ORM, and Celery background tasks taught at KJS match what tech teams actually use in production. The mock interviews were rigorous and prepared me for real-world scenarios.',
    badge: 'Campus Placement'
  },
  {
    id: 't4',
    name: 'Ananya Deshmukh',
    role: 'Junior Software Engineer',
    company: 'Enterprise Cloud Solutions',
    package: '6.5 LPA',
    course: 'Java Full Stack Development',
    quote: 'The lab facility and 1-on-1 mentor guidance at KJS Technologies coaching centre are unmatched. Whenever I was stuck in a bug or microservice config, trainers sat with me until it worked.',
    badge: 'Career Transition'
  }
];

export const HIRING_PARTNERS = [
  'Infosys', 'TCS', 'Wipro', 'Capgemini', 'Cognizant', 'Accenture', 'Tech Mahindra', 'Mindtree', 'HCLTech', 'Oracle', 'Startups & Unicorns'
];

export const FAQS = [
  {
    question: 'Are the courses suitable for freshers and non-IT students?',
    answer: 'Absolutely! Our curriculums start from the ground up with zero prerequisites. We cover foundational programming logic before moving into advanced frameworks, with continuous 1-on-1 mentor guidance.'
  },
  {
    question: 'What is the schedule for working professionals?',
    answer: 'We offer flexible weekend batches (Saturday & Sunday) as well as early morning and evening weekday slots. All live sessions are accompanied by permanent recording access.'
  },
  {
    question: 'How does KJS Technologies provide 100% placement support?',
    answer: 'We run a dedicated placement cell that assists with ATS-friendly resume creation, GitHub portfolio building, regular mock interviews with corporate tech leads, and direct interview referrals to our network of 200+ partner companies.'
  },
  {
    question: 'Can I attend a free demo class before enrolling?',
    answer: 'Yes! We encourage every student to attend a free live demo session in Java Full Stack, Python, or Data Analytics to experience our hands-on pedagogy firsthand.'
  },
  {
    question: 'Do you offer offline classroom coaching as well as online?',
    answer: 'Yes, KJS Technologies has state-of-the-art computer labs for in-person classroom coaching with individual high-speed workstations, as well as live interactive online classes with screen-sharing and instant doubt resolution.'
  }
];
