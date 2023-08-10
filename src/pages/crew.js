import { useState } from "react"
import Image from "next/image"
import Head from "next/head"

import data from "../assets/data.json"
import handleLinks from "../helpers/linksAnimation"
import styles from "../styles/crew.module.css"

import moon from "../assets/planets/image-europa.png"

export default function Crew() {
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
				<h1 className="title"><span>02</span>MEET YOUR CREW</h1>
				{/* <div className={styles.crewInfoContainer}> */}
                {
					data.crew.map((crew, i) => (
						<article key={crew.name} className={`${i === 0 ? "" : styles.sliderHidden} ${crew.name + "-card"}`}>
						<h3 className={styles.planetTitle}>{crew.role}</h3>
                        <h2 className={styles.planetTitle}>{crew.name}</h2>
						<p className="paragraph">{crew.bio}</p>
				        </article>
				        ))
				}
                {/* </div> */}
			</main>
			<div id={styles.bg}></div>
            
		</>
	)
}


{/* <nav className={styles.planetsNav}>
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
</nav> */}