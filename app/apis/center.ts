import type { CenterType } from "@/types/center";

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
}: {
  lat: number;
  lng: number;
}) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/center/around/list?distance=500&centerLatitude=${lat}&centerLongitude=${lng}`
  );

  if (!result.ok) throw new Error("서버 에러");

  const data: CenterListResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  return data.data;
};
