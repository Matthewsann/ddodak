interface KeywordListResponse {
  success: boolean;
  code: number;
  message: string;
  data: {
    id: 1;
    keyWordGroup: {
      code: string;
      title: string;
    };
    keyword: string;
  }[];
}

export const keywordList = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/keyword/list`
  );

  if (!result.ok) throw new Error("서버 에러");

  const data: KeywordListResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  return data.data;
};
