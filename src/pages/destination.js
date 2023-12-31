import { useState } from "react"
import Image from "next/image"
import Head from "next/head"
import data from "../assets/data.json"
import handleLinks from "../helpers/linksAnimation"
import styles from "../styles/destination.module.css"

export default function Destination() {
	const [linkActive, setLinkActive] = useState(data.planets[0].name);

	function handleNav(e) {
		handleLinks(e, styles);
		setLinkActive(e.target.value)
	}

	return (
		<>
			<Head>
				<title>Space Website | Destination</title>
			</Head>
			<main className={`mainPage ${styles.mainPage}`}>
				<h1 className="title"><span>01</span> Pick your destination</h1>
				<div className={styles.planetsMain}>
					<div className={styles.planetsImages}>
						{
							data.planets.map((planet, i) => {
								return (
									<Image
										src={`/image-${planet.name}.webp`}
										width={1000}
										height={1000}
										unoptimized
										alt={`${planet.name} photography`}
										className={`${styles.planetsImg} ${planet.name}-img  ${i === 0 ? "" : styles.imgHidden}`}
										key={planet.distance}
									/>
								)

							})
						}
					</div>
					<div className={styles.planetInfoContainer}>
						<div className={styles.planetsInfo}>
							<nav className={styles.planetsNav}>
								<ul>
									{
										data.planets.map((planet) => {
											return (
												<li key={planet.distance} className={linkActive === planet.name ? styles.linkNavActive : ""}>
													<button onClick={handleNav} value={planet.name}>{planet.name}</button>
												</li>
											)
										})
									}
								</ul>
							</nav>
							{
								data.planets.map((planet, i) => (
									<article key={planet.distance} className={`${i === 0 ? "" : styles.sliderHidden} ${planet.name + "-card"}`}>
										<h2 className={styles.planetTitle}>{planet.name}</h2>
										<p className="paragraph">{planet.description}</p>
										<div className={styles.planetData}>
											<p>Avg. Distance <br /><span>{planet.distance}</span></p>
											<p>Est. Travel time <br /><span>{planet.travel}</span></p>
										</div>
									</article>
								))
							}
						</div>
					</div>
				z`</div>
			</main>
			<div id={styles.bg}></div>
		</>
	)
}