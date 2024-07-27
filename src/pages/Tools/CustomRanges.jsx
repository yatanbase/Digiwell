import React, { memo } from "react";

const CustomRanges = memo(
  ({
    max = 100,
    value = Math.floor(Math.random() * max),
    todaysDay,
    timeInvested = "3h 44min",
  }) => {
    return (
      <div className="h-full w-9 rounded-xl min-h-24 flex overflow-visible group flex-col justify-end gap-0 cursor-pointer">
        <p className="w-fit group-hover:block hidden mt-auto h-fit text-center">{timeInvested}</p>
        <div
          className={`w-full rounded-xl mt-auto`}
          style={{
            height: value + "%",
            backgroundColor: todaysDay ? "#1ABC9C" : "#EDF0F7",
          }}
        ></div>
      </div>
    );
  }
);

export default CustomRanges;
