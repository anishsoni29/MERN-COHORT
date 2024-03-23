import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  //posting this data to the database
  console.log(body);
  return Response.json({
    message: " Your are now logged in!",
  });
}
