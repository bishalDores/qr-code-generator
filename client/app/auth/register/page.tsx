"use client";

import NavLayout from "@/components/NavLayout";
import React, { useState } from "react";
import { Input, Button } from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";
import { postRequest } from "@/utils/httpHandlers";
import { variables } from "@/utils/apiUrls";
import useGoogleAuth from "@/utils/useGoogleAuth";
import { toast } from "sonner";

const initialState = {
  name: "",
  email: "",
  password: "",
  phone: "",
};
const Register = () => {
  const [formState, setFormState] = useState(initialState);

  const [authenticate, token] = useGoogleAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await postRequest(variables.register, formState);
    if (res.success) {
      toast.success("Success", { description: "Your registration was successful" });
      setFormState(initialState);
    } else {
      toast.error("Error", {
        description: res.message,
      });
    }
  };

  const { email, password, name, phone } = formState;

  return (
    <>
      <title>Create Account</title>
      <NavLayout>
        <div className="login_wrapper">
          <div className="login_inner">
            <h3>Register</h3>
            <p>Please fill in the information below:</p>

            <form onSubmit={handleSubmit}>
              <Input placeholder="Name" radius={0} type="text" name="name" value={name} onChange={handleChange} />
              <Input placeholder="Email" radius={0} type="email" mt={"md"} name="email" value={email} onChange={handleChange} />
              <Input placeholder="Password" mt={"md"} radius={0} mb={"md"} type="password" name="password" value={password} onChange={handleChange} />
              <Input placeholder="Phone" radius={0} mb={"md"} type="text" name="phone" value={phone} onChange={handleChange} />
              <Button fullWidth radius={0} style={{ textTransform: "uppercase" }} type="submit">
                create my account
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
          </div>
        </div>
      </NavLayout>
    </>
  );
};

export default Register;
