import ThemeProvider from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import styles from "./Layout.module.css";
import Head from "next/head";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' https://repo.whatap-browser-agent.io/rum/dev/ 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://rumote.whatap-browser-agent.io; worker-src data: blob:"
        />
      </Head>
      <div className={`${styles["layout-wrap"]}`}>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </div>
      <Script id="whatap-browser-agent">{`window.WhatapBrowserAgent = {
          config: {
            projectAccessKey: "x41pr21smr38g-x23d931th02uta-x4fkdd8i01p6l0",
            pcode: 1851,
            sampleRate: 100,
            proxyBaseUrl: "https://rumote.whatap-browser-agent.io/",
          },
        }`}</Script>
      <Script
        src="https://repo.whatap-browser-agent.io/rum/dev/v1/whatap-browser-agent.js"
        type="text/javascript"
      ></Script>
    </ThemeProvider>
  );
}
