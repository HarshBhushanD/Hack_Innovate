
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/component/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vuln-VANGUARD",
  description: "Cybersecurity and Development Hackathon at SRMIST Delhi-NCR",
  image: "/icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      {/* <Head>
        <link rel="icon" href="/icon.png" type="image/.png" sizes="any" />
      </Head> */}
      <body className={inter.className}>
        <Header />
        {/* Main page content is rendered below */}
        {children}
        {/* <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script> */}
      </body>
    </html>
  );
}
