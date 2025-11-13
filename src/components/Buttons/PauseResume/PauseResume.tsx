import style from "./PauseResume.module.css";
import { MdOutlineMotionPhotosPaused } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import { useState } from "react";

export default function PauseResume() {
  const [isPaused, setIsPaused] = useState(false);
  const toggle = () => setIsPaused(!isPaused);
  // const [time, setTime] = useState(0);
  const time = 200;

  // TODO implement timers and user interactions

  return isPaused ? (
    <div className={style.pause} onClick={toggle}>
      <MdOutlineMotionPhotosPaused className={style.icon} /> {time}
    </div>
  ) : (
    <div className={style.resumed} onClick={toggle}>
      <FaRegPlayCircle className={style.icon} /> {time}
    </div>
  );
}
