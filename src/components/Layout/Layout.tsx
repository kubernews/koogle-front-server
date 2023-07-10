import ThemeProvider from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import styles from "./Layout.module.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={`${styles["layout-wrap"]}`}>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
}
