import Pagesize from "../Pagesize";
import styles from "./ArticleTopBar.module.css";

interface ArticleTopBarProps {
  onChangePagesize: (pagesize: number) => void;
  pagesize: number;
  totalItems: number;
}

const ArticleTopBar = ({
  onChangePagesize,
  pagesize,
  totalItems,
}: ArticleTopBarProps) => {
  return (
    <div className={styles["top-bar"]}>
      <span>{totalItems} articles</span>
      <Pagesize onChangePagesize={onChangePagesize} pagesize={pagesize} />
    </div>
  );
};

export default ArticleTopBar;
