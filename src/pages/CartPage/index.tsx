"use client";

import { Flex } from "@/UI/Flex";
import { SummaryCard } from "@/components/SummaryCard";
import { FilmsList } from "@/modules/FilmsList";
import { selectDeliveryCartList } from "@/redux/features/cart";
import { useSelector } from "react-redux";
import global from "../../app/global.module.css";


export default function CartPage() {
  const cartItems = useSelector(selectDeliveryCartList);
  console.log(cartItems);
  
  return (
    <>
      <Flex justify="space-between" direction="column" className={`${global.fullWidth} ${global.flexFull}`}>
        <FilmsList films={cartItems} className={global.flexFull}></FilmsList>
        <SummaryCard></SummaryCard>
      </Flex>
    </>
  );
}
