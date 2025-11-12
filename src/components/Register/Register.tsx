import { useState } from "react";
import style from "./Register.module.css";
import RegisterBtn from "../Buttons/Register/Register";

interface registerFormProps {
  switchForm: () => void;
}
export default function RegisterForm({ switchForm }: registerFormProps) {
  const [contact, setContact] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ contact, password1, password2 });

    if (password1 !== password2) {
      alert("Passwords do not match!");
      return;
    }

    // proceed with form submission logic
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Register</h2>
      <form onSubmit={handleRegister}>
        <div className={style.field}>
          <input
            type="text"
            placeholder=""
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className={style.input}
          />
          <label htmlFor="contact" className={style.label}>
            Phone Number
          </label>
        </div>
        <div className={style.field}>
          <input
            type="password"
            placeholder=""
            id="password1"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            className={style.input}
          />
          <label htmlFor="password1" className={style.label}>
            Enter Password
          </label>
        </div>
        <div className={style.field}>
          <input
            type="password"
            placeholder=""
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            className={style.input}
          />
          <label htmlFor="password2" className={style.label}>
            Confirm Password
          </label>
        </div>
        <p className={style.loginInstead}>
          Haven't signed up yet?{" "}
          <span className={style.login} onClick={switchForm}>
            Register Now
          </span>
        </p>
        <RegisterBtn />
      </form>
    </div>
  );
}
