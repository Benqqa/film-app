import { EColor, EFontSize } from '../../../../definitions';
import PhotoIcon from '../../../../public/icons/Vector.svg';
import { IIconProps } from '../Arrow';

export const Photo = ({ size = EFontSize.xl, color = EColor.textPrimary }: IIconProps) => {
  return (
    <PhotoIcon
      style={{
        width: size,
        height: size,
        fill: color,
      }}
    />
  );
};
