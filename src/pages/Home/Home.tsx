import style from "./Home.module.css";
import { useState } from "react";

import { IoArrowBackCircleSharp } from "react-icons/io5";

import Keyboard from "../../components/Keyboard/Keyboard";
import Welcome from "../../components/Welcome/Welcome";
export default function Home() {
  const [isTyping, setTyping] = useState(false);
  const toggle = () => setTyping(!isTyping);
  return (
    <main className={style.main}>
      {isTyping ? (
        <div className={style.holder}>
          <Welcome />
          <button onClick={() => toggle()} className={style.getStarted}>
            Get Started
          </button>
        </div>
      ) : (
        <div>
          <Keyboard />
          <IoArrowBackCircleSharp
            className={style.goBack}
            onClick={() => toggle()}
          />
        </div>
      )}
    </main>
  );
}
