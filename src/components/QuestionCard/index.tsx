import { BaseCard } from "@/UI/BaseCard";
import { Arrow } from "@/UI/icons/Arrow";
import { EColor, EFontSize, EMarginSize } from "../../../definitions";
import global from "../../app/global.module.css";
import { TicketComputed } from "../TicketCard";

export interface IQuestion {
  textQuestion: string;
  textAnswer: string;
  id: string;
}

export const QuestionCard = ({ textQuestion, textAnswer }: IQuestion) => {
  return (
    <>
      <BaseCard className={global.fullWidth}>
        <TicketComputed initialSwitcherValue={false} initialCounterValue={0}>
          <TicketComputed.TicketContent gap={EMarginSize.md}>
            <TicketComputed.TicketHeader>
              <TicketComputed.TicketTitle size={EFontSize.lg}>{textQuestion}</TicketComputed.TicketTitle>
              <TicketComputed.TicketTools>
                <TicketComputed.TicketSwitchShowDescriptionButton
                  icon={<Arrow size={EFontSize.xxl} color={EColor.gray1}></Arrow>}
                ></TicketComputed.TicketSwitchShowDescriptionButton>
              </TicketComputed.TicketTools>
            </TicketComputed.TicketHeader>
            <TicketComputed.TicketDescription>{textAnswer}</TicketComputed.TicketDescription>
          </TicketComputed.TicketContent>
        </TicketComputed>
      </BaseCard>
    </>
  );
};
