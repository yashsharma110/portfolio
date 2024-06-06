import classes from "./ProjectCard.module.css";

function ProjectCard(props) {
  return (
    <div className={classes.projectCard}>
      <div className={classes.imageDiv}>
        <img src={props.project.image} alt="project image" />
      </div>

      <div className={classes.contentDiv}>
        <div className={classes.aboutProject}>
          <h3>{props.project.title}</h3>
          <p>{props.project.description}</p>

          <div className={classes.tags}>
            {props.project.tags.map((tag) => {
              return <div>{tag}</div>;
            })}
          </div>
        </div>

        <div className={classes.links}>
          <a href={props.project.links.source}>Source Code</a>
          <a href={props.project.links.live}>Live Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
