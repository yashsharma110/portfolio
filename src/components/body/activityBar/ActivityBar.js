import classes from "./ActivityBar.module.css";
import FilesIcon from "../../icons/FilesIcon";
import GithubIcon from "../../icons/GithubIcon";
import CodeIcon from "../../icons/CodeIcon";
import PencilIcon from "../../icons/PencilIcon";
import MailIcon from "../../icons/MailIcon";
import AcountIcon from "../../icons/AcountIcon";
import SettingIcon from "../../icons/SettingIcon";

function ActivityBar(props) {
  const fileIconHandler = () => {
    props.onFileChange("home.jsx");
  };

  const githubIconHandler = () => {
    props.onFileChange("github.md");
  };

  const codeIconHandler = () => {
    props.onFileChange("project.js");
  };

  const pencilIconHandler = () => {
    props.onFileChange("articles.json");
  };

  const mailIconHandler = () => {
    props.onFileChange("contact.css");
  };

  const acountIconHandler = () => {
    props.onFileChange("about.html");
  };

  return (
    <div className={`${classes.activityBar} ${props.className}`}>
      <div className={classes.up}>
        <div
          onClick={fileIconHandler}
          className={props.page === "home.jsx" ? classes.selected : ""}
        >
          <FilesIcon />
        </div>

        {/* <div
          onClick={githubIconHandler}
          className={props.page === "github.md" ? classes.selected : ""}
        >
          <GithubIcon />
        </div> */}

        <div
          onClick={codeIconHandler}
          className={props.page === "project.js" ? classes.selected : ""}
        >
          <CodeIcon />
        </div>

        {/* <div
          onClick={pencilIconHandler}
          className={props.page === "articles.json" ? classes.selected : ""}
        >
          <PencilIcon />
        </div> */}

        <div
          onClick={mailIconHandler}
          className={props.page === "contact.css" ? classes.selected : ""}
        >
          <MailIcon />
        </div>

        <div
          onClick={acountIconHandler}
          className={props.page === "about.html" ? classes.selected : ""}
        >
          <AcountIcon />
        </div>
      </div>
      <div className={classes.down}>
        <div>
          <SettingIcon />
        </div>
      </div>
    </div>
  );
}

export default ActivityBar;
