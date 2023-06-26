import { Flex } from "@/UI/Flex";
import { CommentCard } from "@/components/CommentCard";
import { useCallback } from "react";
import { EMarginSize } from "../../../definitions";
import global from "../../app/global.module.css";

export interface IComment {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  rating: number;
}

interface ICommentsList {
  filmId: string;
}

export const CommentsList = ({ filmId }: ICommentsList) => {
  const commentsList: IComment[] = [
    { description: "adsdasd", id: filmId, imagePath: "", rating: 0, name: "ddd" },
    { description: "adsdasd", id: filmId, imagePath: "", rating: 0, name: "ddd" },
    { description: "adsdasd", id: filmId, imagePath: "", rating: 0, name: "ddd" },
  ];
  const renderCommentsList = useCallback(
    (comments: IComment[]) => {
      return comments.map((comment: IComment) => {
        return (
          <CommentCard
            key={comment.id}
            id={comment.id}
            name={comment.name}
            description={comment.description}
            imagePath={comment.imagePath}
            rating={comment.rating}
          ></CommentCard>
        );
      });
    },
    [commentsList]
  );
  return (
    <>
      <Flex direction={"column"} gap={EMarginSize.lg} className={global.fullWidth}>
        {renderCommentsList(commentsList)}
      </Flex>
    </>
  );
};
