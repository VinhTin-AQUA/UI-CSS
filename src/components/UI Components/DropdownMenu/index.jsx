// Dropdown Menu using CSS and JavaScript

import styles from "./DropdownMenu.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function DropdownMenu() {
  const [active, setActive] = useState(false);

  useEffect(() => {}, [active]);

  const handleShowProfile = () => {
    setActive(!active);
  };

  return (
    <div className={cx("body")}>
      <nav className={cx("nav")}>
        <div className={cx("menuToggle")}></div>

        <div className={cx("profile")}>
          <h3 className={cx("h3")}>
            Alina Smith <br />
            <span className={cx("span")}>designer</span>
          </h3>
          <div onClick={handleShowProfile} className={cx("imgBx")}>
            <img
              className={cx("img")}
              src="https://th.bing.com/th/id/R.3c6b72cb346c8e529ec16239adb71701?rik=YQgyLdY13A4z%2fg&riu=http%3a%2f%2fis3.mzstatic.com%2fimage%2fthumb%2fPurple127%2fv4%2ff5%2fca%2ffd%2ff5cafd96-f3a4-8ec1-37b0-2e82f8bdea77%2fsource%2f512x512bb.jpg&ehk=5GnK%2fZN7yzdJN8r4nd130257bM7L%2bwxPUD9lP7cD3OI%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
          </div>
        </div>

        <div
          id="menu"
          className={cx("menu", {
            active,
          })}
        >
          <ul className={cx("ul")}>
            <li className={cx("li")}>
              <a className={cx("a")} href="#">
                <i className="fa-duotone fa-user-bounty-hunter"></i>Profile
              </a>
            </li>
            <li className={cx("li")}>
              <a className={cx("a")} href="#">
                <i className="fa-regular fa-comment"></i>Inbox
              </a>
            </li>
            <li className={cx("li")}>
              <a className={cx("a")} href="#">
                <i className="fa-regular fa-gear"></i>Setting
              </a>
            </li>
            <li className={cx("li")}>
              <a className={cx("a")} href="#">
                <i className="fa-solid fa-question"></i>Help
              </a>
            </li>
            <li className={cx("li")}>
              <a className={cx("a")} href="#">
                <i className="fa-solid fa-right-from-bracket"></i>Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default DropdownMenu;
