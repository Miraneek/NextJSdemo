import styles from "./edit.module.css"
import Game from "@/components/games/Game";
import {games} from "@/app/games/page";
import Link from "next/link";
export default function ({params}) {

    let game = games.find((game) => game.id == params.id)

    return (
        <main className={styles.main}>
            <Game game={game}/>
            <form className={styles.form}>
                <h1>Edit Game</h1>
                <label>Title:<input type={"text"}/></label>
                <label>Genre:<input type={"text"}/></label>
                <label>Release date:<input type={"text"}/></label>
                <span>Description:<textarea/></span>
                <Link href={params.id} className={styles.link}>Edit</Link>
            </form>
        </main>
    )
}