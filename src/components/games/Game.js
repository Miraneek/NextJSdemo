import styles from "./game.module.css";
export default function Game({game}) {
    return (
        <div className={styles.container}>
            <h1>{game.title}</h1>
            <span>{game.genre}</span>
            <p>{game.description}</p>
            <p>{game.date}</p>
        </div>
    );
}