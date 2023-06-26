import { BaseCard } from "@/UI/BaseCard";
import { IComment } from "@/modules/CommentsList";
import { EFontSize, EMarginSize } from "../../../definitions";
import global from "../../app/global.module.css";
import { TicketComputed } from "../TicketCard";

export const CommentCard = ({ rating, description, id, imagePath, name }: IComment) => {
  return (
    <>
      <BaseCard className={global.fullWidth} gap={EMarginSize.xl}>
        <TicketComputed initialSwitcherValue={true} initialCounterValue={0}>
          <TicketComputed.TicketImage path={imagePath} size={"sm"}></TicketComputed.TicketImage>
          <TicketComputed.TicketContent gap={EMarginSize.md}>
            <TicketComputed.TicketHeader>
              <TicketComputed.TicketTitle size={EFontSize.lg}>{name}</TicketComputed.TicketTitle>
              <TicketComputed.TicketTools>
                <TicketComputed.TicketRating rating={rating}></TicketComputed.TicketRating>
              </TicketComputed.TicketTools>
            </TicketComputed.TicketHeader>
            <TicketComputed.TicketDescription>{description}</TicketComputed.TicketDescription>
          </TicketComputed.TicketContent>
        </TicketComputed>
      </BaseCard>
    </>
  );
};
