export type OptionType = DefaultOption | DropdownOption;

export interface AnswerType {
  title: string;
  goto: string;
  answer: string;
  value: string;
}

export interface DefaultOption {
  subtitle?: string;
  underTitle?: string;
  title: string;
  value?: string | number;
  goto?: string;
  exclusive?: boolean;
  type?: string;
  input?: boolean;
  alert?: boolean;
}

export interface DropdownOption extends DefaultOption {
  title: string;
  type: "province" | "city";
}

export interface QuestionType {
  index: string;
  title: string;
  type: "dropdown" | "checkbox" | "radio";
  goto: string;
  options: OptionType[];
}
