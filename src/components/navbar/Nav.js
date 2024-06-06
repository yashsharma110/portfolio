import classes from "./Nav.module.css";
import logo from "../../public/images/vscode_icon.svg";

function Nav(props) {
  return (
    <>
      <div className={classes.nav}>
        <div className={classes["logo-and-toolbar"]}>
          <img
            className={classes["vs-code-icon"]}
            src={logo}
            alt="vscode logo"
          />
          <span>File</span>
          <span>Edit</span>
          {/* <span>Selection</span> */}
          <span>View</span>
          <span>Go</span>
          <span>Run</span>
          <span>Terminal</span>
          <span>Help</span>
        </div>

        <div className={classes["header-text"]}>
          Yash Sharma - Visual Studio Code
        </div>

        <div className={classes["control-buttons"]}>
          <a className={classes["yellow-button"]} href="#"></a>
          <a className={classes["green-button"]} href="#"></a>
          <a className={classes["red-button"]} href="#"></a>
        </div>
      </div>
    </>
  );
}

export default Nav;
