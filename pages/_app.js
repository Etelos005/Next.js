import '@/styles/globals.css'
import Layout from '@/components/Layout'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

