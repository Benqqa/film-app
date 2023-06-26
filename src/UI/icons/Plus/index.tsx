import { Flex } from "@/UI/Flex";
import Image from "next/image";
import { IIconProps } from "../Arrow";

export const Plus = ({ size, color }: IIconProps) => {
  return (
    <Flex justify="center" algin="center">
      <Image
        src="/icons/plus.svg"
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
