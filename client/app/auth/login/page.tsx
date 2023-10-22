"use client";
import NavLayout from "@/components/NavLayout";
import React, { useState } from "react";
import { Input, Button } from "@mantine/core";
import Link from "next/link";
import { IconBrandGoogle } from "@tabler/icons-react";

import { postRequest } from "@/utils/httpHandlers";
import { variables } from "@/utils/apiUrls";
import useGoogleAuth from "@/utils/useGoogleAuth";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [authenticate, token] = useGoogleAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await postRequest(variables.login, formState);
    if (res.success) {
      // do something for success
    } else {
      // do something for error
    }
  };

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
              <Input placeholder="Password" mt={"md"} radius={0} mb={"md"} type="password" name="password" value={password} onChange={handleChange} />
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
                onClick={() => authenticate()}
              >
                Continue with google
              </Button>
            </form>
            <p className="small_text">
              Don&apos;t have an account ? <Link href="/auth/register">Create one</Link>
            </p>
          </div>
        </div>
      </NavLayout>
    </>
  );
};

export default Login;
