import { TOTALINDEX } from "@/constants/matching";
import { AnswerType, OptionType, QuestionType } from "@/types/question";
import cc from "classcat";
import { useEffect, useState } from "react";

export default function Question({
  question,
  next,
}: {
  question: QuestionType;
  next: ({ title, answer, value, goto }: AnswerType) => void;
}) {
  const [selected, setSelected] = useState<OptionType[]>([]);

  const handleNext = (options: OptionType[]) => {
    if (question.type === "radio" || question.type === "checkbox") {
      next({
        title: question.title,
        answer: options.map((o) => o.title).join(","),
        value: options.map((o) => o.value).join(","),
        goto: options[0].goto || question.goto,
      });
    }
    if (question.type === "dropdown") {
    }
  };

  useEffect(() => {
    setSelected([]);
  }, [question]);

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="w-full flex items-center flex-col h-full overflow-hidden">
        <h1 className="font-medium shrink-0 h-20">
          Q{question.index}. {question.title}
          {question.type === "checkbox" && (
            <div className="text-[10px] font-light">중복선택 가능</div>
          )}
        </h1>
        <div className="w-full h-full overflow-auto shrink no-scrollbar">
          <div className="flex flex-col gap-[30px] h-max">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={cc([
                  "flex flex-col shrink-0 h-[53px] px-4 items-center justify-center border active:bg-primary active:text-white border-primary w-full text-black font-medium text-sm",
                  (question.type === "radio" || option.exclusive) &&
                    "rounded-full",
                  selected.some((s) => s.value === option.value) &&
                    "bg-primary text-white",
                ])}
                onClick={() => {
                  if (question.type === "radio") handleNext([option]);
                  if (question.type === "checkbox") {
                    if (option.exclusive) {
                      setSelected([option]);
                      return;
                    } else {
                      if (selected.some((s) => s.value === option.value)) {
                        setSelected((prev) =>
                          prev.filter((s) => s.value !== option.value)
                        );
                      } else {
                        setSelected((prev) =>
                          [...prev, option].filter((s) => !s.exclusive)
                        );
                      }
                    }
                  }
                }}
              >
                <div className="relative">
                  {option.subtitle && (
                    <div className="absolute bottom-4 text-[8px] font-light">
                      {option.subtitle}
                    </div>
                  )}
                  {option.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-end shrink-0 mt-8 h-[100px]">
        <div className="w-full rounded-full h-3 bg-black/30">
          <div
            className="rounded-full h-3 bg-primary"
            style={{
              width: `${
                (Number(question.index.split("-")[0]) / TOTALINDEX.individual) *
                100
              }%`,
            }}
          ></div>
        </div>

        {(question.type === "checkbox" || question.type === "dropdown") && (
          <button
            disabled={selected.length === 0}
            className="disabled:bg-black/20 disabled:border-transparent mt-8 border-secondary border rounded-full h-[38px] w-[90px] flex items-center justify-center"
            onClick={() => handleNext(selected)}
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
}
