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
