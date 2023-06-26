import { EColor, EFontSize, EFontWidthSize } from "../../../definitions";
import { TextCustom } from "../TextCustom";

interface IHint {
  children?: React.ReactNode;
  color?: EColor;
  show: boolean;
}

export const Hint = ({ children, color, show }: IHint) => {
  return (
    <>
      <TextCustom color={!!color ? color : EColor.red} width={EFontWidthSize.sm} size={EFontSize.sm}>
        {show && children}
      </TextCustom>
    </>
  );
};
