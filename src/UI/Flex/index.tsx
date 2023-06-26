import { EColor, EMarginSize } from "../../../definitions";

interface IFlex {
  children?: React.ReactNode;
  justify?: "center" | "flex-end" | "flex-start" | "space-between";
  algin?: "center" | "flex-end" | "flex-start" | "space-between";
  gap?: EMarginSize;
  direction?: "column" | "row";
  flex?: string;
  className?: string;
  bg?: EColor;
  mb?: EMarginSize;
  mt?: EMarginSize;
  mr?: EMarginSize;
  ml?: EMarginSize;
  pt?: EMarginSize;
  pb?: EMarginSize;
  pr?: EMarginSize;
  pl?: EMarginSize;
  radius?: EMarginSize;
}
export const Flex = ({
  className = "",
  flex = "",
  children,
  direction = "row",
  justify = "flex-start",
  algin = "flex-start",
  gap,
  bg,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  radius,
}: IFlex) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flex: flex,
        justifyContent: justify,
        alignItems: algin,
        gap: gap,
        flexDirection: direction,
        backgroundColor: bg,
        marginBottom: mb,
        marginTop: mt,
        marginLeft: ml,
        marginRight: mr,
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: pl,
        paddingRight: pr,
        borderRadius: radius,
      }}
    >
      {children}
    </div>
  );
};
