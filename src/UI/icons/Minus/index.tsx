import { Flex } from "@/UI/Flex";
import Image from "next/image";
import { IIconProps } from "../Arrow";

export const Minus = ({ size, color }: IIconProps) => {
  return (
    <Flex justify="center" algin="center">
      <Image
        src="/icons/minus.svg"
        style={{
          color: color,
        }}
        color={color}
        width={12}
        height={12}
        alt={"asdasd"}
      />
    </Flex>
  );
};
