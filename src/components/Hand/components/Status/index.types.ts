import type { Status } from '@/types';

export type StatusProps = Status;

export interface StatusValues {
  color: string;
  length?: number;
  text: string;
  textColor?: string;
}
