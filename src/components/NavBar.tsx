import "../styles/pages/Global.module.css";
import Link from "next/link";

import { AuthProvider } from "../context/AuthContext";

import styles from "../styles/pages/Global.module.css";

import { FiHome, FiAward, FiPower } from "react-icons/fi";
import { useEffect, useState } from "react";

function NavBar() {
  const [isDashboard, setIsDashbord] = useState(true);
  const [isLeardboard, setIsLeardboard] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("MoveIt:isDashboard")) {
      setIsDashbord(
        localStorage.getItem("MoveIt:isDashboard") === "true" ? true : false
      );
    }

    if (localStorage.getItem("MoveIt:isLeardboard")) {
      setIsLeardboard(
        localStorage.getItem("MoveIt:isLeardboard") === "true" ? true : false
      );
    }
  }, []);

  function handleActiveDashboard() {
    setIsDashbord(true);
    setIsLeardboard(false);

    localStorage.setItem("MoveIt:isDashboard", String(true));
    localStorage.setItem("MoveIt:isLeardboard", String(false));

    window.location.href = "/dashboard";
  }

  function handleActiveLeardboard() {
    setIsLeardboard(true);
    setIsDashbord(false);

    localStorage.setItem("MoveIt:isDashboard", String(false));
    localStorage.setItem("MoveIt:isLeardboard", String(true));

    window.location.href = "/leardboard";
  }

  function handlePower () {
    window.location.href = "/"
  }

  return (
    <AuthProvider>
      <div className={styles.navbar}>
        <img className={styles.imageLogoTop} src="/LogoNav.png" alt="LogoNav" />
        <div className={styles.actionIcones}>
          <div style={{ border: !isDashboard && 0 }}>
            <button onClick={handleActiveDashboard}>
              <FiHome size={30} />
            </button>
          </div>
          <div style={{ border: !isLeardboard && 0 }}>
            <button onClick={handleActiveLeardboard}>
              <FiAward size={30} />
            </button>
          </div>
        </div>

      </div>
        <div className={styles.power}>
          <button onClick={handlePower}>
            <FiPower size={30} />
          </button>
        </div>
    </AuthProvider>
  );
}

export default NavBar;
