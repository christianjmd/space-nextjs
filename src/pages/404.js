import Layout from "../components/Layout"
import styles from "../styles/404.module.css"

export default function Custom404() {
    return (
        <>
        <main className={styles.main}>
				<div>
					<h1 className={styles.title}>Page under construction
					<br />
					<span>Return Home</span>
					</h1>
				</div>
		</main>
        <div id={styles.bg}></div>
        </>
        )
  }