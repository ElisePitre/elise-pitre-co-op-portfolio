import bannerImage from "../styles/DSCF1113.jpeg";
import eliseAtComputer from "../styles/EliseAtComputerSAP.jpg";
import eliseAtWhiteboard from "../styles/EliseAtWhiteboardSAP.jpg";
import eliseWithSAPLogoTeeth from "../styles/EliseWithSAPLogoTeeth.jpg";

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
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#67c8f0" />
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

function Home() {
  return (
    <div className="Home">
      {/* Hero section */}
      <div className="hero-banner">
        <img src={bannerImage} alt="Banner" className="hero-img" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Elise Pitre</h1>
            <h2 className="hero-subtitle">SAP CI/CD Pipeline Developer Co-op Portfolio</h2>
            <div className="hero-links-bar">
              <div className="hero-links-left">
                <a href="#work-term-1" title="Work Term 1" className="text-link">
                  Work Term 1
                </a>
                <a href="#contact" title="Contact" className="text-link">
                  Contact
                </a>
              </div>
              <div className="hero-links-right">
                <a
                  href="https://www.linkedin.com/in/elise-pitre"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="icon-link"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="mailto:elisempitre@gmail.com"
                  title="Email"
                  className="icon-link"
                >
                  <EmailIcon />
                </a>
                <a
                  href="https://github.com/ElisePitre"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="icon-link"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section id="welcome" className="section welcome-section spaced-section">
        <h2>Welcome</h2>
        <p>
          Welcome to my co-op portfolio! Here you'll find my experiences, skills, and reflections from my work terms. 
          Explore the projects, roles, and growth throughout my journey!
        </p>
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