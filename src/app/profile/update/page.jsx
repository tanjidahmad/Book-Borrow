"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Input, Label, TextField, Card } from "@heroui/react";

export default function UpdateProfilePage() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    const res = await authClient.updateUser({ name, image });

     if (res?.error) {
    if (res.error.message === "Unauthorized") {
      setErrorMsg("Please login first"); 
    } else {
      setErrorMsg(res.error.message || "Update failed");
    }
    return;
  }

  router.push("/profile");
};

  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4">
      <Card className="w-full max-w-md p-6 border">
        <h1 className="text-xl font-bold text-center mb-4">
          Update Profile
        </h1>

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">

          <TextField>
            <Label>Name</Label>
            <Input name="name" placeholder="Enter your name" />
          </TextField>

          <TextField>
            <Label>Image URL</Label>
            <Input name="image" placeholder="Enter image URL" />
          </TextField>

          <Button type="submit">Update Information</Button>
        </form>

        {errorMsg && (
          <p className="text-red-500 text-sm mt-2 text-center">
            {errorMsg}
          </p>
        )}
      </Card>
    </div>
  );
}