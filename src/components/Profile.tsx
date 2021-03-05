import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';

import { challengeContext } from '../context/ChallengesContext';

import { authContext, UserProps } from '../context/AuthContext';

interface ProfileProps {
  user: object;
}

export function Profile ({ user }: ProfileProps) {
  const { level } = useContext(challengeContext);

  const profile = user as UserProps;

  return (
    <div className={styles.profileContainer}>
      <img src={`${profile.photoURL}`} alt={`${profile.displayName}`}/>
      <div>
        <strong>{profile.displayName}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}