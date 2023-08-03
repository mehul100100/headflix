import { redirect } from "next/navigation";
import getCurrentUser from "@/actions/getCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import FavoriteList from "@/components/FavoriteList";

export default async function Home() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth");
  }

  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Billboard />
        <MovieList />

        <FavoriteList />
      </div>
    </>
  );
}
