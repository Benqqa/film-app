"use client"

import { Flex } from "@/UI/Flex";
import { EColor, EMarginSize } from "../../../definitions";

interface IBaseContent {
    children?: React.ReactNode;
    className?: string;
}
export const BaseContent = ({ children, className }: IBaseContent) => {
  return <Flex className={className} bg={EColor.gray2}  flex="1 1" pt={EMarginSize.lg} pb={EMarginSize.lg} pr={EMarginSize.xl} pl={EMarginSize.xl}>{children}</Flex>;
};
