import { BaseCard } from "@/UI/BaseCard";
import { selectCartCount } from "@/redux/features/cart";
import { useSelector } from "react-redux";
import { EFontSize } from "../../../definitions";
import global from "../../app/global.module.css";
import { TicketComputed } from "../TicketCard";

interface ISummaryCard {}

export const SummaryCard = () => {
  const cartCount = useSelector(selectCartCount);
  return (
    <>
      <BaseCard className={global.fullWidth}>
        <TicketComputed initialCounterValue={0} initialSwitcherValue={false}>
          <TicketComputed.TicketHeader>
            <TicketComputed.TicketTitle size={EFontSize.lg}>Итого билетов:</TicketComputed.TicketTitle>
            <TicketComputed.TicketTools>
              <TicketComputed.TicketTitle size={EFontSize.lg}>{cartCount.toString()}</TicketComputed.TicketTitle>
            </TicketComputed.TicketTools>
          </TicketComputed.TicketHeader>
        </TicketComputed>
      </BaseCard>
    </>
  );
};
