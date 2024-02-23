import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my game list!
        </h1>
        <p className={styles.description}>
          This is a list of my favorite games.
        </p>
      <Link href={"/games"}>Games</Link>
    </main>
  );
}
