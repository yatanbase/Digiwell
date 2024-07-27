import React, { memo, useState } from "react";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

function getDominantColorFromSrc(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Handle cross-origin issues
    img.src = src;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        reject("Canvas not supported");
        return;
      }

      // Draw the image to a single pixel on the canvas
      context.drawImage(img, 0, 0, 1, 1);

      // Get the pixel data
      const imageData = context.getImageData(0, 0, 1, 1).data;

      // Convert the RGB values to a hex color code
      const hexColor = `#${(
        (1 << 24) +
        (imageData[0] << 16) +
        (imageData[1] << 8) +
        imageData[2]
      )
        .toString(16)
        .slice(1)}`;

      resolve(hexColor);
    };

    img.onerror = (err) => {
      reject(err);
    };
  });
}

const PlanContainers = memo(({ heading, points = [], imgSrc }) => {
  const [bgColor, setBgcolor] = useState("white");
  console.log(
    getDominantColorFromSrc(imgSrc)
      .then((color) => setBgcolor(color))
      .catch((err) => console.error(err))
  );
  return (
    <div
      className="p-4 flex gap-4 rounded-2xl bg-white"
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="img w-[156px] aspect-square rounded-xl overflow-hidden">
        <img
          src={imgSrc}
          alt={heading}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="detailsSection">
        <div className="heading text-xl font-bold text-[#535B5B] mb-2">
          {heading}
        </div>
        <div className="points flex flex-col gap-4 text-[#7F8C8D]">
          {points.map((point, index) => {
            return (
              <div
                className="flex gap-2 text-base items-center font-semibold max-w-[655px]"
                key={index}
              >
                <BiSolidCheckboxChecked size="1.5rem" className="shrink-0" />
                {point}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="arrow p-2 w-10 aspect-square flex items-center justify-center rounded-full mt-auto ml-auto"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <IoIosArrowDown className="-rotate-90 text-white" size="24px" />
      </div>
    </div>
  );
});

export default PlanContainers;
