import '../styles/globals.css'; 
import type { AppProps } from 'next/app';
import Sidebar from '../components/sidebar/sidebar';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Apply dark mode class to the HTML element on load
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full lg:ml-60"> 
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
