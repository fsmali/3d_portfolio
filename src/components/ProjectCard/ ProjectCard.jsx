const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <article className="project-card">
      <div className="project-card__image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
        />
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__actions">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="project-card__link project-card__link--primary"
          >
            Live
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="project-card__link"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
