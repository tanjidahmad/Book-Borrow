"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
import { useState } from "react"; 

export default function SignInPage() {
   const [errorMsg, setErrorMsg] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

     if (error) {
    // alert(error.message);
      setErrorMsg(error.message);
  }

  if (data) {
    console.log("Login success");
  }

    console.log({ data, error });
  };

  const handlGoogleSignIn = async () => {
    await authClient.signIn.social({
        provider: 'google'
    })
  }



  return (
    <Card className="border mx-auto w-full max-w-md sm:max-w-lg py-10 mt-5 px-4">
      <h1 className="text-center text-2xl font-bold">Log In</h1>

      <Form className="flex w-full mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <p className="mt-4 text-center sm:text-left">
          Don't have an account?{" "}
          <Link className="text-blue-500 hover:underline font-medium" href={"/signup"}>
            Register
          </Link></p>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button type="submit">
            <Check />
            Login
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      {errorMsg && (
        <p className="text-red-500 text-sm text-center mt-2">
          {errorMsg}
        </p>
      )}

      <p className="text-center mt-4">Or</p>

      <Button onClick={handlGoogleSignIn} variant="outline" className="w-full mt-3"><GrGoogle/> Login In With Google</Button>
    </Card>
  );
}
