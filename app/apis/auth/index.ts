import { UserInfoType } from "@/types/user";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

interface AuthLoginResponse {
  success: boolean;
  code: number;
  message: string;
  data: boolean;
}

export const authLogin = async ({
  id,
  password,
}: {
  id: string;
  password: string;
}) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/apis/auth/login`,
    {
      method: "POST",
      body: JSON.stringify({
        id,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (!result.ok) throw new Error("서버 에러");

  const data: AuthLoginResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  return data.data;
};

interface UserInfoResponse {
  success: boolean;
  code: number;
  message: string;
  data: UserInfoType;
}
export const userInfo = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/user/info`, {
    credentials: "include",
  });

  if (!result.ok) throw new Error("서버 에러");

  const data: UserInfoResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  return data.data;
};
