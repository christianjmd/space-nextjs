import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import logoIMG from "../assets/shared/logo.svg"
import styles from "../styles/Header.module.css"

export default function Header() {
	let route = useRouter()

	return (
        <>
		<header className={styles.header}>
			<Image src={logoIMG} alt="Logo" className={styles.logo} />
			<div className={styles.navContainer}>
				<nav className={styles.navContainer}>
					<ul>
						<li className={route.pathname === "/" ? styles.currentLink : ""}>
                            <Link legacyBehavior href="/"><a><span>00</span> HOME</a></Link>
						</li>
						<li className={route.pathname === "/destination" ? styles.currentLink : ""}>
                            <Link legacyBehavior href="/destination"><a><span>01</span> DESTINATION</a></Link>
						</li>
						<li className={route.pathname === "/crew" ? styles.currentLink : ""}>
                            <Link legacyBehavior href="/crew"><a><span>02</span> CREW</a></Link>
						</li>
						<li className={route.pathname === "/technology" ? styles.currentLink : ""}>
                            <Link legacyBehavior href="/technology"><a><span>03</span> TECHNOLOGY</a></Link>
						</li>
					</ul>
				</nav>
			</div>
		</header >
        </>
	)
}