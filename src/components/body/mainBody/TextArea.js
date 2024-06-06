import classes from "./TextArea.module.css";
import TextAreaHeading from "./TextAreaHeading";
import TextPage from "./TextPage";

function TextArea(props) {
  let fileNames = [
    "home.jsx",
    "about.html",
    "contact.css",
    "project.js",
    // "articles.json",
    // "github.md",
  ];

  return (
    <div className={`${classes.textArea} ${props.className}`}>
      <div className={classes.headings}>
        {fileNames.map((name) => {
          return (
            <TextAreaHeading
              name={name}
              onClick={props.onFileChange}
              page={props.page}
            />
          );
        })}
      </div>

      <TextPage
        className={classes.textPage}
        onClick={props.onFileChange}
        page={props.page}
      />
    </div>
  );
}

export default TextArea;
