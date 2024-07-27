import React, { memo, useCallback, useMemo, useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import PlanContainers from "./PlanContainers";
import img from "../../assets/imgs/billow926-vS5dRGz5xQg-unsplash.jpg";
import img2 from "../../assets/imgs/char-beck-AY8Rh-K5b4g-unsplash.jpg";
import img3 from "../../assets/imgs/candice-seplow-Nfw3-kdOt7o-unsplash.jpg";

const Plans = memo(() => {
  const [typeOfPlansInView, setTypeOfPlansInView] = useState(0);
  const changeTypeOfPlans = useCallback((e) => {
    const planCode = e.currentTarget.id;
    setTypeOfPlansInView(Number(planCode));
  }, []);
  const detailsArray = useMemo(
    () => [
      {
        src: img,
        heading: "Mindful Moments",
        points: [
          "Guided 10-minute meditation sessions each morning.",
          "Interactive workshops focusing on stress management and mindfulness techniques.",
          "Daily sessions with a certified mediation expert to set and achieve mental health goals.",
        ],
      },
      {
        src: img2,
        heading: "Healthy Eating",
        points: [
          "Personalized meal plans based on your dietary needs.",
          "Cooking workshops with professional chefs.",
          "Tips on maintaining a balanced diet.",
        ],
      },
      {
        src: img3,
        heading: "Fitness Frenzy",
        points: [
          "Daily workout routines tailored to your fitness level.",
          "Access to online fitness classes and tutorials.",
          "One-on-one coaching with fitness experts.",
        ],
      },
    ],
    []
  );
  const [plansPageNo, setPlansPageNo] = useState(1);
  return (
    <div className="PlansSection flex flex-col gap-4 h-full overflow-y-hidden">
      <div
        className="header w-full bg-[#1ABC9C] p-4 rounded-xl text-white flex gap-4 h-40 shrink-0"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
      >
        <TiStarFullOutline size="30px" className="mt-1.5" />
        <div className="details">
          <h2 className="text-2xl font-bold leading-[48px]">
            Experience tailor-made plans designed just for you!
          </h2>
          <p className="max-w-[603px] font-medium">
            By answering a few questions, we can assess your mental health and
            recommend personalized activities for your well-being.
          </p>
        </div>
        <div className="arrow p-2 bg-white w-10 aspect-square flex items-center justify-center rounded-full mt-auto ml-auto">
          <IoIosArrowDown className="-rotate-90 text-[#769a92]" size="24px" />
        </div>
      </div>
      <div className="navLinks flex justify-between shrink-0">
        <div
          className="left flex gap-5 flex-1 border-b-2 max-w-[748px]"
          style={{ borderColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <div
            className={`discover font-medium cursor-pointer flex flex-col gap-1`}
            id="0"
            onClick={changeTypeOfPlans}
            style={{color: typeOfPlansInView == 1 ? "#71BABF" : "#1ABC9C"}}
          >
            Discover plans
            <div
              className={`h-1 bg-[#1ABC9C] transition-all duration-200 ${
                typeOfPlansInView == 0 ? "w-full" : "w-0"
              }`}
            ></div>
          </div>
          <div
            className={`yourPlans font-medium cursor-pointer flex flex-col gap-1`}
            id="1"
            onClick={changeTypeOfPlans}
            style={{color: typeOfPlansInView == 0 ? "#71BABF" : "#1ABC9C"}}
          >
            Your plans
            <div
              className={`h-1 bg-[#1ABC9C] transition-all duration-200 ${
                typeOfPlansInView == 1 ? "w-full" : "w-0"
              }`}
            ></div>
          </div>
        </div>
        <div className="right flex gap-4 items-center shrink-0">
          <div className="p-1 rounded-lg w-[30px] aspect-square bg-[#1ABC9C] hover:bg-[#129077] cursor-pointer active:scale-95 transition-all duration-200 grid place-items-center">
            <IoIosArrowDown className="rotate-90 text-white" size="1.2rem" />
          </div>
          <div className="pageCount text-xl text-[#1ABC9C]">{plansPageNo}</div>
          <div className="p-1 rounded-lg w-[30px] aspect-square bg-[#1ABC9C] hover:bg-[#129077] cursor-pointer active:scale-95 transition-all duration-200 grid place-items-center">
            <IoIosArrowDown className="-rotate-90 text-white" size="1.2rem" />
          </div>
        </div>
      </div>
      <div className="overflow-y-auto p-4 flex-1 min-h-0">
        <div className="bodySection flex flex-col gap-4">
          {detailsArray.map((plan, index) => {
            return (
              <PlanContainers
                key={plan.heading}
                heading={plan.heading}
                points={plan.points}
                imgSrc={plan.src}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
});
export default Plans;
