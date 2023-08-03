import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prismadb from "@/libs/prismadb";

export const POST = async (req: Request) => {
  try {
    const { email, name, password } = await req.json();

    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({
        status: 422,
        error: "Email is already in use",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        name,
        email,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json({ user, status: 200 });
  } catch (err: any) {
    console.log((err as Error).message);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
