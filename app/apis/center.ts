import type { CenterType } from "@/types/center";
import { ContactCode, GenderCode, ReligionCode } from "@/types/codes";

interface CenterListResponse {
  success: boolean;
  code: number;
  message: string;
  data: CenterType[];
}

export const centerList = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/center/list`);

  if (!result.ok) throw new Error("서버 에러");

  const data: CenterListResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  return data.data;
};

export const centerAroundList = async ({
  lat,
  lng,
  distance,
}: {
  lat: number;
  lng: number;
  distance: number;
}) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/center/around/list?distance=${distance}&centerLatitude=${lat}&centerLongitude=${lng}`
  );

  if (!result.ok) throw new Error("서버 에러");

  const data: CenterListResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  return data.data;
};

export const centerMapList = async (params: {
  minLatitude: number;
  maxLatitude: number;
  minLongitude: number;
  maxLongitude: number;

  minPrice?: number;
  maxPrice?: number;
  contactType?: ContactCode;
  gender?: GenderCode;
  religion?: ReligionCode;
  minAge?: number;
  maxAge?: number;

  keywords: number[];
}) => {
  const paramsWithKeywords = {
    ...params,
    keywords: params.keywords?.join(","),
  };
  const queryString = new URLSearchParams(paramsWithKeywords as any);

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/center/around/list?${queryString}`
  );

  if (!result.ok) throw new Error("서버 에러");

  const data: CenterListResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  return data.data;
};
