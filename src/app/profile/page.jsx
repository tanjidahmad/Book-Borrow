"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
// import { redirect } from "next/navigation";

const ProfilePage = () => {
  const userData = authClient.useSession();
  console.log(userData);
  const user = userData.data?.user;
  console.log("User:", user);

//   if(!user) {
//     redirect('/signin')
//   }

  return (
    <div className="px-4">
      <Card className="w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center border mt-5 p-6">
        <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>

        <h2 className="text-lg sm:text-xl font-bold mt-3 text-center">{user?.name}</h2>
        <p className="text-sm sm:text-base text-muted text-center">{user?.email}</p>
        <div className="mt-4 w-full flex justify-center">
        <UpdateUserModal  userData={userData}/>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
