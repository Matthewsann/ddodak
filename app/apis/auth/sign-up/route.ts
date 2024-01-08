interface AuthSignUpResponse {
  success: boolean;
  code: number;
  message: string;
  data: boolean;
}

export const POST = async (request: Request) => {
  const { id, name, email, password, phoneNumber, signUpWay } =
    await request.json();
  console.log({ id, name, email, password, phoneNumber, signUpWay });
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/auth/signUp`,
    {
      method: "POST",
      body: JSON.stringify({
        id,
        name,
        email,
        password,
        phoneNumber,
        signUpWay,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  console.log(result);

  if (!result.ok) throw new Error("서버 에러");

  const data: AuthSignUpResponse = await result.json();
  if (!data.success) throw new Error(data.message);

  const response = Response.json(data);
  response.headers.set(
    "set-cookie",
    result.headers.get("set-cookie")! + "; SameSite=None; Secure;"
  );

  return response;
};
