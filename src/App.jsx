import './App.css';

function App() {
  return (
    <div className="layout">
      <header className="header">
        <h1>Denys Malakhovtsev</h1>
        <p className="location">Dayton, OH | Mechanical Engineer</p>
      </header>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <main className="main">
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I’m a mechanical engineer with <b>over 2 decades</b> of experience in the field. 
            I have a passion for designing and building innovative solutions that improve
             efficiency and performance. My expertise includes mechanical design, project
              management, and team leadership.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Sample Project 1</h3>
              <p>
                Sample Text.
              </p>
              <video controls width="100%">
                <source src="/videos/lift.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="project-card">
              <h3>Sample Project 2</h3>
              <p>
                Sample Text.
              </p>
              <img src="/images/rover.jpg" alt="Rover" />
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <ul>
            <li>
              <strong>
                <a href="https://ontu.edu.ua/" target="_blank">
                ONTU
                </a>
              </strong> 
              – Bachelor's Degree (1996 - 2001)
              <br />
              Role Description
            </li>
            <li>
              <strong>
                <a href="https://telecard.odessa.ua/" target="_blank">
                Telecard
                </a>
              </strong> 
              – Technical Engineer (2001 - 2007)
              <br />
              Role Description
            </li>
            <li>
              <strong>
                <a href="https://telecard.odessa.ua/" target="_blank">
                Telecard
                </a>
              </strong> – Lead Technical Engineer (2007 - 2011)
              <br />
              Role Description
            </li>
            <li>
              <strong>
                <a href="https://telecard.odessa.ua/" target="_blank">
                Telecard
                </a>
              </strong> – Design Construction Engineer (2011 - 2013)
              <br />
              Role Description
            </li>
            <li>
              <strong>"Telecommunicational Technologies"</strong> – Design Construction Engineer (2013 - 2017)
              <br />
              Role Description
            </li>
            <li>
              <strong>"Grand Pro"</strong> – Deputy Director (2017 - 2018)
              <br />
              Role Description
            </li>
            <li>
              <strong>"Grand Pro"</strong> – Director (2018 - 2021)
              <br />
              Role Description
            </li>
            <li>
              <strong>"Tesla Build Group"</strong> – Head of the Logistics and Technical Support Department (2021 - 2022)
              <br />
              Role Description
            </li>
          </ul>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email:&nbsp;
            <a href="mailto:mdvden1978usa@gmail.com">mdvden1978usa@gmail.com</a>
          </p>
          <p>LinkedIn:&nbsp; 
            <a href="https://www.linkedin.com/in/denys-malakhovtsev-12a5a6370/" target="_blank">
              linkedin.com/in/denys-malakhovtsev-12a5a6370
            </a>
            </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Denys Malakhovtsev. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
