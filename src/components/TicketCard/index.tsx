import { BaseCard } from "@/UI/BaseCard";
import { Flex } from "@/UI/Flex";
import { TextCustom } from "@/UI/TextCustom";
import { ButtonIcon } from "@/UI/buttons/ButtonIcon";
import { AddItemAction, RemoveItemAction, TCartItem, selectCartItemCountById } from "@/redux/features/cart";
import Image from "next/image";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EColor, EFontSize, EFontStyle, EFontWidthSize, EMarginSize } from "../../../definitions";
import global from "../../app/global.module.css";
import { Counter } from "../Counter";

// const TicketImage =

interface ITicketTitle {
  children?: string;
  size: EFontSize.lg | EFontSize.xxl;
}

const TicketTitle = ({ children, size }: ITicketTitle) => {
  console.log("render");

  return (
    <>
      <TextCustom color={EColor.textPrimary} size={size} width={EFontWidthSize.lg}>
        {children}
      </TextCustom>
    </>
  );
};

interface ITicketContent {
  children?: React.ReactNode;
  gap: EMarginSize.lg | EMarginSize.sm | EMarginSize.md;
}

const TicketContent = ({ children, gap }: ITicketContent) => {
  return (
    <>
      <Flex className={global.fullWidth} direction={"column"} gap={gap}>
        {children}
      </Flex>
    </>
  );
};

interface ITicketHeader {
  children?: React.ReactNode;
}

const TicketHeader = ({ children }: ITicketHeader) => {
  return (
    <>
      <Flex className={global.fullWidth} justify={"space-between"}>
        {children}
      </Flex>
    </>
  );
};

const TicketShortContent = () => {
  return <>TicketShortContent</>;
};

interface ITicketImage {
  path: string;
  size: "xl" | "md" | "sm";
}

const TicketImage = ({ path, size }: ITicketImage) => {
  return (
    <>
      {size === "xl" && <Image src={path} alt={""} width={400} height={500} />}
      {size === "md" && <Image src={path} alt={""} width={100} height={120} />}
      {size === "sm" && <Image src={path} alt={""} width={100} height={100} />}
    </>
  );
};

interface ITicketDescription {
  children?: React.ReactNode;
  subtitle?: string;
}

const TicketDescription = ({ children, subtitle }: ITicketDescription) => {
  const { isOpen } = useContext(TicketContext);
  console.log("TicketDescription render");

  return (
    <>
      {isOpen && (
        <Flex direction={"column"} gap={EMarginSize.md}>
          {!!subtitle && (
            <TextCustom size={EFontSize.lg} width={EFontWidthSize.lg} color={EColor.textPrimary}>
              {subtitle}
            </TextCustom>
          )}
          <TextCustom width={EFontWidthSize.md} size={EFontSize.md} color={EColor.textPrimary}>
            {children}
          </TextCustom>
        </Flex>
      )}
    </>
  );
};

interface ITicketTools {
  children?: React.ReactNode;
}

const TicketTools = ({ children }: ITicketTools) => {
  return (
    <>
      <Flex direction={"column"}>{children}</Flex>
    </>
  );
};

interface ITicketCounter {
  onIncrement: (value: number) => void;
  onDecrement: () => void;
  minValue: number;
  maxValue: number;
}

const TicketCounter = ({ onIncrement, onDecrement, minValue, maxValue }: ITicketCounter) => {
  const { value, setValue } = useContext(TicketContext);
  return (
    <>
      <div>
        <Counter
        maxValue = {maxValue}
        minValue = {minValue}
          value={value}
          onIncrement={() => {
            if (value <= maxValue) {
              onIncrement(value);
              return setValue((value) => value + 1);
            } else {
              return setValue((value) => value);
            }
          }}
          onDecrement={() => {
            if (value > minValue) {
              onDecrement();
              return setValue((value) => value - 1);
            } else {
              return setValue((value) => value);
            }
          }}
        ></Counter>
      </div>
    </>
  );
};

interface ITicketRating {
  rating: number;
}

const TicketRating = ({ rating }: ITicketRating) => {
  return (
    <>
      <Flex gap={EMarginSize.sm}>
        <TextCustom size={EFontSize.lg} width={EFontWidthSize.sm} color={EColor.textPrimary}>
          Оценка:
        </TextCustom>
        <TextCustom size={EFontSize.lg} width={EFontWidthSize.lg} color={EColor.textPrimary}>
          {rating}
        </TextCustom>
      </Flex>
    </>
  );
};

interface ITicketButton {
  icon?: React.ReactNode;
}

const TicketSwitchShowDescriptionButton = ({ icon }: ITicketButton) => {
  const { isOpen, setIsOpen } = useContext(TicketContext);
  return (
    <>
      <ButtonIcon
        type="default"
        color={EColor.transparent}
        className={`${global.transition} ${isOpen ? global.rotate : ""}`}
        icon={icon}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      ></ButtonIcon>
    </>
  );
};

const TicketCloseButton = (path: string) => {
  return (
    <>
      <Image src={path} alt={""} />
    </>
  );
};

// interface ITickerGenre {
//   children?: string;
// }

// const TicketGenre = ({ children }: ITickerGenre) => {

// };

interface ITicketContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}
const TicketContext = React.createContext<ITicketContext>({
  isOpen: true,
  setIsOpen: () => {},
  value: 0,
  setValue: () => {},
});

// interface ITicketCounterContext {
//   value: number;
//   setValue: React.Dispatch<React.SetStateAction<number>>;
// }
// const TicketCounterContext = React.createContext<ITicketCounterContext>({ value: 0, setValue: () => {} });

interface ITicketComputed {
  children?: React.ReactNode;
  initialSwitcherValue: boolean;
  initialCounterValue: number;
}
export const TicketComputed = ({ children, initialSwitcherValue, initialCounterValue }: ITicketComputed) => {
  const [isOpen, setIsOpen] = React.useState(initialSwitcherValue);
  const [value, setValue] = React.useState(initialCounterValue);
  const ticketContextValue = { isOpen, setIsOpen, value, setValue };
  return <TicketContext.Provider value={ticketContextValue}>{children}</TicketContext.Provider>;
};

TicketComputed.TicketTitle = TicketTitle;
TicketComputed.TicketShortContent = TicketShortContent;
TicketComputed.TicketTools = TicketTools;
TicketComputed.TicketCloseButton = TicketCloseButton;
TicketComputed.TicketCounter = TicketCounter;
TicketComputed.TicketContent = TicketContent;
TicketComputed.TicketHeader = TicketHeader;
TicketComputed.TicketDescription = TicketDescription;
TicketComputed.TicketRating = TicketRating;
TicketComputed.TicketSwitchShowDescriptionButton = TicketSwitchShowDescriptionButton;
TicketComputed.TicketImage = TicketImage;

export interface ITicketCard {
  image: string;
  title: string;
  genre: string;
  year?: string;
  rating?: number;
  director?: string;
  description?: string;
  typeTicketCard: "short" | "full";
  id: string;
}

export const TicketCard = ({
  image,
  title,
  year,
  rating,
  director,
  description,
  genre,
  typeTicketCard,
  id,
}: ITicketCard) => {
  // Add an item to the cart
  const dispatch = useDispatch();

  const addItemToCart = (item: TCartItem) => {
    dispatch(AddItemAction(item));
    return;
  };

  // Remove an item from the cart
  const removeItemFromCart = (itemId: string) => {
    dispatch(RemoveItemAction({ id: itemId }));
  };

  const useItemCount = (itemId: string) => {
    return useSelector(selectCartItemCountById(itemId));
  };

  return (
    <>
      <BaseCard className={global.fullWidth} gap={EMarginSize.lg}>
        <TicketComputed initialSwitcherValue={true} initialCounterValue={useItemCount(id)}>
          {typeTicketCard === "short" && (
            <>
              <TicketComputed.TicketImage size={"md"} path={image}></TicketComputed.TicketImage>

              <TicketComputed.TicketContent gap={EMarginSize.sm}>
                <TicketComputed.TicketHeader>
                  <TicketComputed.TicketTitle size={EFontSize.lg}>{title}</TicketComputed.TicketTitle>
                  <TicketComputed.TicketTools>
                    <TicketComputed.TicketCounter
                      minValue={0}
                      maxValue={30}
                      onIncrement={(value) => {
                        addItemToCart({
                          count: value + 1,
                          description: description!,
                          id,
                          image,
                          title,
                          genre: genre,
                        });
                      }}
                      onDecrement={() => {
                        removeItemFromCart(id);
                      }}
                    ></TicketComputed.TicketCounter>
                  </TicketComputed.TicketTools>
                </TicketComputed.TicketHeader>
                <TextCustom
                  color={EColor.textPrimary}
                  size={EFontSize.md}
                  width={EFontWidthSize.sm}
                  style={EFontStyle.italic}
                >
                  {genre}
                </TextCustom>
              </TicketComputed.TicketContent>
            </>
          )}
          {typeTicketCard === "full" && (
            <>
              <TicketComputed.TicketImage size={"xl"} path={image}></TicketComputed.TicketImage>

              <TicketComputed.TicketContent gap={EMarginSize.lg}>
                <TicketComputed.TicketHeader>
                  <TicketComputed.TicketTitle size={EFontSize.xxl}>title</TicketComputed.TicketTitle>
                  <TicketComputed.TicketTools>
                    <TicketComputed.TicketCounter
                      minValue={0}
                      maxValue={30}
                      onIncrement={(value) => {
                        addItemToCart({
                          count: value + 1,
                          description: description!,
                          id,
                          image,
                          title,
                          genre: genre,
                        });
                      }}
                      onDecrement={() => {
                        removeItemFromCart(id);
                      }}
                    ></TicketComputed.TicketCounter>
                  </TicketComputed.TicketTools>
                </TicketComputed.TicketHeader>
                <TicketComputed.TicketContent gap={EMarginSize.md}>
                  <Flex gap={EMarginSize.sm}>
                    <TextCustom color={EColor.textPrimary} size={EFontSize.lg} width={EFontWidthSize.lg}>
                      Жанр:
                    </TextCustom>

                    <TextCustom color={EColor.textPrimary} size={EFontSize.lg} width={EFontWidthSize.sm}>
                      {genre}
                    </TextCustom>
                  </Flex>
                  <Flex gap={EMarginSize.sm}>
                    <TextCustom color={EColor.textPrimary} size={EFontSize.lg} width={EFontWidthSize.lg}>
                      Год выпуска:
                    </TextCustom>

                    <TextCustom color={EColor.textPrimary} size={EFontSize.lg} width={EFontWidthSize.sm}>
                      {year}
                    </TextCustom>
                  </Flex>
                  <Flex gap={EMarginSize.sm}>
                    <TextCustom color={EColor.textPrimary} size={EFontSize.lg} width={EFontWidthSize.lg}>
                      Рейтинг:
                    </TextCustom>

                    <TextCustom color={EColor.textPrimary} size={EFontSize.lg} width={EFontWidthSize.sm}>
                      {rating}
                    </TextCustom>
                  </Flex>
                  <Flex gap={EMarginSize.sm}>
                    <TextCustom color={EColor.textPrimary} size={EFontSize.lg} width={EFontWidthSize.lg}>
                      Режиссер:
                    </TextCustom>

                    <TextCustom color={EColor.textPrimary} size={EFontSize.lg} width={EFontWidthSize.sm}>
                      {director}
                    </TextCustom>
                  </Flex>
                </TicketComputed.TicketContent>
                <TicketComputed.TicketDescription subtitle="Описание">{description}</TicketComputed.TicketDescription>
              </TicketComputed.TicketContent>
            </>
          )}
        </TicketComputed>
      </BaseCard>
    </>
  );
};
