import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export const GET = async (req: Request) => {
  try {
    await serverAuth();

    const movies = await prisma.movie.findMany();

    return NextResponse.json({ movies, status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal error", { status: 500 });
  }
};
