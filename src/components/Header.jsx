import Link from "next/link"
import Image from "next/image"
import logoIMG from "../assets/shared/logo.svg"
import styles from "../styles/Header.module.css"

export default function Header() {

	return (
        <>
		<header className={styles.header}>
			<Image src={logoIMG} alt="Logo" className={styles.logo} />
			<div className={styles.navContainer}>
				<nav>
					<ul>
						<li>
                            <Link legacyBehavior href="/"><a><span>00</span> HOME</a></Link>
						</li>
						<li>
                            <Link legacyBehavior href="/destination"><a><span>01</span> DESTINATION</a></Link>
						</li>
						<li>
                            <Link legacyBehavior href="/crew"><a><span>02</span> CREW</a></Link>
						</li>
						<li>
                            <Link legacyBehavior href="/technology"><a><span>03</span> TECHNOLOGY</a></Link>
						</li>
					</ul>
				</nav>
			</div>
		</header >
        </>
	)
}