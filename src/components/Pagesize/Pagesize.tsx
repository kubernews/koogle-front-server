import styles from "./Pagesize.module.css";

interface PagesizeProps {
  pagesize: number;
  onChangePagesize: (pagesize: number) => void;
}

const Pagesize = ({ pagesize, onChangePagesize }: PagesizeProps) => {
  return (
    <div>
      <select
        className={styles["select-container"]}
        value={pagesize}
        onChange={(e) => onChangePagesize(Number(e.target.value))}
      >
        {[2, 5, 10, 20, 50, 100].map((size) => (
          <option key={`pagesize-${size}`} value={size}>
            {size} / page
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagesize;
