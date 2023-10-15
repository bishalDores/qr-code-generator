import React from "react";
import Navigation from "./Navigation";

const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default NavLayout;
