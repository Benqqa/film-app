import { Minus } from "@/UI/icons/Minus";
import { EColor, EFontSize } from "../../../../definitions";
import { ButtonIcon } from "../ButtonIcon";

export interface IButton {
  onClick: () => void;
  disabled?: boolean;
}

export const ButtonMinus = ({ onClick, disabled }: IButton) => {
  return (
    <ButtonIcon
      onClick={onClick}
      size={EFontSize.lg}
      icon={<Minus size={EFontSize.sm} color={EColor.white}></Minus>}
      type={"filled"}
      color={EColor.orange}
      disabled={disabled}
    ></ButtonIcon>
  );
};
