import style from "./Keyboard.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import keyboard from "../../assets/dkeybr.png";
import { IoFlame } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
import { useState } from "react";

import PauseResume from "../Buttons/PauseResume/PauseResume";
export default function Keyboard() {
  const wordCount = 200;
  const streak = 10;
  const text = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
    similique, architecto molestiae temporibus culpa iusto officiis ab
    perferendis amet atque perspiciatis rem dolores soluta reprehenderit
    consequatur. Perspiciatis quos optio omnis?
  `;
  const [isFocused, setIsFocused] = useState(false);
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
        <div className={style.teatArea}>
          {!isFocused ? (
            <div className={style.cover} onClick={() => setIsFocused(true)}>
              <p>Click here to START typing</p>
            </div>
          ) : (
            <div className={style.text}>{text}</div>
          )}
        </div>
        <div className={style.keyboard}>
          <LazyLoadImage
            src={keyboard}
            alt="Keyboard Image"
            height={450}
            width={1200}
            className={style.keyboardImage}
          />
        </div>
      </div>
    </main>
  );
}
