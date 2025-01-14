import { cx } from "@emotion/css";

import * as css from "./index.styles";
import { ButtonProps } from "./index.type";

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cx(css.buttonModifier, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
