import React, { memo, useCallback, useMemo, useState } from "react";
import icon_Agriculture from "../../assets/Icons/icon _Agriculture_.svg";
import CustomRanges from "./CustomRanges";
import streakImg from "../../assets/imgs/Graph Chart Green On A Black Background Backgrounds _ JPG Free Download - Pikbest.jpeg";
import { GiAchievement } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const Tools = memo(() => {
  const images = useMemo(
    () => [
      streakImg,
      streakImg,
      streakImg,
      streakImg,
      streakImg,
      streakImg,
      streakImg,
      streakImg,
      streakImg,
      streakImg,
      streakImg,
    ],
    []
  );
  const [translateValue, setTranslateValue] = useState(0);
  const toggleCarousel = useCallback((e) => {
    const imgListWidth = document
      .getElementById("imagesContainer")
      .getBoundingClientRect().width;
    const deviceWidth = window.innerWidth * 0.95;
    console.log(imgListWidth);
    const translate = Math.floor(imgListWidth / images.length);
    console.log(translate);
    const action = e.currentTarget.id;
    console.log(action);
    if (action == "prev") {
      setTranslateValue((prevState) => {
        console.log(prevState);
        return prevState <= 0 ? prevState : prevState - translate;
      });
    } else {
      setTranslateValue((prevState) => {
        console.log(prevState);
        return imgListWidth > prevState + deviceWidth
          ? prevState + translate
          : prevState;
      });
    }
  }, []);
  const days = useMemo(
    () => [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    []
  );
  const todaysDay = useMemo(() => new Date().getDay());
  return (
    <div className="flex flex-col gap-4 w-fit h-full">
      <div className="header flex items-center md:gap-8 gap-4 bg-white p-4 rounded-3xl px-10">
        <img src={icon_Agriculture} alt="icon agriculture" />
        <p className="text-xl font-medium">
          Achieving work-life balance is key to enhancing well-being, preventing
          burnout, and boosting productivity and job satisfaction. So, &nbsp;
          <span className="text-2xl font-semibold text-[#10A288]">
            Time Management
          </span>
          &nbsp; is crucial.
        </p>
      </div>
      <div className="body flex gap-4">
        <div className="calender flex-1 h-[500px] bg-white rounded-3xl"></div>
        <div className="streak_and_screenTime flex flex-col gap-4 shrink-0">
          <div
            className="streak h-1/2 rounded-3xl font-bold"
            style={{
              backgroundImage: `url(${streakImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="header bg-[#34495E] text-white flex items-center p-4 h-fit text-3xl gap-8 rounded-3xl max-h-24">
              <div
                className="w-24 h-full px-4 rounded-lg grid place-items-center py-1"
                style={{ backgroundColor: "rgba(217, 217, 217, 0.29)" }}
              >
                <GiAchievement color="#F1C40F" size="95%" />
              </div>
              7 Days <br /> Streak!
            </div>
          </div>
          <div className="screenTimeContainer bg-white w-fit p-4 rounded-3xl h-1/2 flex flex-col">
            <h1 className="text-xl font-semibold">Weekly Screen Time</h1>
            <div className="screenTime flex gap-4 flex-1">
              {Array.from({ length: 7 }).map((_, index) => {
                return (
                  <div className="flex flex-col gap-4 items-center" key={index}>
                    <CustomRanges
                      max={100}
                      value={Math.floor(Math.random() * 100)}
                      todaysDay={days[todaysDay] == days[index]}
                    />
                    {/* here max would be according to the maximum value in the scrren time and value will the daily value recorded. */}
                    <div className="day shrink-0">
                      {days[index].slice(0, 3)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="carousel flex flex-col bg-white p-4 rounded-3xl h-full gap-4 overflow-x-hidden relative">
        <div className="heading text-xl font-semibold shrink-0">
          Time Management Guides
        </div>
        <div
          className="left cursor-pointer absolute top-1/2 left-4 z-10 bg-[#1ABC9C] p-2 rounded-lg rotate-90 text-white"
          id="prev"
          onClick={toggleCarousel}
        >
          <IoIosArrowDown />
        </div>
        <div
          className="right cursor-pointer absolute top-1/2 right-4 z-10 bg-[#1ABC9C] p-2 rounded-lg -rotate-90 text-white"
          id="next"
          onClick={toggleCarousel}
        >
          <IoIosArrowDown />
        </div>
        <div
          className={`imgs flex-1 flex gap-4 w-fit transition-all duration-500 px-10`}
          id="imagesContainer"
          style={{ transform: `translateX(-${translateValue}px)` }}
        >
          {images.map((image, index) => (
            <div
              className="h-full rounded-[20px] overflow-hidden aspect-video"
              key={index}
            >
              <img
                src={image}
                alt={image}
                key={index}
                className="h-full object-cover w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
export default Tools;
