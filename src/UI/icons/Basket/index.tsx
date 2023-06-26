import { EColor, EFontSize } from '../../../../definitions';
import BasketIcon from '../../../../public/icons/basket.svg';
import { IIconProps } from '../Arrow';

export const Basket = ({ size = EFontSize.xl, color = EColor.textPrimary }: IIconProps) => {
  return (
    <BasketIcon
      style={{
        width: size,
        height: size,
        fill: color,
      }}
    />
  );
};
