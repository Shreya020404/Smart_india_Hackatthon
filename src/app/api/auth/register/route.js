import { NextResponse } from "next/server";
import { CreateUser } from "@/queries/users";
import { DbConnect } from "@/lib/mongo";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await DbConnect();

  const hashedpassword = await bcrypt.hash(password, 10);
  const newUser = {
    name,
    email,
    password: hashedpassword,
  };

  try {
    await CreateUser(newUser);
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }

  return new NextResponse("User registered", {
    status: 201,
  });
};
