import React from "react";
import Link from "next/link";
import styles from "/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav>
        <Link href="/roadmap" active>
          <a className={styles.link}>Raodmap</a>
        </Link>
        <Link href="#">
          <a className={styles.link}>About</a>
        </Link>
        <Link href="https://www.seaofthieves.com/">
          <a className={styles.link} target="_blank">
            Offical SoT
          </a>
        </Link>
      </nav>
    </div>
  );
}
