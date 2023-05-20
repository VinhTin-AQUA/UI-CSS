import styles from "./ModernCSSButtonHover.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ModernCSSButtonHover() {
  return (
    <div className={cx("body")}>
      <a href="#" style={{ "--clr": "#1e9bff" }}>
        <span>Button</span>
        <i></i>
      </a>

      <a href="#" style={{ "--clr": "#ff1867" }}>
        <span>Button</span>
        <i></i>
      </a>

      <a href="#" style={{ "--clr": "#6eff3e" }}>
        <span>Button</span>
        <i></i>
      </a>

      <a
        href="https://www.youtube.com/watch?v=cA_R5gQXI6Y"
        style={{ "--clr": "#36ab5d" }}
      >
        <span style={{color: "red"}}>Youtube</span>
        <i></i>
      </a>
    </div>
  );
}

export default ModernCSSButtonHover;
