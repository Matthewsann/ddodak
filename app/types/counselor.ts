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
