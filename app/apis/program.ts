import { ProgramType } from "@/types/program";

interface ProgramRecommendListResponse {
  success: boolean;
  code: number;
  message: string;
  data: ProgramType[];
}

export const programRecommendList = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/program/recommend/list`
  );

  if (!result.ok) throw new Error("서버 에러");

  const data: ProgramRecommendListResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  return data.data;
};
