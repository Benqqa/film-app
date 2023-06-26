import { EColor, EFontSize } from '../../../../definitions';
import CrossIcon from '../../../../public/icons/close.svg';
import { IIconProps } from '../Arrow';

export const Cross = ({ size = EFontSize.xl, color = EColor.textPrimary }: IIconProps) => {
  return (
    <CrossIcon
      style={{
        width: size,
        height: size,
        fill: color,
      }}
    />
  );
};
