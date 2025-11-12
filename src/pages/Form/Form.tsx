import style from "./Form.module.css";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import { useState } from "react";
export default function Form() {
  const [isLogin, setIsLogin] = useState(false);
  const toggleForm = () => setIsLogin(!isLogin);
  return (
    <main className={style.main}>
      <div className={style.container}>
        {isLogin ? (
          <Login switchForm={toggleForm} />
        ) : (
          <Register switchForm={toggleForm} />
        )}
      </div>
    </main>
  );
}
