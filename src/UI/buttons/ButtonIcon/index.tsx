import { Flex } from "@/UI/Flex";
import { TextCustom } from "@/UI/TextCustom";
import { EColor, EFontSize, EFontWidthSize } from "../../../../definitions";
import style from "./style.module.css";

interface IButtonIcon {
  icon: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: EColor;
  type: "outline" | "filled" | "default";
  disabled?: boolean;
  size?: EFontSize;
  textSize?: EFontSize;
}

export const ButtonIcon = ({ icon, children, onClick, className, color, type, disabled, size }: IButtonIcon) => {
  let typeClassName;
  if (type === "outline") {
    typeClassName = "buttonOutline";
  } else if (type === "filled") {
    typeClassName = "buttonFilled";
  } else {
    typeClassName = "buttonDefault";
  }
  return (
    <button
      disabled={disabled}
      className={`${style[typeClassName]} ${className} ${style.button}`}
      onClick={onClick}
      style={{ height: size, width: size }}
    >
      <Flex algin="center" justify="center">
        {icon}
        <TextCustom width={EFontWidthSize.lg} size={EFontSize.sm}>
          {children}
        </TextCustom>
      </Flex>
    </button>
  );
};
