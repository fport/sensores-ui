import "../styles/globals.css";
import { SensoresProvider } from '@cx';


function MyApp({ Component, pageProps }) {
  return (
    <SensoresProvider>
      <Component {...pageProps} />
    </SensoresProvider>
  );
}

export default MyApp;