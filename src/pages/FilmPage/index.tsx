"use client";

import { Flex } from "@/UI/Flex";
import { TicketCard } from "@/components/TicketCard";
import { CommentsList } from "@/modules/CommentsList";
import { EMarginSize } from "../../../definitions";
import global from "../../app/global.module.css";

export default function Page({ id }: { id: string }) {
  return (
    <>
      <Flex direction="column" className={global.fullWidth} gap={EMarginSize.lg}>
        {id}
        <TicketCard image={""} title={""} typeTicketCard="full" genre={""}></TicketCard>
        <CommentsList filmId={id}></CommentsList>
      </Flex>
    </>
  );
  //   <div>{`Film id = _${id}`}</div>;
}
