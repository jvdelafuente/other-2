import "../styles/project.css";
import Atropos from "atropos/react";

export default function Project() {
  return (
    <div className="project-big-container" id="project">
      <div className="project-h1-container">
        <h1>Projects</h1>
      </div>
      <div className="project-project-container">
        <div
        className="card-atropos">
        <div data-atropos-offset="3" className="grid-item">
          <h2>Project 1</h2>
          <div className="project-p-container">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nemo, voluptatibus minima natus voluptate at iusto placeat maxime beatae eos et.</p>
          </div>
          <div className="project-tool-container">
            <h3>JavaScript</h3>
            <h3>SASS</h3>
            <h3>Tailwind</h3>
          </div>
        </div></div>
        <div
        className="card-atropos">
        <div data-atropos-offset="3" className="grid-item">
          <h2>Project 2</h2>
          <div className="project-p-container">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nemo, voluptatibus minima natus voluptate at iusto placeat maxime beatae eos et.</p>
          </div>
          <div className="project-tool-container">
            <h3>JavaScript</h3>
            <h3>SASS</h3>
            <h3>Tailwind</h3>
          </div>
        </div></div>
        <Atropos
        className="card-atropos"
        activeOffset={40}
        shadowScale={1.05}>
        <div data-atropos-offset="3" className="grid-item">
          <h2>Project 3</h2>
          <div className="project-p-container">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nemo, voluptatibus minima natus voluptate at iusto placeat maxime beatae eos et.</p>
          </div>
          <div className="project-tool-container">
          <h3>JavaScript</h3>
          <h3>SASS</h3>
          <h3>Tailwind</h3>
          </div>
        </div></Atropos>
        <Atropos
        className="card-atropos"
        activeOffset={40}
        shadowScale={1.05}>
        <div data-atropos-offset="3" className="grid-item">
          <h2>Project 4</h2>
          <div className="project-p-container">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nemo, voluptatibus minima natus voluptate at iusto placeat maxime beatae eos et.</p>
          </div>
          <div className="project-tool-container">
            <h3>JavaScript</h3>
            <h3>SASS</h3>
            <h3>Tailwind</h3>
          </div>
        </div></Atropos>
      </div>
    </div>
  );
}
