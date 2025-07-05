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
            I’m a mechanical engineer... sample text
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
              <strong>Sample Role</strong> – Mechanical Engineer (year)
              <br />
              Role Description
            </li>
            <li>
              <strong>Sample Role</strong> – Mechanical Engineer (year)
              <br />
              Role Description
            </li>
          </ul>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email: </p>
          <p>LinkedIn: </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Denys Malakhovtsev. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
