//writing a route handler here

export function GET() {
  //database logic
  return Response.json({
    email: "anishsoni@gmail.com",
    name: "Anish Soni",
  });
}

//returns the JSON token as response
