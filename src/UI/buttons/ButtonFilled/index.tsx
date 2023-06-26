import { EColor, EFontSize } from "../../../../definitions";
import { ButtonIcon } from "../ButtonIcon";

interface IButtonFilledProps {
  onClick: () => void;
  children?: React.ReactNode;
}

export const ButtonFilled = ({ onClick, children }: IButtonFilledProps) => {
  return (
    <ButtonIcon size={EFontSize.xl} color={EColor.orange} onClick={onClick} icon={undefined} type={"filled"}>
      {children}
    </ButtonIcon>
  );
};
