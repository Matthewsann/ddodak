const getCookie = (cookies: string, name: string) => {
  return cookies.split(";").find((c) => {
    return c.trim().startsWith(name);
  });
};

export const GET = async (request: Request) => {
  const response = new Response();

  response.headers.set(
    "set-cookie",
    `token=${getCookie(
      request.headers.get("cookie") || "",
      "SANGDAMPLUS"
    )}; Max-Age=0; Path=/; SameSite=None; Secure;`
  );

  return response;
};
