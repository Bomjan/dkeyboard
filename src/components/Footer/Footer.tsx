import style from "./Footer.module.css";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import SubmitBtn from "../Buttons/Submit/Submit";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { PiInstagramLogoDuotone } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.cols}>
        <h3 className={style.title}>Contact Us</h3>
        <ul className={style.ul}>
          <li className={style.list}>
            {/* <i className="fa-solid fa-house"></i> */}
            <FaHouseChimneyUser />
            <p className={style.listp}>
              <strong className={style.listp}>Address:</strong> Thimphu, Bhutan
            </p>
          </li>
          <li className={style.list}>
            <FaEnvelope />
            {/* <i className="fa-solid fa-envelope"></i> */}
            <p className={style.listp}>
              <strong className={style.listp}>Email:</strong> dtyping@gmail.com
            </p>
          </li>
          <li className={style.list}>
            {/* <i className="fa-solid fa-phone"></i> */}
            <FaPhone />
            <p className={style.listp}>
              <strong className={style.listp}>Phone:</strong> +975-17890458
            </p>
          </li>
        </ul>
      </div>
      <div className={style.cols}>
        <h3 className={style.title}>Suggestion Box</h3>
        <textarea
          className={style.textarea}
          rows={4}
          id="suggestion"
        ></textarea>
        <SubmitBtn />
      </div>

      <div className={style.cols}>
        <h3 className={style.title}>Follow us on</h3>
        <ul className={style.ul}>
          <li className={style.list}>
            <RiFacebookCircleLine className={style.i} />
            <a href="https://facebook.com" className={style.a}>
              Facebook
            </a>
          </li>
          <li className={style.list}>
            <TiSocialTwitterCircular className={style.i} />
            <a href="https://twitter.com" className={style.a}>
              Twitter
            </a>
          </li>
          <li className={style.list}>
            <PiInstagramLogoDuotone className={style.i} />
            <a href="https://instagram.com" className={style.a}>
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <p className={style.copyRight}>
        {" "}
        &copy; 2025 Dzongkha Typing. All rights reserved.
      </p>
    </footer>
  );
}
