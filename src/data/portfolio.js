const calculateYearsOfExperience = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    const years = now.getFullYear() - start.getFullYear();
    const monthDiff = now.getMonth() - start.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
        return years - 1;
    }
    return years;
};

const totalExperience = calculateYearsOfExperience("2014-07-01");

export const portfolioData = {
    profile: {
        name: "Shanthi Palani",
        role: "Technical Lead",
        location: "Pallikaranai, Chennai, Tamil Nadu, India",
        phone: "+91-8056593267",
        email: "shanthipalaniofficial@gmail.com",
        about: [
            `As a Technical Lead and Full Stack Developer with ${totalExperience}+ years of experience, I bring extensive expertise in building robust, scalable, and high-performance web applications. Proficient in both frontend and backend technologies, I excel in delivering solutions that seamlessly blend exceptional user experiences with business goals.`,
            `Over ${totalExperience}+ years, I have successfully delivered software solutions across diverse domains, including e-commerce, finance, healthcare, and education. My technical toolkit includes programming languages like JavaScript, TypeScript, HTML, and CSS, alongside frameworks such as React and Node.js.`,
            "Known for my collaborative ethos and dedication, I continuously seek to enhance my skills and contribute to team successes. My commitment to excellence ensures the delivery of results that exceed expectations."
        ],
        highlights: [
            "Tech speaker",
            "Founder of TypedCoders Tech community",
            "Part of Chennai React Core Team",
            "Organized 16+ events and attended 10+ tech events"
        ],
        resumeLink: "/Shanthi_Palani_Technical_Lead_Resume.pdf"
    },
    experience: [
        {
            company: "Talentship (TSI Technologies Pvt Ltd)",
            role: "Technical Lead",
            period: "January 2025 - Present",
            description: [
                "Driving technical excellence and architectural decisions for high-scale enterprise solutions.",
                "Mentoring developers and leading full-stack implementations using React, TypeScript, and modern backend stacks."
            ]
        },
        {
            company: "Talentship (TSI Technologies Pvt Ltd)",
            role: "Sr. Software Engineer",
            period: "December 2022 - January 2025",
            description: [
                "Full stack developer, building and delivering high-end UI components and solutions using ReactJS, TypeScript, and Cube.js.",
                "Utilized backend technologies like Node.js and database management with PostgreSQL."
            ]
        },
        {
            company: "Atos Syntel Pvt Ltd",
            role: "Lead Developer",
            period: "March 2017 - December 2022",
            description: [
                "Led a 12-member team to deliver end-to-end product features, ensuring high-quality and timely delivery.",
                "Developed features with automated test suites for cross-browser and cross-platform testing.",
                "Performed a POC comparing WDIO and Cypress, providing a solution for cross-platform testing.",
                "Recognized with multiple spot awards for leadership and guidance."
            ]
        },
        {
            company: "BambeeQ Pvt Ltd",
            role: "Product Developer",
            period: "July 2014 - March 2017",
            description: [
                "Excelled in full-stack development roles, integrating front-end and back-end technologies.",
                "Demonstrated end-to-end project ownership, overseeing all development stages.",
                "Designed and implemented product features leveraging expertise in UI/UX design and backend architecture.",
                "Utilized agile methodologies to deliver high-quality product features within timelines."
            ]
        }
    ],
    education: [
        {
            degree: "B.Tech in Information Technology",
            institution: "Christ College of Engineering and Technology",
            period: "July 2010 - May 2014"
        }
    ],
    skills: [
        "React JS", "TypeScript", "Next JS", "Cube JS", "Node JS", "Relay GraphQL",
        "Mongo DB", "Dynamo DB", "PostgreSQL", "Cypress", "WebdriverIO (WDIO)",
        "Magento", "Elasticsearch", "AWS", "EJS", "Bootstrap", "HTML5", "CSS3",
        "Jest", "Express", "Material UI"
    ],
    projects: [
        {
            title: "SoSafe",
            period: "December 2022 – Present",
            tech: "ReactJS, TypeScript, CubeJS, Node.js, PostgreSQL, Sosafe UI library, Docker, Echarts",
            description: "SoSafe platform enables users to run enterprise-level cybersecurity awareness training programs. My contribution includes creating new analytical dashboards and migrating slow-performing dashboards to Redshift."
        },
        {
            title: "Zujo",
            period: "January 2022 – June 2022",
            tech: "ReactJS, Node.js, DynamoDB, Relay, GraphQL, Material UI",
            description: "Zujo is a one-stop solution for scheduling and conducting classes. I was responsible for the Abacus module and created a competition module tailored for National Level Competitions (NLC)."
        },
        {
            title: "Rogue - PayPal Credit Card Vault",
            period: "June 2019 – December 2021",
            tech: "ReactJS, Bootstrap, CSS3, GraphQL, MongoDB",
            description: "Portability tool automating the migration of credit card profiles to PayPal securely. Worked end-to-end on designing, developing, testing, and documenting the tool."
        },
        {
            title: "Hawk Money and Wallet",
            period: "July 2018 – November 2018",
            tech: "ReactJS, Node.js, Express, Jest",
            description: "Module including currency conversion and PayPal fees. Users can manage PayPal balances, debit cards, and credit cards."
        },
        {
            title: "HealthyJio",
            period: "January 2015 – March 2017",
            tech: "EJS, Bootstrap, HTML, CSS, Node.js, PostgreSQL, Elasticsearch, AWS (S3)",
            description: "HeathyJio is a social platform enhancing wellness through information, motivators, groups, and services. Integrated third-party APIs (Amazon, Flipkart, Snapdeal, Google Fit, Fitbit) and implemented Single Sign-On (SSO) for user logins. Leveraged AWS S3 and CDN to enhance project performance."
        },
        {
            title: "PowerStreet",
            period: "June 2014 – December 2014",
            tech: "Magento, HTML5, CSS3, MySQL, PHP",
            description: "Power Street is an online store for electronic peripherals like car batteries and LED lights. Independently developed the application using Magento with no prior experience, delivering it within a short timeframe."
        }
    ],
    personalProjects: [
        {
            title: "OwnVU Technologies",
            url: "https://ownvu.vercel.app/",
            description: "A self-motivated start-up providing total IT solutions, home automation, and security-related products. Services include cloud computing, doorstep hardware service, and long-term maintenance support."
        },
        {
            title: "Unlocking PDF in React",
            url: "https://unlock-pdf-mu.vercel.app/",
            description: "A modern web application built with React for unlocking password-protected PDF files directly in the browser. It features a clean UI and efficient processing."
        }
    ],
    awards: [
        "Bar Raiser award in Talentship Sail event 2024",
        "Multiple Spot Awards - Atos Syntel Pvt Ltd",
        "Agile Award - Atos Syntel Pvt Ltd",
        "Long Service Award - Atos Syntel Pvt Ltd"
    ],
    certifications: [
        {
            title: "Mastering TypeScript - 2023 Edition",
            platform: "Udemy",
            date: "July 2023",
            link: "https://udemy-certificate.s3.amazonaws.com/image/UC-ddc2b67c-8c45-4d52-b536-13ec156ca859.jpg"
        }
    ],
    eventImages: [
        "04.jpg", "1.jpeg", "2.JPG", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg"
    ],
    techTalks: [
        {
            title: "Microfrontend Architecture",
            event: "React Event",
            image: "talk_microfrontend.jpg",
            url: "https://www.youtube.com/watch?v=7_U_5cmigPw",
            description: "A deep dive into Microfrontend architecture, discussing its benefits, challenges, and implementation strategies in large-scale React applications."
        },
        {
            title: "Rethinking React Architecture. From Hooks to RemoteContext",
            event: "Tech Event",
            image: "talk_architecture.jpg",
            url: "https://www.youtube.com/live/X2XdgC1xBsA",
            description: "This session introduces the concepts of remote contexts and cross-bundle messaging—approaches designed to simplify data sharing across distributed React applications. Attendees will learn how remote contexts enable seamless communication between micro-frontends using a lightweight pub/sub model while preserving the familiar React developer experience. The talk includes live coding examples demonstrating a distributed dashboard where widgets from different teams share context transparently."
        }
    ]
};
