"use client";
import NavLayout from "@/components/NavLayout";
import React, { useState } from "react";
import { Input, Button } from "@mantine/core";
import Link from "next/link";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const { email, password } = formState;
  return (
    <>
      <title>Login</title>
      <NavLayout>
        <div className="login_wrapper">
          <div className="login_inner">
            <h3>Login</h3>
            <p>Please enter your email and password:</p>

            <form onSubmit={handleSubmit}>
              <Input placeholder="Email" radius={0} type="email" name="email" onChange={handleChange} value={email} />
              <Input
                placeholder="Password"
                mt={"md"}
                radius={0}
                mb={"md"}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <Button fullWidth radius={0} style={{ textTransform: "uppercase" }} type="submit">
                login
              </Button>
              <Button
                fullWidth
                radius={0}
                style={{ textTransform: "uppercase" }}
                mt={"md"}
                variant="light"
                leftSection={<IconBrandGoogle size={14} />}
                type="button"
                onClick={() => login()}
              >
                Continue with google
              </Button>
            </form>
            <p className="small_text">
              Don't have an account ? <Link href="/auth/register">Create one</Link>
            </p>
          </div>
        </div>
      </NavLayout>
    </>
  );
};

export default Login;
