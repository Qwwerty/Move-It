import styles from "../styles/components/NavBar.module.css";
import NavBar from "../components/NavBar";

export default function Leardboard() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div style={{ width: 1000 }}>
          <h2>Leaderboard</h2>

          <div className={styles.cabecalho}>
            <div className={styles.div1}>
              <span>POSIÇÃO</span>
            </div>
            <div className={styles.div2}>
              <span>USUÁRIO</span>
            </div>
            <div className={styles.div3}>
              <span>DESAFIOS</span>
            </div>
            <div className={styles.div4}>
              <span>EXPERIÊNCIA</span>
            </div>
          </div>

          <div className={styles.registros}>
            <div>1</div>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/22650940?s=460&u=01bb5981783d0a78223296daf25883b6376773d5&v=4"
                alt=""
              />
              <div className={styles.names}>
                <p>Rhalf Oliveira</p>
                <div style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
                  <img
                    src="icons/level.svg"
                    alt="Level"
                    style={{ marginRight: "0.5rem" }}
                  />
                  2 Level
                </div>
              </div>
              <div className={styles.xp}>
                <span style={{ color: '#5966e0' }}>44</span>
                <span style={{ marginLeft: '-80px' }}>Completados</span>
                <span style={{ color: '#5966e0' }}>3540</span>
                <span style={{ marginLeft: '-80px' }}>xp</span>
              </div>
            </div>
          </div>
          <div className={styles.registros}>
            <div>2</div>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/4248081?s=460&u=98a643ad7f90c7950d9311e4b5a762fe77af8ada&v=4"
                alt=""
              />
              <div className={styles.names}>
                <p>Filipe Deschamps</p>
                <div style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
                  <img
                    src="icons/level.svg"
                    alt="Level"
                    style={{ marginRight: "0.5rem" }}
                  />
                  33 Level
                </div>
              </div>
              <div className={styles.xp}>
                <span style={{ color: '#5966e0' }}>220</span>
                <span style={{ marginLeft: '-80px' }}>Completados</span>
                <span style={{ color: '#5966e0' }}>15000</span>
                <span style={{ marginLeft: '-80px' }}>xp</span>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}
