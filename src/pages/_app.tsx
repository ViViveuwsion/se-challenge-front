import 'antd/dist/reset.css'; // ใช้เส้นทางที่ถูกต้องสำหรับ CSS ของ Ant Design
import '@/styles/globals.css'; // นำเข้า CSS ของโครงการ
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
