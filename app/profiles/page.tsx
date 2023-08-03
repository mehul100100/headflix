import Image from "next/image";
import React from "react";
import profileImg from "@/public/images/default-red.png";
import getCurrentUser from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";
import Avatar from "@/components/Avatar";
const Profile = async () => {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/auth");
  }

  return (
    <div>
      <div className="flex flex-col min-h-screen bg-gray-900 items-center justify-center space-y-4">
        <div className="text-white text-6xl">Who is watching?</div>
        <Avatar name={user?.name} />
      </div>
    </div>
  );
};

export default Profile;
