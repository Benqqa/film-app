"use client";

import { Flex } from "@/UI/Flex";
import { FilmsList } from "@/modules/FilmsList";
import { FiltersBlock } from "@/modules/FiltersBlock";
import { EMarginSize } from "../../../definitions";
import global from "../../app/global.module.css";

export default function MainPage() {
  return (
    <>
      <Flex  className={global.fullWidth} justify="space-between" gap={EMarginSize.lg}>
        <FiltersBlock></FiltersBlock>
        <FilmsList></FilmsList>
      </Flex>
    </>
  );
}
