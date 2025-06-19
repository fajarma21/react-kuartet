import { WHITE } from '@/constants';

import * as css from './index.styles';
import type { ChipProps } from './index.types';

const Chip = ({ color, text, textColor }: ChipProps) => {
  return (
    <div
      className={css.container}
      style={{
        backgroundColor: color,
        color: textColor || WHITE,
      }}
    >
      <b>{text}</b>
    </div>
  );
};

export default Chip;
