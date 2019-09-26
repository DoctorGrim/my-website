import React, { Component, useState } from "react";
import "./App.css";
import Card from "./Card";
import data from "./data";
// import logo from './assets/logo.svg';

function App() {
  const [projects, setProjects] = useState(data.projects);
  const [project, setProject] = useState(data.projects[1]);

  const nextProject = () => {
    let newIndex = project.index + 1;
    setProject(data.projects[newIndex]);
  };
  
  const prevProject = () => {
    const newIndex = project.index - 1;
    setProject(data.projects[newIndex]);
  };

  return (
    <div className="App">
      <div className="page">
        <section>
          <h1>Projects</h1>
        </section>
        <button 
          onClick={() => nextProject()}
          disabled={project.index === data.projects.length - 1}
        >
          Next
        </button>
        <button onClick={() => prevProject()} disabled={project.index === 0}>
          Prev
        </button>
        <div className="col">
          <div className={`cards-slider active-slide-${project.index}`}>
            <div
              className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${project.index *
                  (100 / projects.length)}%)`
              }}
            >
              {projects.map(project => (
                <Card key={project._id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
