import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export const GET = async (req: Request) => {
  try {
    await serverAuth();

    const movies = await prisma.movie.findMany();
    const count = await prisma.movie.count();
    const randomIndex = Math.floor(Math.random() * count);
    const randomMovies = await prisma.movie.findMany({
      take: 1,
      skip: randomIndex,
    });
    const randomMovie = randomMovies[0];

    return NextResponse.json({ randomMovie, count, status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal error", { status: 500 });
  }
};
