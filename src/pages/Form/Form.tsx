import style from "./Form.module.css";
import Login from "../../components/Login/Login";
export default function Form() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <Login />
      </div>
    </main>
  );
}
