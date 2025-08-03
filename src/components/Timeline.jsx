import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css';

export default function Timeline() {
  const timelineRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const [lineStyle, setLineStyle] = useState({ top: 0, height: 0 });

  useEffect(() => {
    function updateLine() {
      if (!timelineRef.current || !startRef.current || !endRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const startRect = startRef.current.getBoundingClientRect();
      const endRect = endRef.current.getBoundingClientRect();

      const dotCenterOffset = 10;

      const top = startRect.top - timelineRect.top + timelineRef.current.scrollTop + dotCenterOffset;

      const extraPadding = -10;
      const height = (endRect.top - startRect.top) + dotCenterOffset + extraPadding;


      setLineStyle({ top, height });
    }


    updateLine();
    window.addEventListener('resize', updateLine);
    return () => window.removeEventListener('resize', updateLine);
  }, []);

  return (
    <div className="timeline" ref={timelineRef}>

      {/* The blue vertical parttime line */}
      <div
        className="parttime-line"
        style={{ top: lineStyle.top + 'px', height: lineStyle.height + 'px' }}
      />

      <div className="timeline-item parttime" ref={startRef}>
        <div className="year">2021</div>
        <div className="content">
          <h3>Head of the Logistics and Technical Support Department</h3>
          <p className="company">Tesla Build Group</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="year">2018</div>
        <div className="content">
          <h3>Director</h3>
          <p className="company">Grand Pro</p>
          <p className="description">+ Lead managing of project team.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="year">2017</div>
        <div className="content">
          <h3>Deputy Director</h3>
          <p className="company">Grand Pro</p>
          <p className="description">
            Managing the project team.
            Organizing tenders for the purchase of materials.
            Coordination of design and architectural documentation.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="year">2013</div>
        <div className="content">
          <h3>Design Construction Engineer</h3>
          <p className="company">
            <a href="https://www.infomir.eu/" target="_blank" rel="noreferrer">
              Infomir
            </a>
          </p>
          <p className="description">
            Development and modeling of prototypes of products and equipment for the production of parts,
            creation of programs for CNC machines and production of prototypes.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="year">2011</div>
        <div className="content">
          <h3>Design Construction Engineer</h3>
          <p className="company">
            <a href="https://telecard.odessa.ua/" target="_blank" rel="noreferrer">
              Telecard
            </a>
          </p>
          <p className="description">+ Main designer of parts and devices.</p>
        </div>
      </div>

      <div className="timeline-item parttime" ref={endRef}>
        <div className="year">2010</div>
        <div className="content">
          <h3>Design Construction Engineer</h3>
          <p className="company">
            <a href="https://sdk-systems.com.pl/en/" target="_blank" rel="noreferrer">
              SDK Systems
            </a>
            &nbsp; - <i>Part Time till 2020</i>
          </p>
          <p className="description">Design of production machines.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="year">2007</div>
        <div className="content">
          <h3>Lead Technical Engineer</h3>
          <p className="company">
            <a href="https://telecard.odessa.ua/" target="_blank" rel="noreferrer">
              Telecard
            </a>
          </p>
          <p className="description">
            + Development of assembly devices, tooling for the production of parts.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="year">2001</div>
        <div className="content">
          <h3>Technical Engineer</h3>
          <p className="company">
            <a href="https://telecard.odessa.ua/" target="_blank" rel="noreferrer">
              Telecard
            </a>
          </p>
          <p className="description">
            Development of technological processes for the production of parts and assemblies,
            calculation of time and material standards. Development of production shop layouts,
            installation of equipment lines.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="year">1996</div>
        <div className="content">
          <h3>Bachelor's Degree in Mechanical Engineering</h3>
          <p className="company">
            <a href="https://ontu.edu.ua/" target="_blank" rel="noreferrer">
              Odesa National Technical University
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
