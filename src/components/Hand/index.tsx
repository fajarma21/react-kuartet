import React, { CSSProperties } from "react";
import * as css from "./index.styles";
import { HandProps } from "./index.types";

const Hand = ({
  children,
  currentTurn,
  index,
  isWinner,
  text = "",
  total,
}: HandProps) => {
  const [kuartets, cards] = React.Children.toArray(children);

  const styles = {
    "--scale": index ? 2 : 1,
    "--hover": index ? "unset" : "scale(1.2)",
    "--index": index ? "unset" : 1,
    "--gap": total >= 0 ? `-${(total - 1) * (index ? 4 : 8)}px` : 0,
  } as CSSProperties;

  return (
    <div
      className={css.hand}
      data-index={index}
      data-turn={currentTurn || undefined}
      data-winner={isWinner || undefined}
    >
      {!!text && <div className={css.text}>{text}</div>}
      <div className={css.topSection}>
        <div
          className={css.kuartetContainer}
          data-winner={isWinner || undefined}
        >
          {kuartets}
        </div>
        {isWinner && (
          <div className={css.crown}>
            <div />
            <div />
            <div />
          </div>
        )}
      </div>
      <div className={css.mainRow} style={styles}>
        {cards}
      </div>
    </div>
  );
};

export default Hand;
