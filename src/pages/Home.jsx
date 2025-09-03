import './../App.css';

import { Link } from "react-router-dom";

import Navbar from './../components/Navbar';
import Timeline from './../components/Timeline';

import cncWoodMillingImg from "../assets/CNC-WoodMillingMachine/CNC-woodmillingmachine-1.jpg";
import metalStripsImg from "../assets/MetalStripsMachine/SDK1.jpg";
import metalRingsImg from "../assets/MetalRingsWeldingMachine/MetalRingsWeldingMachine-1.jpg";
import radiatorImg from "../assets/RadiatorForLEDLamp/Radiator.jpg";
import cncLatheImg from "../assets/CNC-Lathe/CNC-Lathe.jpg";

export default function Home() {
  return (
    <div className="layout">
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
              <Link to="/projects/cnc-wood-milling-machine" className="block">
                <h3>3-axis CNC wood milling Machine</h3>
                <img src={cncWoodMillingImg} alt="3-axis CNC wood milling Machine" />
              </Link>
            </div>

            <div className="project-card">
              <Link to="/projects/metal-strips-machine" className="block">
                <h3>Automatic machine for bending metal strips</h3>
                <img src={metalStripsImg} alt="Metal Strips Machine" />
              </Link>
            </div>

            <div className="project-card">
              <Link to="/projects/metal-rings-welding-machine" className="block">
                <h3>Machine for making metal rings and welding them</h3>
                <img src={metalRingsImg} alt="Metal Rings Welding Machine" />
              </Link>
            </div>

            <div className="project-card">
              <Link to="/projects/radiator-led-lamp" className="block">
                <h3>
                  Design and manufacturing of a model of a radiator for an LED lamp
                </h3>
                <img src={radiatorImg} alt="Radiator for LED Lamp" />
              </Link>
            </div>

            <div className="project-card">
              <Link to="/projects/cnc-lathe" className="block">
                <h3>CNC lathe</h3>
                <img src={cncLatheImg} alt="CNC Lathe" />
              </Link>
            </div>

            <div className="project-card">
              <Link to="/projects/" className="block">
                <h3>See more projects...</h3>
              </Link>
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