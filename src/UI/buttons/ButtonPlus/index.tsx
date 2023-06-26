import { Plus } from "@/UI/icons/Plus";
import { EColor, EFontSize } from "../../../../definitions";
import { ButtonIcon } from "../ButtonIcon";
import { IButton } from "../ButtonMinus";

export const ButtonPlus = ({ onClick, disabled }: IButton) => {
  return (
    <ButtonIcon
      onClick={onClick}
      disabled={disabled}
      size={EFontSize.lg}
      icon={
        // <div
        //   style={{
        //     width: EFontSize.lg,
        //     height: EFontSize.lg,
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center",
        //   }}
        // >
        <Plus size={EFontSize.sm} color={EColor.white}></Plus>

        // </div>
      }
      type={"filled"}
      color={EColor.orange}
    ></ButtonIcon>
  );
};
