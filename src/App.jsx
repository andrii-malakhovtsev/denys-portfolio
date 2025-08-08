import './App.css';

import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import Header from './components/Header';

function App() {
  return (
    <div className="layout">
      <Header />
      <Navbar />

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
          <h2>Project Examples</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>3-axis CNC wood milling Machine</h3>
              <img src="/images/CNC-WoodMillingMachine/CNC-woodmillingmachine-1.jpg" alt="Rover" />
            </div>

            <div className="project-card">
              <h3>Automatic machine for bending metal strips</h3>
              <img src="/images/MetalStripsMachine/SDK1.jpg" alt="Rover" />
            </div>

            <div className="project-card">
              <h3>Machine for making metal rings and welding them</h3>
              <img src="/images/MetalRingsWeldingMachine/MetalRingsWeldingMachine-1.jpg" alt="Rover" />
            </div>

            <div className="project-card">
              <h3>Design and manufacturing of a model of a radiator for an LED lamp</h3>
              <img src="/images/RadiatorForLEDLamp/Radiator.jpg" alt="Rover" />
            </div>

            <div className="project-card">
              <h3>CNC lathe</h3>
              <img src="/images/CNC-Lathe/CNC-Lathe.jpg" alt="Rover" />
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <Timeline />
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
