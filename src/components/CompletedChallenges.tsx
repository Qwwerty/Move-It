import { useContext } from 'react';
import { challengeContext } from '../context/ChallengesContext';

import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges () {
  const { challengescompleted } = useContext(challengeContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengescompleted}</span>
    </div>
  );
}