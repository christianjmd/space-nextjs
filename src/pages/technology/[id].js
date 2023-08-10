import { getLocalData } from '../api/localdata';
import styles from "../../styles/tech.module.css"
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { t } from '../../assets/data'

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "3"
        },
      }, // See the "paths" section below
    ],
    fallback: false, // false or "blocking"
  }
}
 

export async function getStaticProps(objectData) {
  const localData = await getLocalData(objectData.id)

  return {
    props: { localData, },
  }
}
export default function Tech( {localData} ) {

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
							localData.technology.map((tech, i, webname) => {
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
                        <Link href={`/technology/${id}`}>{name}</Link> 
                      </li>
                    ))}
                  </ul>
                  {
                    localData.technology.map((tech, i) => (
                      <article key={tech.id} className={`${i === 0 ? "" : styles.sliderHidden} ${tech.name + "-card"}`}>
                        <h2 className={styles.techTitle}>{tech.name}</h2>
                        <p className="paragraph">{tech.description}</p>
                      </article>
                    ))
                  }
                </nav>
              </div>
            </div>
          </div>
            
        </main>


        <div id={styles.bg}></div>
        </>
    )
}

// export async function getStaticPaths( {localData} ) {
//   const paths = localData.technology.map(tech =>
//     ({params: {id: tech.id},
//     }))
//     return {paths, fallback: false}
// }

