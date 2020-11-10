import React from "react";

import { Theme } from "../styles/Theme";
import { Navbar } from "./Navbar";
import { HomePage } from "./pages/HomePage";

export const App = () => {
  return (
    <Theme>
      <div>
        <Navbar />
        <HomePage />
      </div>
    </Theme>
  );
};
