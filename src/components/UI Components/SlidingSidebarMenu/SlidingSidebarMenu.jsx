import styles from "./SlidingSidebarMenu.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SlidingSidebarMenu() {
  return (
    <div className={cx("body")}>
      <div className={cx("sidebar")}>
        <ul>
          <li className={cx("logo")}>
            <a href="#">
              <span className={cx("icon")}>
                <i
                  className="fa-brands fa-apple"
                  style={{ color: "#c60606" }}
                ></i>
              </span>
              <span className={cx("text")}>Website Logo</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className={cx("icon")}>
                <i className="fa-solid fa-house"></i>
              </span>
              <span className={cx("text")}>Home</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className={cx("icon")}>
                <i className="fa-solid fa-user"></i>
              </span>
              <span className={cx("text")}>Profile</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className={cx("icon")}>
                <i className="fa-regular fa-comment"></i>
              </span>
              <span className={cx("text")}>Inbox</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className={cx("icon")}>
                <i className="fa-solid fa-chart-simple"></i>
              </span>
              <span className={cx("text")}>Analytics</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className={cx("icon")}>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span className={cx("text")}>Order</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className={cx("icon")}>
                <i className="fa-solid fa-gear"></i>
              </span>
              <span className={cx("text")}>Setting</span>
            </a>
          </li>

          <div className={cx("bottom")}>
            <li style={{ display: "inline" }}>
              Credit:{" "}
              <a href="https://www.youtube.com/watch?v=OWXAXZbU63o">Youtube</a>
            </li>
            <li>
              <a href="#">
                <span className={cx("icon")}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                </span>
                <span className={cx("text")}>Logout</span>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SlidingSidebarMenu;
