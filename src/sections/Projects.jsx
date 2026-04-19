import './Projects.css';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard/ ProjectCard';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <p className="projects__subtitle">My Work</p>
        <h2 className="projects__title">Projects</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
