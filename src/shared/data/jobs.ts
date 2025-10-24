export interface Job {
    id: string;
    role: string;
    company: string;
    location: string;
    salary: string;
    type: string;   // e.g., Fulltime, Part-time, Contract
    mode: string;   // e.g., Remote, Onsite, Hybrid
    level: string;  // e.g., Junior, Mid-level, Senior
    visited: string;
    description: string;
}


export const jobs: Job[] = [
    {
        id: "1",
        role: "Frontend Developer",
        company: "Techify Solutions",
        location: "Lagos, Nigeria",
        salary: "₦18,450,000 - ₦25,000,000 a month",
        type: "Fulltime",
        mode: "Remote",
        level: "Mid-level",
        visited: "Visited 1 day ago",
        description:
            `Company Description

                    CcHUB is Africa's leading innovation and creative ecosystem builder, dedicated to nurturing talent, ideas, and startups across the continent. In 2010, we began as Nigeria's premier innovation center, dedicated to accelerating the application of social capital and technology for economic prosperity in Nigeria. We have since grown our physical presence to five cities (Lagos, Abuja, Kigali, Nairobi, and Windhoek) across Africa, and we work closely with stakeholders - including entrepreneurs, civil society organizations, government, and private sector - to identify and nurture novel solutions to social challenges in Africa.
                    In 2017, Co-Creation HUB launched Growth Capital in partnership with Omidyar Network, Bank of Industry, and Venture Garden Group to provide early-stage funding for startups driving social change. In February 2019, Co-creation HUB opened a Design Lab in Kigali, Rwanda, focusing on Research and Development and Human-Centered Design to enable innovation for social impact. Our Kigali Centre collaborates with global stakeholders to explore the application of technology in addressing Africa’s systemic problems in education, public health, governance, and other areas of our work. In September 2019, we expanded our footprint by acquiring iHUB in Nairobi, Kenya, strengthening our commitment to supporting entrepreneurs and innovators across the continent. In 2020, we launched CcHUB Syndicate, an investment vehicle designed to improve capital access for startups and bridge the funding gap in Africa’s innovation ecosystem. In 2021, we established the Creative Economy Practice to drive the growth of Africa’s creative economy by applying innovation and technology. In 2023, we further expanded our presence by opening the Co-creation HUB in Windhoek, Namibia. These expansions have been intentional in contributing to our vision to be Africa's leading pan-African creative and innovation ecosystem enabler.
                    Since its establishment, CcHUB has supported the development and launch of over 10,000 innovative technology companies that address social challenges across Africa in areas such as budget transparency, agtech, education, fintech, healthcare delivery, the creative economy, and sustainability.
                    Job Description
                    Job Purpose
                    The Graphics Designer is responsible for developing compelling visual content that communicates the GATEWAY Program’s mission, achievements, and human impact. This role translates complex ideas into engaging visual formats — from infographics and motion graphics to reports and social media campaigns. The Associate ensures brand consistency, brings creativity to digital campaigns, and contributes to inclusive storytelling that amplifies the voices of underrepresented groups.
                    Key Responsibilities
                    1. Creative & Strategic Design
                    Develop visual strategies: Collaborate with the communications team to translate program goals into a cohesive visual strategy that aligns with the overall communication and advocacy objectives.
                    Create diverse visual content: Design and produce a wide range of content, including infographics, reports, newsletters, presentations, and social media graphics.
                    Ensure brand consistency: Uphold and enforce the program's visual identity and brand guidelines across all materials, ensuring a consistent and professional look.
                    2. Content Development & Production
                    Infographics and data visualization: Transform research, data, and key program findings into clear, digestible, and visually appealing infographics that tell a compelling story.
                    Report and publication design: Design and lay out program reports, case studies, and other publications to be both aesthetically pleasing and easy to read.
                    Motion graphics: Produce short motion graphics for social media and digital campaigns to increase engagement and explain complex concepts.
                    Illustrations and custom visuals: Create original illustrations and visual assets to enhance storytelling and represent program beneficiaries and their experiences.
                    3. Innovation & Storytelling
                    Creative Experimentation: Proactively research and experiment with emerging digital design trends and new formats, such as interactive visuals, vertical video for TikTok/Reels, and animated stories, to keep the program's content fresh and highly engaging for a youth audience.
                    Inclusivity & Authentic Representation: Champion the program's commitment to diversity by ensuring all visual content authentically represents marginalized young women, youth, and persons with disabilities.
                    Narrative-Driven Design: Go beyond simply creating graphics by developing design concepts that tell a cohesive and compelling story.
                    Impact Storytelling: Work closely with the M&E team to transform quantitative data and qualitative feedback into powerful visual narratives that showcase the program's impact.
                    4. Technical and Project Management
                    Asset Management: Organize and maintain a digital asset library of all design files, photos, and brand elements for easy access and long-term use.
                    Print Production: Prepare and manage design files for professional printing, collaborating with vendors to ensure high-quality production of brochures, flyers, banners, and other physical materials for events and outreach.
                    Workflow Coordination: Manage multiple design projects simultaneously, ensuring all deliverables are met on time and aligned with content calendars and communication timelines.
                    Budgeting: Assist in tracking design-related expenses and managing allocated budgets for tools, software, and external services.
                    5. Collaboration and Stakeholder Engagement
                    Inter-team Collaboration: Work closely with the program management, M&E (Monitoring and Evaluation), and partnership teams to understand their needs and develop visuals that effectively communicate their work.
                    Advocacy and Training: Contribute to workshops or training sessions for program beneficiaries, teaching basic visual storytelling skills or graphic design principles to empower them in their gig work.
                    Feedback Integration: Actively seek and incorporate feedback from stakeholders and target audiences to refine design concepts and improve the effectiveness of visual communications.
                    Key Performance Indicators
                    Visual Content Production & Management
                    Advocacy & Impact Storytelling
                    Media & Partner Collateral
                    Digital Engagement & User Interface
                    Reporting & Template Creation
                    Professional Development & Innovation
                    Qualifications
                    Education:
                    A Bachelor’s degree in Fine Arts, Visual Communications, or a related field.
                    Experience:
                    5–8 years of professional experience as a graphic designer, preferably in communications or campaign-focused roles.
                    Portfolio showcasing strong design, motion graphics, and data visualization work.
                    Experience in creating content for digital campaigns and social media preferred.
                    Skills & Competencies:
                    Design proficiency: Expert-level proficiency in graphic design software, including the Adobe Creative Suite (Photoshop, Illustrator, InDesign, After Effects).
                    Creativity and attention to detail: Strong creative skills with a meticulous eye for detail, typography, and colour theory.
                    Data visualization skills: Demonstrated ability to convert complex data and text into simple, impactful visuals.
                    Project management: Excellent time management and organisational skills, with the ability to manage multiple projects simultaneously and meet tight deadlines.
                    Communication: Strong verbal and written communication skills to collaborate effectively with team members and understand project requirements.
                    Storytelling: Ability to use visuals to tell compelling stories, grounded in ethics.
                    Adaptability: Flexibility to adapt design styles to suit diverse audiences and communication goals.
                    Additional Information
                    Please note this is an onsite role in Lagos, Nigeria
                    Co-creation HUB (CcHUB) is an equal opportunity employer. The Company prohibits discrimination and harassment of any type and affords equal employment opportunities to employees and applicants without regard to race, color, religion, gender, sexual orientation, gender identity or expression, pregnancy, age, national origin, disability status, genetic information, protected veteran status, or any other characteristic protected by law. The Company conforms to the spirit as well as to the letter of all applicable laws and regulations.
                    `
    },
    {
        id: "2",
        role: "Backend Engineer",
        company: "CloudNet Systems",
        location: "Abuja, Nigeria",
        salary: "₦20,000,000 - ₦30,000,000 a month",
        type: "Fulltime",
        mode: "Hybrid",
        level: "Senior",
        visited: "Visited 3 days ago",
        description: `Join our backend engineering team to build high-performance APIs using Node.js and MongoDB. 
You’ll collaborate with frontend engineers and product managers to design scalable solutions. 
Experience with cloud infrastructure (AWS/GCP) is a plus.`
    },
    {
        id: "3",
        role: "UI/UX Designer",
        company: "PixelHub",
        location: "Remote",
        salary: "₦15,000,000 - ₦22,000,000 a month",
        type: "Contract",
        mode: "Remote",
        level: "Mid-level",
        visited: "Visited 5 hours ago",
        description: `We are seeking a creative UI/UX designer to craft intuitive interfaces for our mobile and web products. 
Your role will involve wireframing, prototyping, and conducting user research. 
Proficiency in Figma and strong communication skills are required.`
    },
    {
        id: "4",
        role: "Mobile App Developer",
        company: "NextGen Apps",
        location: "Port Harcourt, Nigeria",
        salary: "₦25,000,000 - ₦40,000,000 a month",
        type: "Fulltime",
        mode: "Onsite",
        level: "Junior",
        visited: "Visited 2 days ago",
        description: `Develop and maintain Android and iOS applications using Flutter. 
You will collaborate with designers and backend engineers to ensure smooth app delivery. 
Some experience with Firebase and REST APIs is recommended.`
    },
    {
        id: "5",
        role: "Data Analyst",
        company: "Insight Analytics",
        location: "Ibadan, Nigeria",
        salary: "₦18,000,000 - ₦28,000,000 a month",
        type: "Fulltime",
        mode: "Hybrid",
        level: "Mid-level",
        visited: "Visited yesterday",
        description: `Analyze large datasets to extract business insights and improve decision-making. 
You should be proficient in SQL, Excel, and visualization tools like Power BI or Tableau. 
Knowledge of Python for data analysis is a strong advantage.`
    }
];