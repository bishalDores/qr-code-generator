import NavLayout from "@/components/NavLayout";
import React from "react";
import { Input, Button } from "@mantine/core";
import Link from "next/link";
import { IconBrandGoogle } from "@tabler/icons-react";

const Register = () => {
  return (
    <>
      <title>Create Account</title>
      <NavLayout>
        <div className="login_wrapper">
          <div className="login_inner">
            <h3>Register</h3>
            <p>Please fill in the information below:</p>

            <form>
              <Input placeholder="Name" radius={0} type="text" />
              <Input placeholder="Email" radius={0} type="email" mt={"md"} />
              <Input placeholder="Password" mt={"md"} radius={0} mb={"md"} type="password" />
              <Input placeholder="Phone" radius={0} mb={"md"} type="text" />
              <Button fullWidth radius={0} style={{ textTransform: "uppercase" }}>
                create my account
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
          </div>
        </div>
      </NavLayout>
    </>
  );
};

export default Register;
