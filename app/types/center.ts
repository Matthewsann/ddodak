import { ServiceCode } from "./codes";
import { CounselorType } from "./counselor";

export interface CenterType {
  id: number;
  name: string;
  profileUrl: string;
  price: number;
  address: string;
  shortAddress: string;
  linkUrl: string;
  phoneNumber: string;
  isServiceCounsel: "Y" | "N";
  isServiceInspect: "Y" | "N";
  isServiceCare: "Y" | "N";
  isVoucher: "Y" | "N";
  etc: string;
  latitude: number;
  longitude: number;
  centerType: "USER" | "CENTER";
}

export interface CenterDetailType extends CenterType {
  imageList: {
    id: number;
    imageUrl: string;
    orderNum: number;
  }[];
  eventList: {
    id: number;
    imageUrl: string;
    orderNum: number;
  }[];
  scheduleList: {
    id: number;
    weekday: {
      code: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
      title: string;
    };
    startTime: string;
    endTime: string;
    isStop: "N" | "Y";
    orderNum: number;
  }[];
  counselorList: CounselorType[];
  serviceList: {
    id: number;
    price: number;
    title: string;
    content: string;
    orderNum: number;
    serviceType: ServiceCode;
  }[];
}
