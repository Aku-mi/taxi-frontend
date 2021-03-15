import React, { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { Live } from "./pages/Live";
import { RouteProp } from "./components/Routes/interfaces";
import { Routes } from "./components/Routes";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { storage } from "./services/storage";

export const App: React.FC = () => {
  const [pass, setPass] = useState(false);
  const routes: RouteProp[] = [
    {
      href: "/",
      txt: "Home",
      id: 0,
      component: Home as React.FC,
      visible: !pass,
    },
    {
      href: "/live",
      txt: "Live",
      id: 1,
      component: Live as React.FC,
      visible: !pass,
    },
    {
      href: "/login",
      txt: "Sign In",
      id: 3,
      component: Login as React.FC,
      visible: !pass,
    },
    {
      href: "/register",
      txt: "Sign Up",
      id: 4,
      component: Register as React.FC,
      visible: !pass,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPass(storage.token() ? true : false);
    }, 100);
    return () => clearInterval(interval);
  }, [pass]);

  return (
    <div>
      <Routes data={routes} />
    </div>
  );
};
