import { Flex } from "@/UI/Flex";
import { IQuestion, QuestionCard } from "@/components/QuestionCard";
import { EMarginSize } from "../../../definitions";
import global from "../../app/global.module.css";

export const QuestionList = () => {
  const questions: IQuestion[] = [
    { id: "", textQuestion: "asdasd", textAnswer: "asdasd",  },
    { id: "", textQuestion: "asdasd", textAnswer: "asdasd",  },
    { id: "", textQuestion: "asdasd", textAnswer: "asdasd",  },
  ];
  const renderQuestionList = (questions: IQuestion[]) => {
    return questions.map((question: IQuestion) => {
      return (
        <QuestionCard
          key={question.id}
          id={question.id}
          textQuestion={question.textQuestion}
          textAnswer={question.textAnswer}
        //   isOpen={question.isOpen}
        ></QuestionCard>
      );
    });
  };
  return (
    <>
      <Flex direction={"column"} gap={EMarginSize.lg} className={global.fullWidth}>
        {renderQuestionList(questions)}
      </Flex>
    </>
  );
};
