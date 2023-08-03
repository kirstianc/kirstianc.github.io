import React from 'react';
import './buttonStyles.css';

const ButtonList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <a href={project.link} className="button" style={{ backgroundImage: `url(${project.image})` }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ButtonList;
