import style from "./Login.module.css";
// import LoginBtn from "../Buttons/Login/LoginBtn";
export default function LoginForm() {
  return (
    <div className={style.container}>
      <form action="" method="post">
        <div className={style.field}>
          <input
            type="text"
            placeholder=""
            id="contact"
            className={style.input}
          />
          <label htmlFor="contact" className={style.label}>
            Phone Number
          </label>
        </div>
        <div className={style.field}>
          <input
            type="text"
            placeholder=""
            id="password"
            className={style.input}
          />
          <label htmlFor="password" className={style.label}>
            Enter Password
          </label>
        </div>
      </form>
    </div>
  );
}
