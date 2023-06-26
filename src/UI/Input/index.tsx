import { ChangeEvent } from "react";
import { EColor, EFontSize, EFontWidthSize, EMarginSize } from "../../../definitions";
import { Flex } from "../Flex";
import { TextCustom } from "../TextCustom";
import { Label } from "../Label";

interface IInput {
  label?: string;
  placeholder?: string;
  id?: string;
  onInputChange?: (e: string) => void;
}

export const Input = ({ label, placeholder, id, onInputChange }: IInput) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (onInputChange) {
      onInputChange(value);
    }
  };
  return (
    <>
      <Flex direction={"column"}>
        <Flex mb={EMarginSize.xs}>
          <Label>{label}</Label>
        </Flex>
        <input id={id} placeholder={placeholder} onChange={handleChange} />
      </Flex>
    </>
  );
};
