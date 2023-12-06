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
  const result = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!result.ok) throw new Error("서버 에러");

  const data: AuthLoginResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  return data.data;
};
