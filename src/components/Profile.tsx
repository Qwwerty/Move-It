import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';

import { challengeContext } from '../context/ChallengesContext';

export function Profile () {
  const { level } = useContext(challengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/qwwerty.png" alt="Rhalf Oliveira"/>
      <div>
        <strong>Rhalf Oliveira</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}