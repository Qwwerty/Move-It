import { useState, useContext } from "react";
import styles from "../styles/pages/SignIn.module.css";

import { authContext } from '../context/AuthContext';

import NavBar from '../components/NavBar';

export default function Home() {
  const [username, setUsername] = useState("");
  const { signIn } = useContext(authContext);

  return (
    <div className={styles.containerSignIn}>
      <div className={styles.simboloLeft}>
        <img src="/Simbolo.png" alt="Simbolo" />
      </div>

      <div className={styles.sign}>
        <img src="/Logo.png" alt="logo" className={styles.imgMoveIt} />

        <p>Bem-vindo</p>

        <div className={styles.github}>
          <img src="/Github.png" alt="GitHub" />
          <p>Faça login com seu Github para começar</p>
        </div>

        <div className={styles.actionSign}>
          <input type="text" placeholder="Digite seu username" onChange={(e) => setUsername(e.target.value)}/>
          { !!!username ? (
            <button className={styles.buttonDisabled} disabled>
              <img src="/Vector.png" alt="Vector" />
            </button>
          ) : (
            <button className={styles.login} onClick={signIn}>
              <img src="/Vector.png" alt="Vector" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
