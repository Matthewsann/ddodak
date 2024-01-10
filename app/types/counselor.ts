import { ContactCode, GenderCode, ReligionCode } from "./codes";

export interface KeywordType {
  id: number;
  keyword: string;
}

export interface FilterType {
  minLatitude: number;
  maxLatitude: number;
  minLongitude: number;
  maxLongitude: number;

  minPrice: number;
  maxPrice: number;
  contactType: ContactCode[];
  gender: GenderCode[];
  religion: ReligionCode[];
  minAge: number;
  maxAge: number;
}

export interface CounselorType {
  id: number;
  name: string;
  profileUrl: string;
  price: number;
  address: string;
  shortAddress: string;
  phoneNumber: string;
  email: string;
  isServicePhone: "Y" | "N";
  isServiceOnline: "Y" | "N";
  isServiceOffline: "Y" | "N";
  etc: string;
  intro: string;
  birthYmd: string;
  gender: GenderCode;
  religion: {
    code: ReligionCode;
    title: string;
  };
  counselorType: CounselorType;
  basicLicense: string;
}