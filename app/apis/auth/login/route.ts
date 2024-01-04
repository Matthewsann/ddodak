interface AuthLoginResponse {
  success: boolean;
  code: number;
  message: string;
  data: boolean;
}

export const POST = async (request: Request) => {
  const { id, password } = await request.json();
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      id,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!result.ok) throw new Error("서버 에러");

  const data: AuthLoginResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  const response = Response.json(data);
  console.log("asdfo");
  console.log(result.headers.get("set-cookie")! + "; SameSite=None; Secure;");
  response.headers.set(
    "set-cookie",
    result.headers.get("set-cookie")! + "; SameSite=None; Secure;"
  );

  return response;
};
