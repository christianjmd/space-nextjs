import { getLocalData } from './api/localdata';
import styles from "../styles/tech.module.css"
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
// import handleLinks from "../helpers/linksAnimation"


export async function getStaticProps() {
  const localData = await getLocalData()

  return {
    props: { localData }
  }
}

export default function Tech( {localData} ) {

    const [linkActive, setLinkActive] = useState(localData.technology[0].name);

    return (
        <>
        <Head>
				<title>Space Website | Technology</title>
			  </Head>

        <main className={`mainPage ${styles.mainPage}`}>
          <h1 className="title"><span>03</span>Space launch 101</h1>
          <div className={styles.techMain}>
            <div className={styles.techImages}>
            {
							localData.technology.map((tech, i) => {
								return (
									<Image
										src={`/image-${tech.webname}-portrait.jpg`}
										width={1000}
										height={1000}
										unoptimized
										alt={`${tech.name} photography`}
										className={`${styles.techImg} ${tech.name}-img  ${i === 0 ? "" : styles.imgHidden}`}
										key={tech.id}
									/>
								)
							})
						}
            </div>
            <div className={styles.techInfoContainer}>
              <div className={styles.techInfo}>
                <nav className={styles.techNav}>
                  <ul>
                  {localData.technology.map(({ id, name, webname }) => (
                      <li key={id}>
                        {/* below is the link for the index page titles */}
                      <Link href={`/technology/${id}`}>{name}</Link> 
                    </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
            
        </main>


        <div id={styles.bg}></div>
        </>
    )
}
