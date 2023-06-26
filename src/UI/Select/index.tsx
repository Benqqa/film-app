import { ChangeEvent, useCallback } from "react";
import { EMarginSize } from "../../../definitions";
import { Flex } from "../Flex";
import { Hint } from "../Hint";
import { Label } from "../Label";

interface ISelect {
  options?: string[];
  id: string;
  label: string;
  hint?: string;
  placeholder: string;
  onInputChange?: (value: string) => void;
}

export const Select = ({ onInputChange, label, placeholder, id, options,hint }: ISelect) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (onInputChange) {
      onInputChange(value);
    }
  };
  const renderOptions =useCallback((_options: string[]): React.ReactNode => {
    return _options.map((option) => <option key={option} value={option}>{option}</option>);
  }, [])
  return (
    <>
      <Flex direction={"column"}>
        <Flex mb={EMarginSize.xs}>
          <Label>{label}</Label>
        </Flex>
        <select id={id} placeholder={placeholder} onChange={handleChange}>
          {!!options && renderOptions(options) }
        </select>
        <Flex mt={EMarginSize.xs}>
          <Hint show={!!hint}>{hint}</Hint>
        </Flex>
      </Flex>
    </>
  );
};
