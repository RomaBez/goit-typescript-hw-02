import { ReactElement } from "react";
import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader(): ReactElement {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={true}
        width="96"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
