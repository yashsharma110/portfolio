import classes from "./Footer.module.css";
import GitCompareIcon from "../icons/GitComapareIcon";
import WarningIcon from "../icons/WarningIcon";
import ErrorIcon from "../icons/ErrorIcon";
import CodeIcon from "../icons/CodeIcon";
import CheckIcon from "../icons/CheckIcon";
import BellIcon from "../icons/BellIcon";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <div>
          <a href="https://github.com/Utkarsh-190/portfolio" target="_blank">
            <GitCompareIcon />
            <span>main</span>
          </a>
        </div>
        <div>
          <ErrorIcon />
          <span>0</span>
        </div>
        <div>
          <WarningIcon />
          <span>0</span>
        </div>
      </div>

      <div className={classes.right}>
        <div>
          <CodeIcon />
          <span>Powered by React.js</span>
        </div>
        <div>
          <CheckIcon />
          <span>Prettier</span>
        </div>
        <div>
          <BellIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
