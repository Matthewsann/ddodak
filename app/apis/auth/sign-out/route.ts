export const GET = async (request: Request) => {
  const response = new Response();

  const cookies = request.headers.get("cookie");
  const cookie = cookies
    ?.split(";")
    .find((cookie) => cookie.trim().startsWith("SANGDAMPLUS"));

  console.log(request.headers);

  response.headers.set(
    "Set-Cookie",
    `${cookie}=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
  );

  return response;
};
