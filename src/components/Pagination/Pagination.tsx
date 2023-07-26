import React, { useMemo } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  totalPages,
  currentPage,
  middlePageSize = 5,
  onClickPrev,
  onClickNext,
  onChangePage,
}: {
  totalPages: number;
  currentPage: number;
  middlePageSize?: number;
  onClickPrev: () => void;
  onClickNext: () => void;
  onChangePage: (page: number) => void;
}) => {
  const { siblingStart, siblingEnd } = useMemo(() => {
    const siblingCount = middlePageSize - 1;
    const siblingStart = Math.max(
      currentPage - Math.floor(siblingCount / 2),
      1
    );
    const siblingEnd = Math.min(
      currentPage + Math.ceil(siblingCount / 2),
      totalPages
    );

    return { siblingStart, siblingEnd };
  }, [middlePageSize, currentPage, totalPages]);

  const pages = useMemo(() => {
    const makePageItem = (pageNum: number) => {
      return (
        <div
          className={[
            styles["pagination-item"],
            currentPage === pageNum ? styles["active"] : "",
          ].join(" ")}
          key={pageNum}
          onClick={() => onChangePage(pageNum)}
        >
          {pageNum}
        </div>
      );
    };
    const result = [];
    for (let i = siblingStart; i <= siblingEnd; i++) {
      if (i === siblingStart && i > 1) {
        result.push(makePageItem(1));
        if (siblingStart - 1 > 1) {
          result.push(<div className={styles["skip-item"]}>...</div>);
        }
      }
      result.push(makePageItem(i));
      if (i === siblingEnd && i < totalPages) {
        if (totalPages - siblingEnd > 1) {
          result.push(<div className={styles["skip-item"]}>...</div>);
        }
        result.push(makePageItem(totalPages));
      }
    }
    return result;
  }, [siblingEnd, siblingStart, currentPage, onChangePage, totalPages]);

  return (
    <div className={styles["flex-box"]}>
      <button
        className={[
          styles["pagination-button"],
          currentPage === 1 ? styles["disabled"] : "",
        ].join(" ")}
        onClick={onClickPrev}
      >{`<`}</button>
      {pages}
      <button
        className={[
          styles["pagination-button"],
          currentPage === totalPages ? styles["disabled"] : "",
        ].join(" ")}
        onClick={onClickNext}
      >{`>`}</button>
    </div>
  );
};

export default Pagination;
