import classes from "./TextPage.module.css";
import Home from "./textPages/Home";
import About from "./textPages/About";
import Contact from "./textPages/Contact";
import Project from "./textPages/project_views/Project";
import Articles from "./textPages/Articles";
import Github from "./textPages/Github";

function TextPage(props) {
  let textPage;

  if (props.page === "home.jsx") {
    textPage = <Home onClick={props.onClick} />;
  } else if (props.page === "about.html") {
    textPage = <About />;
  } else if (props.page === "contact.css") {
    textPage = <Contact />;
  } else if (props.page === "project.js") {
    textPage = <Project />;
  } else if (props.page === "articles.json") {
    textPage = <Articles />;
  } else if (props.page === "github.md") {
    textPage = <Github />;
  }

  return (
    <div className={`${classes.textPage} ${props.className}`}>{textPage}</div>
  );
}

export default TextPage;
