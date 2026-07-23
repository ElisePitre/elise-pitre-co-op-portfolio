import headshot from "../styles/Elise-headshot.png";
import eliseAtComputer from "../styles/EliseAtComputerSAP.jpg";
import eliseAtWhiteboard from "../styles/EliseAtWhiteboardSAP.jpg";
import eliseWithSAPLogoTeeth from "../styles/EliseWithSAPLogoTeeth.jpg";
import elisePresenting from "../styles/elisePresenting.jpeg";
import sapInWinter from "../styles/sapInWinter.jpeg";
import postPresentationSelfie from "../styles/postPresentationSelfie.jpeg";

const featuredProjects = [
  {
    title: "Jumpeace Insights",
    role: "Frontend Team Lead",
    summary:
      "An interactive web tool that uses word embeddings to explore linguistic bias in historical newspapers from 1770 to 1964. Used to examine questions such as: how has the association between 'women' and 'engineer' change over time?",
    details: [
      "Led an 8-person team to ship a research-focused product",
      "Built the React frontend for visual data exploration",
      "Used feedback to improve clarity and usability",
    ],
    meta: "Python, React, Word2Vec, Firebase",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ElisePitre/jumpeaceInsights",
      },
    ],
  },
  {
    title: "RumiRoutine",
    role: "Full-Stack Builder",
    summary:
      "A cross-platform gamified chore tracking app with shared household progress, Firebase auth, and Duolingo-inspired motivation mechanics.",
    details: [
      "Built with Flutter and Dart for mobile-first usage",
      "Added real-time shared chore tracking across linked users",
      "Designed XP, streaks, achievements, and a shared household character whose emotion reflects the household's progress and engagement",
    ],
    meta: "Flutter, Dart, C++, Firebase",
    links: [
      {
        label: "Live Site",
        href: "https://rumiroutine.netlify.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/ElisePitre/rumiRoutine",
      },
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "C", "Java", "JavaScript", "C++", "Dart", "Bash", "Groovy", "Go"],
  },
  {
    title: "Web & Mobile",
    items: ["React Native", "Flutter", "Firebase"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    title: "Systems & Tools",
    items: ["Git", "Gerrit", "Jenkins", "Docker", "CMake", "Linux", "CI/CD"],
  },
  {
    title: "Concepts",
    items: ["Agile", "Object-Oriented Design", "Debugging", "Testing"],
  },
  {
    title: "AI / Machine Learning",
    items: ["LLM Integration", "Prompt Engineering", "Word Embeddings", "Agentic Workflows"],
  },
];

const experienceEntries = [
  {
    title: "Database Client Driver Developer - SAP iXp Intern",
    company: "SAP Canada",
    location: "Waterloo, ON",
    date: "May 2026 - Aug. 2026",
    summary:
      "Developed production features and resolved critical bugs across SAP HANA's database client ecosystem.",
    bullets: [
      "Implemented ES Module compatibility for the Node.js driver across 36 source files while preserving CommonJS support.",
      "Authored a technical design evaluating module-loading strategies and regression test coverage.",
      "Debugged production issues through log analysis and unit testing, prioritizing by customer impact.",
    ],
    stack: ["Python", "JavaScript", "C++", "Node.js"],
  },
  {
    title: "Project Lead & Software Engineer (Contract)",
    company: "Grand River Family Health Organization",
    location: "Kitchener / Waterloo, ON",
    date: "Sept. 2024 - May 2026",
    summary:
      "MyOnCall is an automated physician scheduling platform that replaces a manual workflow with a more reliable and scalable system.",
    bullets: [
      "Led a 12-person engineering team through the full product lifecycle.",
      "Designed a greedy scheduling algorithm with weighted multi-criteria scoring to balance preferences, fairness, and coverage.",
      "Reduced administrative workload by 75% per rotation for 29 doctors.",
    ],
    stack: ["Python", "MongoDB", "React JS"],
  },
  {
    title: "CI/CD Pipeline Developer - SAP iXp Intern",
    company: "SAP Canada",
    location: "Waterloo, ON",
    date: "May 2025 - Dec. 2025",
    summary:
      "Owned CI/CD infrastructure serving 50+ developers and improved reliability through automation and test optimization.",
    bullets: [
      "Reduced pipeline complexity by 14% through versioning-based test filtering and parallelization.",
      "Migrated legacy Bash and Groovy automation to modular Python with unittest coverage.",
      "Recognized with an outstanding co-op evaluation for building reliable infrastructure.",
    ],
    stack: ["Jenkins", "Gerrit", "Git", "Python", "Bash", "Groovy"],
  },
];

// --- SVG Icon Components ---
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 32 32" width={28} height={28} fill="currentColor" {...props}>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#0A66C2" />
      <path d="M9.6 12.8h3.2v9.6H9.6v-9.6zM11.2 10.9c-1 0-1.8-.8-1.8-1.8C9.4 8 10.2 7.2 11.2 7.2c1 0 1.8.8 1.8 1.8 0 1-.8 1.9-1.8 1.9zm4.1 1.9h3v1.3c.4-.7 1.3-1.5 2.7-1.5 2.7 0 3.2 1.8 3.2 4.1v4.8h-3.2v-4.3c0-1-.1-2.2-1.3-2.2-1.3 0-1.5 1-1.5 2.1v4.4h-3.2v-9.7z" fill="#fff" />
    </svg>
  );
}

function EmailIcon(props) {
  return (
    <svg viewBox="0 0 32 32" width={28} height={28} fill="currentColor" {...props}>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#6d96a8ff" />
      <path d="M8 10h16c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1V11c0-.6.4-1 1-1zm0 1v.2l8 5.3 8-5.3V11H8zm16 10V12.1l-7.5 5c-.3.2-.7.2-1 0L8 12.1V21h16z" fill="#fff" />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 32 32" width={28} height={28} fill="currentColor" {...props}>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#171515" />
      <path d="M16 6.5C10.2 6.5 5.5 11.2 5.5 17c0 4.6 3 8.5 7.2 9.9.5.1.7-.2.7-.5v-1.7c-2.9.6-3.5-1.3-3.5-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.6.4-1.1.7-1.3-2.3-.3-4.7-1.2-4.7-5.2 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.6.1-3.2 0 0 .9-.3 2.9 1.1.9-.2 1.9-.4 2.9-.4s2 .1 2.9.4c2-.1 2.9-1.1 2.9-1.1.6 1.6.2 2.9.1 3.2.7.8 1.1 1.7 1.1 2.9 0 4-2.4 4.9-4.7 5.2.4.3.8 1 .8 2v3c0 .3.2.6.7.5C23.5 25.5 26.5 21.6 26.5 17c0-5.8-4.7-10.5-10.5-10.5z" fill="#fff" />
    </svg>
  );
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 1 0-7.07-7.07L11.5 4.43" />
      <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07L12.5 19.57" />
    </svg>
  );
}

function Home() {
  return (
    <div className="home-page" id="top">
      <section className="hero-section section-shell">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software engineering co-op student</p>
            <h1 className="hero-title">Elise Pitre</h1>
            <div className="hero-social" aria-label="Social links">
              <a
                href="https://www.linkedin.com/in/elise-pitre"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:elisempitre@gmail.com" className="social-link" title="Email">
                <EmailIcon />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/ElisePitre"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
            </div>
            <p className="hero-body">
              Hi, I’m Elise, a Software Engineering (Co-op) student at the University of Guelph with a minor in Sustainable Business.
              On the technical side, I love working with algorithms and optimization. Anything that is super analytical and feels like 
              a puzzle that needs to be solved is my cup of tea. I also love examining the social and ethical side of computing. 
              Especially in the age of AI, I think it is extremely important to have conversations around the social implications of 
              software and how to design ethically and inclusively. As I begin my career journey, I’m eager to continue learning and 
              growing with hands-on experiences.
            </p>
            <p className="hero-body">
              Fun Fact: Outside of computing, I am a member of the Guelph Tap Pak competitive dance team. I also love to read, crochet, and sew in my free time.
            </p>
          </div>

          <img src={headshot} alt="Elise Pitre headshot" className="hero-headshot" />

        </div>
      </section>

      <section id="experience" className="section-shell content-section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Resume highlights</h2>
        </div>
        <div className="experience-list">
          {experienceEntries.map((entry) => (
            <article className="experience-card" key={`${entry.title}-${entry.company}`}>
              <div className="experience-top">
                <div>
                  <h3>{entry.title}</h3>
                  <p className="experience-company">{entry.company}</p>
                </div>
                <div className="experience-meta">
                  <span>{entry.location}</span>
                  <span>{entry.date}</span>
                </div>
              </div>
              <p className="experience-summary">{entry.summary}</p>
              <ul className="experience-bullets">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="experience-tech" aria-label={`Technologies used for ${entry.title}`}>
                {entry.stack.map((tech) => (
                  <span className="project-tech-chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell content-section">
        <div className="section-heading">
          <p className="eyebrow">Selected projects</p>
          <h2>Projects that show how I build</h2>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-header">
                <p className="project-role">{project.role}</p>
                <h3>{project.title}</h3>
                <div className="project-tech" aria-label={`Technologies used for ${project.title}`}>
                  {project.meta.split(",").map((tech) => (
                    <span className="project-tech-chip" key={tech.trim()}>
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <p className="project-summary">{project.summary}</p>
              <ul className="project-details">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              {project.links ? (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                      <LinkIcon />
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-shell content-section">
        <div className="section-heading">
          <p className="eyebrow">Technical skills</p>
          <h2>Tools and technologies I work with</h2>
        </div>
        <div className="skills-list">
          {skillGroups.map((group) => (
            <article className="skill-row" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span className="skill-item" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Work Term 2 Section */}
      <section id="work-term-2" className="section work-term-section">
        <div className="work-term-layout">
          <div className="work-term-info">
            <h2>Work Term 2: SAP CI/CD Pipeline Developer</h2>
            <h3>Introduction</h3>
            <p>
              From September to December 2025, I completed the second of two co-op terms as an SAP iXp Intern in the CI/CD Developer 
              role. I worked on automated pipelines that ensure code quality and efficiency, gaining experience with Git, Gerrit, 
              Jenkins, Bash, and Groovy while also building confidence in communication, collaboration, and problem-solving.
            </p>
            <h3>Employer</h3>
            <p>
              SAP is a global leader in enterprise software, serving 400,000+ customers worldwide. I worked in the iXp program, 
              which provides interns with meaningful projects, mentorship, and professional growth opportunities. My team focused 
              on building and maintaining CI/CD pipelines, a critical part of modern software development.
            </p>
            <h3>Goals</h3>
            <p>
              This term, I had many goals for topics I wanted to learn more about, in addition to improvements and expansions I 
              wanted to make given my familiarity with the codebase. I wanted to gain more experience implementing OOP, completing 
              code reviews, and making changes to improve optimization and reliability.
            </p>
            <p>
              I feel as though I gained valuable experience in these areas, as I had hoped. For example, I refactored the pipeline 
              codebase to be written in Python and use inheritance, improving code reuse and modularity. Additionally, I implemented 
              a server pool feature where tests dynamically choose a server on which to execute, allowing for more efficient use of 
              version, avoiding redundant builds and barrier failures.
            </p>
            <h3>Job Description</h3>
            <p>
               As a CI/CD Pipeline Developer Intern in my second term, I:
            </p>
            <ul>
              <li>Supported and improved automated pipelines for SAP HANA drivers, including ODBC, JDBC, Node, Python, Go, Dbisqlc, Dbisql, 
                Dbcapi, and Odm (supporting approximately 50 developers)</li>
              <li>Debugged and resolved complex pipeline issues, enabling faster and more reliable builds and deployments</li>
              <li>Utilized Jenkins and Gerrit for builds and reviews</li>
              <li>Wrote and edited scripts in Python, Bash, Groovy, and Java</li>
              <li>Expanded barriers to add testing for the Python driver, testing the product version with the SAP Common Crypto Library, 
                and testing on additional platforms (such as Windows and Linux Arm)</li>
            </ul>
            <h3>Conclusion</h3>
            <p>
              Overall, this term has been an amazing experience, for which I am incredibly grateful. I really enjoyed the opportunity to work 
              on a codebase that I was already familiar with. I believe this gave me the opportunity to make more meaningful changes and dive 
              into deeper projects than I otherwise wouldn’t have had time to accomplish.
            </p>
            <h3>Acknowledgments</h3>
            <p>
              I want to give a huge thank you to all of my colleagues at the SAP Waterloo office. It was an amazing place to work, and a huge 
              part of that was the people around me. I especially want to thank my manager Dan for helping me grow throughout the last 8 months 
              and for being such an encouraging and positive supervisor. I also want to give credit to my incredible coworker Ian for building 
              the life-size and fully functional R2-D2 in the last picture. I learned a ton during my time here thanks to the amazing people 
              and workplace culture
            </p>
          </div>
          <div className="work-term-media">
            <img src={elisePresenting} alt="Elise presenting at SAP" className="media-profile" />
            <div style={{ height: "24px" }} />
            <img src={sapInWinter} alt="SAP building in winter" className="media-profile" />
            <div style={{ height: "24px" }} />
            <img src={postPresentationSelfie} alt="Post Presentation Selfie" className="media-profile" />
          </div>
        </div>
      </section>

      {/* Work Term 1 Section */}
      <section id="work-term-1" className="section work-term-section">
        <div className="work-term-layout">
          <div className="work-term-info">
            <h2>Work Term 1: SAP CI/CD Pipeline Developer</h2>
            <h3>Introduction</h3>
            <p>
              From May to August 2025, I completed the first of two co-op terms as an SAP iXp Intern working as a CI/CD Developer. 
              I worked on automated pipelines that ensure code quality and efficiency, gaining experience with Git, Gerrit, Jenkins, Bash, 
              and Groovy while also building confidence in communication, collaboration, and problem-solving.
            </p>
            <h3>Employer</h3>
            <p>
              SAP is a global leader in enterprise software, serving 400,000+ customers worldwide. I worked in the iXp program, 
              which provides interns with meaningful projects, mentorship, and professional growth opportunities. My team focused on 
              building and maintaining CI/CD pipelines, a critical part of modern software development.
            </p>
            <h3>Goals</h3>
            <p>
              My goals this term were to grow technically, strengthen problem-solving, become a more effective collaborator, and gain 
              confidence presenting technical updates. I made strong progress in each area, from debugging complex pipeline issues to 
              explaining my work more clearly in meetings.
            </p>
            <p>
              Looking ahead, I want to focus on making code more modular and readable by applying clean coding and object-oriented principles. 
              This will improve maintainability, support code reuse, and simplify future changes.
            </p>
            <h3>Job Description</h3>
            <p>
              As a CI/CD Pipeline Developer Intern, I:
            </p>
            <ul>
              <li>Supported and improved automated pipelines.</li>
              <li>Debugged pipeline issues to find and fix root causes.</li>
              <li>Worked with Jenkins and Gerrit for builds and reviews.</li>
              <li>Wrote and edited scripts in Bash, Python and Groovy.</li>
            </ul>
            <p>
              Presenting progress in weekly meetings helped me grow as a communicator, and working in a collaborative team taught me how to 
              balance independence with asking for help at the right time.
            </p>
            <h3>Conclusion</h3>
            <p>
              This co-op term gave me invaluable technical and professional growth. I gained confidence in debugging, teamwork, and presenting 
              technical concepts, while also developing a clearer understanding of how code moves from development to production.
            </p>
            <h3>Acknowledgments</h3>
            <p>
              I would like to thank my manager and team at SAP for their mentorship, support, and encouragement throughout the term. Their 
              willingness to share knowledge, provide guidance, and encourage my contributions made this an incredible first co-op experience.
            </p>
          </div>
          <div className="work-term-media">
            <img src={eliseWithSAPLogoTeeth} alt="Elise with SAP Logo Teeth" className="media-profile" />
            <div style={{ height: "24px" }} />
            <img src={eliseAtComputer} alt="Elise working at computer at SAP" className="media-profile" />
            <div style={{ height: "24px" }} />
            <img src={eliseAtWhiteboard} alt="Elise at SAP whiteboard" className="media-profile" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2>Contact</h2>
        <p>If you'd like to get in touch, reach out via email or LinkedIn!</p>
        <ul>
          <li>Email: <a href="mailto:elisempitre@gmail.com">elisempitre@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/elise-pitre" target="_blank" rel="noopener noreferrer">linkedin.com/in/elise-pitre</a></li>
          <li>GitHub: <a href="https://github.com/ElisePitre" target="_blank" rel="noopener noreferrer">github.com/ElisePitre</a></li>
        </ul>
      </section>
    </div>
  );
}

export default Home;