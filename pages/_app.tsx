import '../styles/globals.css'; // Import global styles
import type { AppProps } from 'next/app';
import Sidebar from '../components/sidebar/sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full lg:ml-60"> {/* 64px margin on large screens */}
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
