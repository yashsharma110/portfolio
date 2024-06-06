import classes from "./About.module.css";
import profilePic from "../../../../public/images/profile_pic.png";

function About() {
  return (
    <div className={classes.aboutPage}>
      <img src={profilePic} alt="profile picture" />

      <div className={classes.aboutText}>
        I live and in{" "}
        <span>
          <a href="https://www.google.com/maps/place/Ghaziabad,+Uttar+Pradesh/@28.6831143,77.2905196,11z/data=!4m5!3m4!1s0x390cf1bb41c50fdf:0xe6f06fd26a7798ba!8m2!3d28.6691565!4d77.4537578">
            {" "}
            Ghaziabad, Uttar Pradesh.
          </a>
        </span>
        <br />I freelance when I can, mostly building custom websites that you
        can’t get from a template. My place in the world seems to be at the{" "}
        <span>intersection of creativity and logic</span>. I approach each
        problem as a <span>learning experience</span> that informs the rest of
        the project.
        <br /> <br />
        Who is visiting your site? What are they looking for? How do they find
        it? These are the pointer that I keep in mind while developing my
        Desktop-first responsive websites with <span>HTML, CSS and React</span>.
        <br /> <br />
        <span>
          I am always experimenting, always learning, and never bored.
        </span>
      </div>
    </div>
  );
}

export default About;
