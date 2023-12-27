import { ContactCode, GenderCode, ReligionCode } from "@/types/codes";

export const CONTACT: {
  key: ContactCode;
  value: string;
}[] = [
  {
    key: "OFFLINE",
    value: "대면상담",
  },
  {
    key: "ONLINE",
    value: "화상상담",
  },
  {
    key: "PHONE",
    value: "전화상담",
  },
];

export const GENDERS: {
  key: GenderCode;
  value: string;
}[] = [
  {
    key: "FEMALE",
    value: "여성",
  },
  {
    key: "MALE",
    value: "남성",
  },
];

export const RELIGIONS: {
  key: ReligionCode;
  value: string;
}[] = [
  {
    key: "CHRISTIAN",
    value: "기독교",
  },
  {
    key: "BUDDHIST",
    value: "불교",
  },
  {
    key: "CATHOLIC",
    value: "천주교",
  },
  {
    key: "NONE",
    value: "무교",
  },
  {
    key: "ETC",
    value: "그 외",
  },
];
