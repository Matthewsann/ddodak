import { UserInfoType } from "@/types/user";

interface AuthLoginResponse {
  success: boolean;
  code: number;
  message: string;
  data: boolean;
}

export const authLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

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
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/user/info`);

  if (!result.ok) throw new Error("서버 에러");

  const data: UserInfoResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  return data.data;
};
