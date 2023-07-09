import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={`${styles["flex-aside"]}`}>
      <ThemeToggle />
      <nav className={`${styles["nav-gap"]}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
};

export default NavBar;
