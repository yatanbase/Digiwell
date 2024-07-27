import React from "react";
import PrimaryBtn from "../../Components/Buttons/PrimaryBtn";

export default function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-dvh text-3xl">
      404 :( Page Not Found <PrimaryBtn className={"rounded-xl text-base hover:bg-[#159d82] active:scale-95"}>{"Back to home page"}</PrimaryBtn>
    </div>
  );
}
