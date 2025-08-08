import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    year: '2021',
    type: 'fulltime',
    title: 'Head of the Logistics and Technical Support Department',
    company: 'Tesla Build Group',
  },
 
  {
    year: '2018',
    type: 'fulltime',
    title: 'Director',
    company: 'Grand Pro',
    description: '+ Lead managing of project team',
  },
  {
    year: '2017',
    type: 'fulltime',
    title: 'Deputy Director',
    company: 'Grand Pro',
    description: 'Managing the project team. ' + 
    'Organizing tenders for the purchase of materials. ' +  
    'Coordination of design and architectural documentation.',
  },
  {
    year: '2013',
    type: 'fulltime',
    title: 'Design Construction Engineer',
    company: 'Infomir',
    companyUrl: 'https://www.infomir.eu/',
    description: 'Development and modeling of prototypes of ' + 
    'products and equipment for the production of parts, ' + 
    'creation of programs for CNC machines and production of prototypes.',
  },
  {
    year: '2011',
    type: 'fulltime',
    title: 'Design Construction Engineer',
    company: 'Telecard',
    companyUrl: 'https://telecard.odessa.ua/',
    description: '+ Main designer of parts and devices.',
  },
  {
    year: '2010-2020',
    type: 'parttime',
    title: 'Design Construction Engineer',
    company: 'SDK Systems',
    companyUrl: 'https://sdk-systems.com.pl/en/',
    description: 'Part Time Side Job - Design of production machines.',
  },
  {
    year: '2007',
    type: 'fulltime',
    title: 'Lead Technical Engineer',
    company: 'Telecard',
    companyUrl: 'https://telecard.odessa.ua/',
    description: '+ Development of assembly devices, tooling for the production of parts.',
  },
  {
    year: '2001',
    type: 'fulltime',
    title: 'Technical Engineer',
    company: 'Telecard',
    companyUrl: 'https://telecard.odessa.ua/',
    description: 'Development of technological processes for the production of parts and assemblies,'
    + 'calculation of time and material standards. Development of production shop layouts, installation of equipment lines.',
  },
  {
    year: '1996',
    type: 'education',
    title: 'Bachelor\'s Degree in Mechanical Engineering',
    company: 'Odesa National Technical University',
    companyUrl: 'https://ontu.edu.ua/',
  },
];

export default function Timeline() {
  return (
    <div className="timeline">
      {timelineData.map(({ year, type, title, company, companyUrl, description }, idx) => (
        <div key={idx} className={`timeline-item ${type}`} data-year={year}>
          <div className="content">
            <h3>{title}</h3>
            {companyUrl ? (
              <p className="company">
                <a href={companyUrl} target="_blank" rel="noopener noreferrer">
                  {company}
                </a>
              </p>
            ) : (
              <p className="company">{company}</p>
            )}
            <p className="description">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
