import { EColor, EFontSize, EFontWidthSize } from "../../../definitions";
import { TextCustom } from "../TextCustom";

interface ILabel {
  children?: React.ReactNode;
}

export const Label = ({ children }: ILabel) => {
  return (
    <>
      <TextCustom color={EColor.textPrimary} width={EFontWidthSize.sm} size={EFontSize.sm}>
        {children}
      </TextCustom>
    </>
  );
};
