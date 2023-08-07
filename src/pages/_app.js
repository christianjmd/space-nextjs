// import '../styles/globals.css';
// // import "../styles/modern-normalize.css"

// export default function App({ Component, pageProps }) {
//     return 
// 			<Component {...pageProps} />		
	
//   }

import '../styles/globals.css';
import "../styles/modern-normalize.css"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp