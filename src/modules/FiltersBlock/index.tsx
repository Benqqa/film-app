import { BaseCard } from "@/UI/BaseCard";
import { Flex } from "@/UI/Flex";
import { Input } from "@/UI/Input";
import { Select } from "@/UI/Select";
import { TextCustom } from "@/UI/TextCustom";
import { EColor, EFontSize, EFontWidthSize, EMarginSize } from "../../../definitions";
import global from "../../app/global.module.css";

export const FiltersBlock = () => {
  return (
    <>
      <BaseCard direction={"column"} className={global.filterBlockWidth}>
        <Flex mb={EMarginSize.xm}>
          <TextCustom color={EColor.textPrimary} width={EFontWidthSize.lg} size={EFontSize.md}>
            Фильтр поиска
          </TextCustom>
        </Flex>
        <Flex direction={"column"} gap={EMarginSize.md}>
          <Input label={"Название"} placeholder={"Введите название"}></Input>
          <Select
            id={""}
            label={"Жанр"}
            placeholder={"Выберите жанр"}
            options={["aaa1", "aa2a", "aaa3"]}
            hint={""}
          ></Select>
          <Select
            id={""}
            label={"Кинотеатр"}
            placeholder={"Выберите кинотеатр"}
            options={["aa4a", "aa5a", "aa6a"]}
            hint={""}
          ></Select>
        </Flex>
      </BaseCard>
    </>
  );
};
