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

        <section id="experience" class="experience" className="section">
        <h2>Experience</h2>
        <div class="timeline">
            <div class="timeline-item">
                <div class="year">2021</div>
                <div class="content">
                    <h3>Head of the Logistics and Technical Support Department</h3>
                    <p class="company">Tesla Build Group</p>
                    <p class="description">Role Description</p>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="year">2018</div>
                <div class="content">
                    <h3>Director</h3>
                    <p class="company">Grand Pro</p>
                    <p class="description">Managing the project team. 
                      Organizing tenders for the purchase of materials. 
                      Coordination of design and architectural 
                      documentation.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="year">2017</div>
                <div class="content">
                    <h3>Deputy Director</h3>
                    <p class="company">Grand Pro</p>
                    <p class="description">Managing the project team. 
                      Organizing tenders for the purchase of materials. 
                      Coordination of design and architectural documentation.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="year">2013</div>
                <div class="content">
                    <h3>Design Construction Engineer</h3>
                    <p class="company">
                      <a href="https://www.infomir.eu/" target="_blank">
                        Infomir
                      </a>
                    </p>
                    <p class="description">Development and modeling of prototypes 
                      of products and equipment for the production of parts, 
                      creation of programs for CNC machines and production of prototypes.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="year">2011</div>
                <div class="content">
                    <h3>Design Construction Engineer</h3>
                    <p class="company">
                      <a href="https://telecard.odessa.ua/" target="_blank">
                      Telecard
                      </a>
                    </p>
                    <p class="description">Role Description</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="year">2007</div>
                <div class="content">
                    <h3>Lead Technical Engineer</h3>
                    <p class="company">
                      <a href="https://telecard.odessa.ua/" target="_blank">
                      Telecard
                      </a>
                    </p>
                    <p class="description">Development of technological processes for the 
                      production of parts and assemblies, calculation of time and material
                       standards. Development of production shop layouts, installation of 
                       equipment lines. Development of assembly devices, tooling for the 
                       production of parts.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="year">2001</div>
                <div class="content">
                    <h3>Technical Engineer</h3>
                    <p class="company">
                      <a href="https://telecard.odessa.ua/" target="_blank">
                      Telecard
                      </a>
                    </p>
                    <p class="description">Development of technological processes for the production of 
                      parts and assemblies, calculation of time and material standards. 
                      Development of production shop layouts, installation of equipment lines.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="year">1996</div>
                <div class="content">
                    <h3>Bachelor's Degree in Mechanical Engineering</h3>
                    <p class="company">
                      <a href="https://ontu.edu.ua/" target="_blank">
                      Odesa National Technical University
                      </a>
                    </p>
                </div>
            </div>
        </div>
        </section>

      <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email:&nbsp;
            <a href="mailto:mdvden1978usa@gmail.com">mdvden1978usa@gmail.com</a>
          </p>
          <p>LinkedIn:&nbsp; 
            <a href="https://www.linkedin.com/in/denys-malakhovtsev/" target="_blank">
              linkedin.com/in/denys-malakhovtsev
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
