import React, { useMemo } from "react";
import styled from "./Pagination.module.css";

const Pagination = ({
  totalPages,
  currentPage,
  middlePageSize = 5,
  onClickPrev,
  onClickNext,
}: {
  totalPages: number;
  currentPage: number;
  middlePageSize?: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}) => {
  const { siblingStart, siblingEnd } = useMemo(() => {
    const siblingCount = middlePageSize - 3;
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

  const middlePages = useMemo(() => {
    const pages = [];
    for (let i = siblingStart; i <= siblingEnd; i++) {
      pages.push(<div key={i}>{i}</div>);
    }
    return pages;
  }, [siblingEnd, siblingStart, currentPage]);

  return (
    <div>
      <button onClick={onClickPrev}>{`<`}</button>
      Prev
      {siblingStart > 1 && (
        <div>
          <div>1</div>
          <div>...</div>
        </div>
      )}
      {middlePages}
      {siblingEnd < totalPages && (
        <div>
          <div>...</div>
          <div>{totalPages}</div>
        </div>
      )}
      <button
        className={styled["pagination-button"]}
        onClick={onClickNext}
      >{`>`}</button>
    </div>
  );
};

export default Pagination;
