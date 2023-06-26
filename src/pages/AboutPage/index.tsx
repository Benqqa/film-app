"use client";

import { BaseCard } from "@/UI/BaseCard";
import { TextCustom } from "@/UI/TextCustom";
import { EColor, EFontSize, EFontWidthSize, EMarginSize } from "../../../definitions";
import global from "../../app/global.module.css";

export default function AboutPage() {
  return (
    <>
      <BaseCard className={global.fullWidth} gap={EMarginSize.md} direction={"column"}>
        <TextCustom size={EFontSize.xxl} width={EFontWidthSize.lg} color={EColor.textPrimary}>
          О нас
        </TextCustom>
        <TextCustom size={EFontSize.md} width={EFontWidthSize.sm} color={EColor.textPrimary}>
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино,
          узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить
          описание фильмов.
        </TextCustom>
        <TextCustom size={EFontSize.md} width={EFontWidthSize.sm} color={EColor.textPrimary}>
          был запущен в 2003 году. Портал предоставляет пользователям информацию о фильмах и их создателях, новости
          кино, интервью с актерами и другими знаменитостями, рецензии пользователей, расписание сеансов в кинотеатрах,
          ТВ-программу и другие разделы.
        </TextCustom>
        <TextCustom size={EFontSize.md} width={EFontWidthSize.sm} color={EColor.textPrimary}>
          Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и Дмитрий Суханов. Владельцем проекта
          являлась компания ООО «Билетопоиск», которой принадлежало 60 % акций проекта, 40 % акций принадлежало её
          совладельцу — французской компании ООО AlloCiné. 15 октября 2013 года сервис купила компания «Яндекс» (размер
          сделки — $80 млн, около 2,6 млрд рублей на то время).
        </TextCustom>
      </BaseCard>
    </>
  );
}
