"use client";
import React from "react";
import { Title } from "@mantine/core";
import Link from "next/link";
import { IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  return (
    <div className="nav_wrapper">
      <div className="nav_inner">
        <div></div>
        <div className="logo">
          <Title
            order={3}
            style={{ textTransform: "uppercase", color: "#7b2eda", letterSpacing: "1px", cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            Manifestation
          </Title>
        </div>
        <div className="right_menu">
          <Link href={"/auth/login"}>
            <IconUser size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
