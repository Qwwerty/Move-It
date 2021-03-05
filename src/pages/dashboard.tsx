import Link from 'next/link'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExpirienceBar";
import { Profile } from "../components/Profile";

import Head from "next/head";
import { GetServerSideProps } from "next";

import styles from "../styles/pages/Home.module.css";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../context/CountdownContext";
import React from "react";
import { ChallengesProvider } from "../context/ChallengesContext";

import NavBar from '../components/NavBar';

interface HomeProps {
  level: number;
  currentExperience: number; 
  challengescompleted: number;
  user: object;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengescompleted={props.challengescompleted}
    >
      <NavBar />

      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile user={props.user} />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengescompleted, user } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengescompleted: Number(challengescompleted),
      user: JSON.parse(user),
    },
  };
};
