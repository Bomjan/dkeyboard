import style from "./Keyboard.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import keyboard from "../../assets/dkeybr.png";
import { IoFlame } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";

import PauseResume from "../Buttons/PauseResume/PauseResume";
export default function Keyboard() {
  const wordCount = 200;
  const streak = 10;
  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.metrics}>
          <div className={style.item}>
            Daily Streaks {streak} <IoFlame className={style.fire} />{" "}
          </div>
          <div className={style.item}>Word Count {wordCount}</div>
          <div className={style.item}>
            <PauseResume />
          </div>
          <div className={style.item}>
            <VscDebugRestart className={style.restart} />
          </div>
        </div>
        <div className={style.keyboard}>
          <LazyLoadImage
            src={keyboard}
            alt="Keyboard Image"
            height={450}
            width={1200}
          />
        </div>
      </div>
    </main>
  );
}
