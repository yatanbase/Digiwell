import React, { useCallback } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const PlansAndTools = () => {
  const navigate = useNavigate();
  const loction = useLocation();
  const redirect = useCallback((e) => {
    const route = e.currentTarget.id;
    navigate(route);
  }, []);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="header flex text-3xl font-bold gap-8">
        <div className="plans flex flex-col gap-1 cursor-pointer" id="/plans" onClick={redirect}>
          Digi Plans
          <div className={`h-1 rounded-tl-full rounded-tr-full bg-[#1ABC9C] ${location.pathname == "/plans" ? "w-full" : "w-0"} transition-all duration-500`}></div>
        </div>
        <div className="tools flex flex-col gap-1 cursor-pointer" id="/tools" onClick={redirect}>
          Tools
          <div className={`h-1 rounded-tl-full rounded-tr-full bg-[#1ABC9C] ${location.pathname == "/tools" ? "w-full" : "w-0"} transition-all duration-500`}></div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default PlansAndTools;
