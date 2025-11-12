import style from "./Profile.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { GiPodiumWinner } from "react-icons/gi";
import { FaFire } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { PiTargetBold } from "react-icons/pi";

import { GrAchievement } from "react-icons/gr";
import { GiAchievement } from "react-icons/gi";
import { GiChampions } from "react-icons/gi";
import { GiSpeedBoat } from "react-icons/gi";

export default function Profile() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <LazyLoadImage
            src="https://wallpapers.com/images/hd/funny-discord-profile-pictures-s8o7xbismdh2xco9.jpg"
            alt="Profile Picture"
            height={200}
            className={style.profileImage}
          />
        </div>
        <div className={style.hr}> </div>
        <div className={style.statistics}>
          <div className={style.item}>
            <GiPodiumWinner className={style.i} />
            <p className={style.itemName}>Gold</p>
          </div>
          <div className={style.item}>
            <FaFire className={style.i} />
            <p className={style.itemName}>501</p>
          </div>
          <div className={style.item}>
            <IoSpeedometerOutline className={style.i} />
            <p className={style.itemName}>85 wpm</p>
          </div>
          <div className={style.item}>
            <PiTargetBold className={style.i} />
            <p className={style.itemName}>98%</p>
          </div>
        </div>
        <div className={style.info}>
          <h1>Sundra Bomjan</h1>
          <div className={style.achievements}>
            <GrAchievement className={style.ac} />
            <div className={style.separator}></div>
            <GiAchievement className={style.ac} />
            <GiChampions className={style.ac} />
            <GiSpeedBoat className={style.ac} />
          </div>
          <p className={style.joined}>Joined on 23-Jan-2025</p>
        </div>
      </div>
    </main>
  );
}
