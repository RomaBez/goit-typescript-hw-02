import { ReactElement } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

export default function LoadMoreBtn({
  onLoadMore,
}: LoadMoreBtnProps): ReactElement {
  return (
    <button onClick={onLoadMore} className={css.LoadMoreBtn}>
      Load More
    </button>
  );
}
