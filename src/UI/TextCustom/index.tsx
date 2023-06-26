import { ReactNode } from "react";
import { EColor, EFontSize, EFontWidthSize } from "../../../definitions";

interface ITextCustom {
  children?: ReactNode;
  size?: EFontSize;
  width?: EFontWidthSize;
  color?: EColor;
  className?: string;
  style?: string
}

export const TextCustom = ({ children, size, style, width, color, className }: ITextCustom) =>{
  return <div className={className} style={{fontSize: size, fontStyle: style,  fontWeight: width, color: color}}>{children}</div>;
};
