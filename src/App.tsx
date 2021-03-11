import React from "react";
import { Home } from "./pages/Home";
import { Live } from "./pages/Live";
import { RouteProp } from "./components/Routes/interfaces";
import { Routes } from "./components/Routes";

export const App: React.FC = () => {
  const routes: RouteProp[] = [
    {
      href: "/",
      txt: "Home",
      id: 0,
      component: Home as React.FC,
      visible: true,
    },
    {
      href: "/live",
      txt: "Live",
      id: 1,
      component: Live as React.FC,
      visible: true,
    },
  ];

  return (
    <div>
      <Routes data={routes} />
    </div>
  );
};
