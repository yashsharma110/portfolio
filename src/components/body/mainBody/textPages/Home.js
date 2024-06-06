import classes from "./Home.module.css";

function Home(props) {
  const projectClickHandler = () => {
    props.onClick("project.js");
  };

  const contactClickHandler = () => {
    props.onClick("contact.css");
  };

  return (
    <div className={classes.homePage}>
      <div className={classes.background}>I BUILD WEBSITE</div>

      <div className={classes.foreground}>
        <div className={classes.intro}>
          <div>Yash Sharma</div>

          <div className={classes.typewriter}>
            <h1>Frontend Web Developer</h1>
          </div>

          <div className={classes.buttons}>
            <button onClick={projectClickHandler}>View Work</button>
            <button onClick={contactClickHandler}>Contact Me</button>
          </div>
        </div>

        {/* <div className={classes.design}>Design</div> */}
      </div>
    </div>
  );
}

export default Home;
