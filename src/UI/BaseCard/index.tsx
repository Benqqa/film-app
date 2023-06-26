import { EColor, EMarginSize } from "../../../definitions";
import { Flex } from "../Flex";

interface IBaseCard {
  text?: string;
  children?: React.ReactNode;
  direction?: "column" | "row";
  className?: string;
  gap?: EMarginSize;
}
export const BaseCard = ({ children, text, direction, className, gap }: IBaseCard) => {
  return (
    <>
      <Flex
        className={className}
        radius={EMarginSize.sm}
        bg={EColor.white}
        pt={EMarginSize.lg}
        pb={EMarginSize.lg}
        pr={EMarginSize.lg}
        pl={EMarginSize.lg}
        gap={gap}
        direction={direction}
      >
        {children}
      </Flex>
    </>
  );
};
