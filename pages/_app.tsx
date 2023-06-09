// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import "../styles/globals.css";
import "nextra-theme-docs/style.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;