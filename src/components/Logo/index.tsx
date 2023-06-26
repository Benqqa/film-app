import { TextCustom } from "@/UI/TextCustom";
import Link from "next/link";
import { EColor, EFontSize, EFontWidthSize } from "../../../definitions";
import global from "../../app/global.module.css";


export const Logo = () => {

  return (
    <TextCustom className={global.pointer} size={EFontSize.lg} width={EFontWidthSize.xl} color={EColor.white}>
      <Link href="/">Билетопоиск</Link>
    </TextCustom>
  );
};
