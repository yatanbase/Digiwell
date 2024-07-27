import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="h-dvh p-4 flex gap-4 bg-[#F5F5F5]">
      <NavBar />
      <Outlet />
    </div>
  );
}
