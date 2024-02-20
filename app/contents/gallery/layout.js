import { Noto_Sans_Mono} from 'next/font/google'
import '../../../components/global-styles/best.scss';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const sans = Noto_Sans_Mono({ subsets: ['latin'] })

export const metadata = {
  title: "Andrei - Project Gallery",
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sans.className}>
      {children}
      <Analytics />
      <SpeedInsights />
      </body>
    </html>
  )
}
