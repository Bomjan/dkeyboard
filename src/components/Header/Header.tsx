import style from "./Header.module.css";
import { RiCoinsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={style.header}>
      <Link to={"/"} className={style.logoName}>
        DZONGKHA TYPING
      </Link>
      <div className={style.coinContainer}>
        <RiCoinsFill className={style.coin} />
        <span className={style.coinCount}>2005</span>
      </div>
      <nav className={style.nav}>
        <Link to={"/about-us"} className={style.link}>
          About Us
        </Link>
        <Link to={"/profile"} className={style.link}>
          Profile
        </Link>
        <Link to={"/form"} className={style.link}>
          Login / Sign Up
        </Link>
      </nav>
    </header>
  );
}
