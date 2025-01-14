import Button from "@/components/Button";
import { CARDS } from "@/constants";
import { ActionButtonsProps } from "./index.types";

const ActionButtons = ({
  disabled,
  itemLength,
  isFinished,
  onClickDeal,
  onClickDraw,
  onClickShuffle,
}: ActionButtonsProps) => {
  if (CARDS.length === itemLength) {
    return <Button onClick={onClickDeal}>Deal</Button>;
  }

  if (itemLength) {
    return (
      <Button disabled={disabled} onClick={onClickDraw}>
        Draw
      </Button>
    );
  }

  if (isFinished) {
    return <Button onClick={onClickShuffle}>Play again</Button>;
  }

  return <Button disabled>...</Button>;
};

export default ActionButtons;
