"use client";
import { Flex } from "@/UI/Flex";
import { ButtonFilled } from "@/UI/buttons/ButtonFilled";
import { ButtonIcon } from "@/UI/buttons/ButtonIcon";
import { Basket } from "@/UI/icons/Basket";
import { Logo } from "@/components/Logo";
import { selectCartCount } from "@/redux/features/cart";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { EColor, EMarginSize } from "../../../definitions";

interface IHeader {
  className?: string;
}

export const Header = ({ className }: IHeader) => {
  const router = useRouter();
  const cartCount = useSelector(selectCartCount);
  return (
    <>
      <Flex className={className} justify="space-between" bg={EColor.gray1} algin="center">
        <Flex mt={EMarginSize.lg} mb={EMarginSize.lg} ml={EMarginSize.xl}>
          <Logo></Logo>
        </Flex>
        <Flex mr={EMarginSize.xl} gap={EMarginSize.sm} algin={"center"}>
          {!!cartCount && <ButtonFilled onClick={() => router.push("/cart")}>{cartCount}</ButtonFilled>}
          <ButtonIcon
            onClick={() => router.push("/cart")}
            icon={<Basket color={EColor.white}></Basket>}
            type={"default"}
          ></ButtonIcon>
        </Flex>
      </Flex>
    </>
  );
};
