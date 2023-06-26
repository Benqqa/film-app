import { EColor, EFontSize } from '../../../../definitions';
import ArrowIcon from '../../../../public/icons/arrow.svg';

export interface IIconProps {
  size?: EFontSize;
  color?: EColor;
}

export const Arrow = ({ size = EFontSize.xl, color = EColor.textPrimary }: IIconProps) => {
  return (
    <ArrowIcon
      style={{
        width: size,
        height: size,
        fill: color,
      }}
    />
  );
};
