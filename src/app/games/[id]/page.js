import {games} from "@/app/games/page";
import Game from "@/components/games/Game";
import styles from "./id.module.css";
import Link from "next/link";
export default function ({params}) {


    let game = games.find((game) => game.id == params.id)

    return (
        <main className={styles.main}>
            <Game game={game}/>
            <div className={styles.flex}>
                <Link href={`/games/${game.id}/edit`} className={styles.edit}>Edit</Link>
                <Link href={"/games"} className={styles.back}>Back</Link>
            </div>

        </main>
    )
}