"use client";
import NavLayout from "@/components/NavLayout";
import React from "react";
import { Input, Button } from "@mantine/core";
import Link from "next/link";
import { IconBrandGoogle } from "@tabler/icons-react";

const Login = () => {
  return (
    <>
      <title>Login</title>
      <NavLayout>
        <div className="login_wrapper">
          <div className="login_inner">
            <h3>Login</h3>
            <p>Please enter your email and password:</p>

            <form>
              <Input placeholder="Email" radius={0} type="email" />
              <Input placeholder="Password" mt={"md"} radius={0} mb={"md"} type="password" />
              <Button fullWidth radius={0} style={{ textTransform: "uppercase" }}>
                login
              </Button>
              <Button
                fullWidth
                radius={0}
                style={{ textTransform: "uppercase" }}
                mt={"md"}
                variant="light"
                leftSection={<IconBrandGoogle size={14} />}
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
