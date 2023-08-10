import '../styles/global.css';
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

// import { AppProps } from 'next/app';

// function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default App;