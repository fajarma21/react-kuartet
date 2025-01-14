export interface CardProps {
  className?: string;
  count?: number;
  color?: string;
  disabled?: boolean;
  flip?: boolean;
  selected?: boolean;
  subText?: string;
  text?: string;
  onClick?: () => void;
}
