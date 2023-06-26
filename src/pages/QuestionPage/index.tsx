"use client";

import { BaseCard } from "@/UI/BaseCard";
import { Flex } from "@/UI/Flex";
import { TextCustom } from "@/UI/TextCustom";
import { QuestionList } from "@/modules/QuestionList";
import { EColor, EFontSize, EFontWidthSize, EMarginSize } from "../../../definitions";
import global from "../../app/global.module.css";

export default function QuestionPage() {
  return (
    <>
      <Flex direction="column" className={global.fullWidth} gap={EMarginSize.lg}>
        <BaseCard className={global.fullWidth}>
          <TextCustom size={EFontSize.xxl} width={EFontWidthSize.lg} color={EColor.textPrimary}>
            Вопросы-ответы
          </TextCustom>
        </BaseCard>
        <QuestionList></QuestionList>
      </Flex>
    </>
  );
}
