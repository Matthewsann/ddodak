import type { CenterDetailType, CenterType } from "@/types/center";
import { ContactCode, GenderCode, ReligionCode } from "@/types/codes";
import { FilterType } from "@/types/counselor";

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

export const centerMapList = async (
  params: FilterType & {
    keywords: number[];
  }
) => {
  const check = (value: any) => {
    if (value === null || value === undefined) return false;
    if (typeof value === "string" && value.length === 0) return false;
    if (typeof value === "number" && value === 0) return false;
    if (Array.isArray(value) && value.length === 0) return false;
    return true;
  };
  const c = (value: string | number | number[]) => {
    if (Array.isArray(value)) {
      return value.join(",");
    }
    return `${value}`;
  };
  const queryString = Object.entries(params).reduce(
    (acc, [key, value]) =>
      check(value)
        ? `${acc + (acc.length > 0 ? "&" : "")}${key}=${c(value)}`
        : acc,
    ""
  );

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/center/map/list?${queryString}`
  );

  if (!result.ok) throw new Error("서버 에러");

  const data: CenterListResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  return data.data;
};

export const centerSearchList = async ({ text }: { text: string }) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/center/search/list?text=${text}`
  );

  if (!result.ok) throw new Error("서버 에러");

  const data: CenterListResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  return data.data;
};

interface CenterDetailResponse {
  success: boolean;
  code: number;
  message: string;
  data: CenterDetailType;
}

export const centerDetail = async (id: number) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/center/${id}`
  );

  if (!result.ok) throw new Error("서버 에러");

  const data: CenterDetailResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  return data.data;
};
