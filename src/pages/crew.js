import { useState } from "react"
import Image from "next/image"
import Head from "next/head"

import data from "../assets/data.json"
import handleLinks from "../helpers/linksAnimation"
import styles from "../styles/crew.module.css"
import { getLocalData } from './api/localdata';
import Link from "next/link"

import moon from "../assets/planets/image-europa.png"


export async function getStaticProps() {
	const localData = await getLocalData()
  
	return {
	  props: { localData }
	}
  }

export default function Crew ( {localData} ) {
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
				<div className={styles.crewInfoContainer}>
				<nav className={styles.crewNav}>
					<ul>
						{localData.crew.map(({ name }) => (
							<li key={name}>
								{/* below is the link for the index page titles */}
								<Link href={`/crew/${name}`}>{name}</Link> 
							</li>
						))}
					</ul>
				</nav>
				<div>
				</div>
                </div>
			</main>
			<div id={styles.bg}></div>
            
		</>
	)
}