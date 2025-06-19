import Chip from '@/components/Chip';
import {
  STATUS_ACTION,
  STATUS_COLLECT,
  STATUS_DRAW,
  STATUS_NONE,
  STATUS_SELECT,
} from '@/constants';
import { jsonParse } from 'fajarma-package';
import * as css from './index.styles';
import { StatusValues, type StatusProps } from './index.types';

const Status = ({ type, values }: StatusProps) => {
  const value = values ? jsonParse<StatusValues>(values) : null;

  return (
    <div className={css.container}>
      {type === STATUS_ACTION && 'Select or Draw a card?'}
      {type === STATUS_DRAW && 'Draw a card'}
      {type === STATUS_SELECT && value && (
        <>
          Select <Chip {...value} />
        </>
      )}
      {type === STATUS_COLLECT && value && (
        <>
          Get {value.length} <Chip {...value} /> card
          {Number(value.length) > 1 ? 's' : ''}
        </>
      )}
      {type === STATUS_NONE && value && (
        <>
          No one has <Chip {...value} /> card
        </>
      )}
    </div>
  );
};

export default Status;
