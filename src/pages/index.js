import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/index.module.css'
import Layout from '../components/Layout'

export default function Home() {

	return (
			<>
			<Layout>
			<Head>
				<title>Space Website | Home</title>
			</Head>
			<main className={styles.main}>
				<div>
					<h1 className={styles.title}>So, you want to travel to 
					<br />
					<span>Space</span>
					</h1>
					<p className='paragraph'>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<Link legacyBehavior href="/destination"><a className={styles.exploreBtn}>Explore</a></Link>
			</main>
			<div id={styles.bg}></div>
			</Layout>
			</>
		
	)
}