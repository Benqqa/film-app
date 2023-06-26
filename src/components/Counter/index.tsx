import { Flex } from "@/UI/Flex";
import { TextCustom } from "@/UI/TextCustom";
import { ButtonMinus } from "@/UI/buttons/ButtonMinus";
import { ButtonPlus } from "@/UI/buttons/ButtonPlus";
import { EFontSize, EFontWidthSize, EMarginSize } from "../../../definitions";

interface ICounter {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  maxValue: number;
  minValue: number;
}

export const Counter = ({ onDecrement, onIncrement, value, maxValue, minValue }: ICounter) => {
  return (
    <>
      <Flex gap={EMarginSize.sm} algin={"center"}>
        <ButtonMinus disabled={value === minValue} onClick={onDecrement}></ButtonMinus>
        <TextCustom size={EFontSize.lg} width={EFontWidthSize.lg}>
          {value}
        </TextCustom>
        <ButtonPlus disabled={value === maxValue} onClick={onIncrement}></ButtonPlus>
      </Flex>
    </>
  );
};
