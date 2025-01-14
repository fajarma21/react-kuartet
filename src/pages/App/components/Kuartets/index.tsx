import { CSSProperties } from "react";
import * as css from "./index.styles";
import { KuartetsProps } from "./index.types";

const Kuartets = ({ items }: KuartetsProps) => {
  return (
    <div className={css.container}>
      <div className={css.kuartetCounter}>
        <b>{items.length}</b>
      </div>
      {items.map((item, index2) => (
        <div
          key={`kuartet-${index2}`}
          className={css.kuartetCard}
          style={{ backgroundColor: item.color } as CSSProperties}
        />
      ))}
    </div>
  );
};

export default Kuartets;
