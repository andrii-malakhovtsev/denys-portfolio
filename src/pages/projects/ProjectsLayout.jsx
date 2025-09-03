import React from 'react';
import { Outlet } from 'react-router-dom';
import ProjectsNav from '../../components/ProjectsNav';
import "./ProjectPage.css";

export default function ProjectsLayout() {
  return (
    <div>
      <ProjectsNav />
      <div className="projects-content">
        <Outlet />
      </div>
    </div>
  );
}
