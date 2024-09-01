"use client";

import { useState } from "react";
import MyEvents from "./my-events";
import OthersEvents from "./others-events";

export default function DashboardEvents() {
  const [eventTab, setEventTab] = useState("mine"); // mine||others
  const handleTabClick = (data: string) => {
    setEventTab(data);
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-8 flex gap-1">
        <button
          onClick={() => handleTabClick("mine")}
          className={`flex flex-1 items-center justify-center rounded-lg bg-orange-300 p-3 font-semibold hover:bg-orange-500 hover:text-white ${eventTab === "mine" ? "border-b-solid border-b-[5px] border-b-orange-700" : ""}`}
        >
          My Events
        </button>
        <button
          onClick={() => handleTabClick("others")}
          className={`flex flex-1 items-center justify-center rounded-lg bg-teal-300 p-3 font-semibold hover:bg-teal-500 hover:text-white ${eventTab !== "mine" ? "border-b-solid border-b-[5px] border-b-teal-700" : ""}`}
        >
          Others Events
        </button>
      </div>

      <div className="flex flex-1 flex-col">
        {eventTab === "mine" ? <MyEvents /> : <OthersEvents />}
      </div>
    </div>
  );
}
