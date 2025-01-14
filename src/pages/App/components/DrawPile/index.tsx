import Card from "@/components/Card";
import * as css from "./index.styles";
import { DrawPileProps } from "./index.types";
import { CSSProperties } from "react";

const DrawPile = ({
  count,
  disabled,
  drawTurn,
  onClickDraw,
}: DrawPileProps) => {
  const styles = {
    "--top": `-${count / 2}px`,
    "--scale": 1.5,
  } as CSSProperties;

  return (
    <div className={css.drawContainer} style={styles}>
      {Boolean(count) && drawTurn !== -1 && (
        <Card flip className={css[`cardDraw${drawTurn}`]} />
      )}
      {Boolean(count) && (
        <Card
          flip
          count={count}
          disabled={disabled}
          className={css.cardModifier}
          onClick={onClickDraw}
        />
      )}
      <div className={css.bottomCards} data-null={count === 0 || undefined} />
    </div>
  );
};

export default DrawPile;
