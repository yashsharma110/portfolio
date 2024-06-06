import { useState, useEffect } from "react";
import classes from "./Body.module.css";
import ActivityBar from "./activityBar/ActivityBar";
import FileExplorer from "./fileExplorer/FileExplorer";
import TextArea from "./mainBody/TextArea";

function Body() {
  let [page, setPage] = useState("home.jsx");

  useEffect(() => {
    let curPage = sessionStorage.getItem("page");
    if (curPage) {
      setPage(curPage);
    }
  }, []);

  let fileChangeHandler = (event) => {
    console.log(event);
    sessionStorage.setItem("page", event);
    setPage(event);
  };

  return (
    <div className={classes.body}>
      <ActivityBar
        className={classes.activityBar}
        onFileChange={fileChangeHandler}
        page={page}
      />
      <FileExplorer
        className={classes.fileExplorer}
        onFileChange={fileChangeHandler}
        page={page}
      />
      <TextArea
        className={classes.textArea}
        onFileChange={fileChangeHandler}
        page={page}
      />
    </div>
  );
}

export default Body;
