import { CSSProperties } from "react";
import { cx } from "@emotion/css";

import * as css from "./index.styles";
import { CardProps } from "./index.types";

const Card = ({
  className = "",
  count = 0,
  color = "",
  disabled = false,
  flip = false,
  selected = false,
  text = "",
  subText = "",
  onClick,
}: CardProps) => {
  return (
    <button
      className={cx(css.card, className)}
      data-selected={selected || undefined}
      disabled={disabled}
      onClick={onClick}
    >
      {flip ? (
        <div className={css.back}>{Boolean(count) && <b>{count}</b>}</div>
      ) : (
        <div className={css.front}>
          <div>
            <div>
              <b>{text}</b>
            </div>
            <div>{subText}</div>
          </div>
          <div
            className={css.color}
            style={{ backgroundColor: color } as CSSProperties}
          />
        </div>
      )}
    </button>
  );
};

export default Card;
