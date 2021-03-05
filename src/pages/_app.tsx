import "../styles/global.css";
import Link from "next/link";

import { AuthProvider } from "../context/AuthContext";

import styles from "../styles/pages/Global.module.css";

import { FiHome, FiAward } from "react-icons/fi";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>

  );
}

export default MyApp;
