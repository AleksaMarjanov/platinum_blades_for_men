import Script from 'next/script'
import { ThemeProvider } from 'next-themes';

import SEO from "@bradgarropy/next-seo"
import "../styles/globals.css";
import { Navbar, Footer} from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
    <div>
      <Navbar className='dark:bg-black bg-white min-h-screen'/>
        <div className="pt-65">
        <SEO title="Platinum Blades For Men" description="Get the best haircut in Williston" />
          <Component {...pageProps} />
        </div>
      <Footer />
      <Script src="https://kit.fontawesome.com/d45b25ceeb.js" crossorigin="anonymous" />
    </div>
    </ThemeProvider>
  );
}

export default MyApp;
