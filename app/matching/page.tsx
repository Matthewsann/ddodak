"use client";

import Header from "@/components/header";
import { useCallback, useEffect, useState } from "react";
import { DEFAULT, INDIVIDUAL } from "@/constants/matching";
import Question from "./question";
import { AnswerType } from "@/types/question";

export default function Home() {
  const [index, setIndex] = useState("1");
  const [type, setType] = useState<"default" | "individual">("default");
  const [question, setQuestion] = useState(DEFAULT[0]);
  const [answers, setAnswers] = useState<AnswerType[]>([]);

  const next = useCallback(
    ({ title, goto, answer, value }: AnswerType) => {
      setIndex(goto);
      setAnswers((prev) => [...prev, { title, answer, value, goto }]);
      if (type === "default") {
        if (value === "individual") {
          setType("individual");
          setQuestion(INDIVIDUAL[0]);
        }
      }
    },
    [type]
  );

  useEffect(() => {
    if (type === "individual") {
      const next = INDIVIDUAL.find((q) => q.index === index);
      if (next) {
        setQuestion(next);
        return;
      }
      // TODO: 결과 페이지로 이동
    }
  }, [index, type]);

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return (
    <>
      <Header />
      <div className="w-full h-[100dvh] flex flex-col pt-24 px-12">
        <Question question={question} next={next} />
      </div>
    </>
  );
}
