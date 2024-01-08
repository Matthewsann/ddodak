const getCookie = (name: string) => {
  return document.cookie.split(";").find((c) => {
    return c.trim().startsWith(name);
  });
};

export const GET = async () => {
  const response = new Response();

  response.headers.set(
    "set-cookie",
    `token=${getCookie(
      "SANGDAMPLUS"
    )}; Max-Age=0; Path=/; SameSite=None; Secure;`
  );

  return response;
};
