"use client";

import { Flex } from "@/UI/Flex";
import { TextCustom } from "@/UI/TextCustom";
import Link from "next/link";
import { EColor, EFontSize, EFontWidthSize, EMarginSize } from "../../../definitions";

interface IFooter {
  className?: string;
}
export const Footer = ({ className }: IFooter) => {
  return (
    <>
      <Flex className={className} justify="space-between" bg={EColor.gray1}>
        <Flex mt={EMarginSize.xl} mb={EMarginSize.xl} ml={EMarginSize.xl}>
          <TextCustom size={EFontSize.lg} width={EFontWidthSize.sm} color={EColor.white}>
            <Link href="/questions">Вопросы-ответы</Link>
          </TextCustom>
        </Flex>
        <Flex mt={EMarginSize.xl} mb={EMarginSize.xl} mr={EMarginSize.xl}>
          <TextCustom size={EFontSize.lg} width={EFontWidthSize.sm} color={EColor.white}>
            <Link href="/about">О нас</Link>
          </TextCustom>
        </Flex>
      </Flex>
    </>
  );
};
