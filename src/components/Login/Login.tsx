import { useState } from "react";
import style from "./Login.module.css";
import LoginBtn from "../Buttons/Login/LoginBtn";

interface loginFormProps {
  switchForm: () => void;
}
export default function LoginForm({ switchForm }: loginFormProps) {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ contact, password });
  };
  return (
    <div className={style.container}>
      <h2 className={style.title}>Login</h2>
      <form action="" method="post" onSubmit={handleLogin}>
        <div className={style.field}>
          <input
            type="text"
            placeholder=""
            id="contact"
            onChange={(e) => setContact(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className={style.label}>
            Enter Password
          </label>
        </div>
        <p className={style.registerInstead}>
          Haven't signed up yet?{" "}
          <span className={style.register} onClick={switchForm}>
            Register Now
          </span>
        </p>
        <LoginBtn />
      </form>
    </div>
  );
}
