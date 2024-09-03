"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsAlarmFill, BsAlarm } from "react-icons/bs";

interface DetailsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  details?: string[];
}

// export default function PrimaryCard() {
const PrimaryCard: React.FC<DetailsCardProps> = ({
  title,
  description,
  imageUrl,
  details,
}) => {
  const [reminderOn, setReminderOn] = useState(false);
  return (
    <div className="group relative flex h-[420px] w-full flex-col rounded-[10px] bg-white p-[5%] hover:bg-grayPlain">
      <Link href={"/event/owanbe"} className="flex w-full flex-col">
        <div
          className="relative flex h-[240px] w-[100%] flex-col items-center rounded-[5px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/eventImage.png')",
          }}
        >
          <p className="absolute left-3 top-3 rounded-[5px] bg-white px-2 py-[0.5px] text-sm text-pry">
            Free
          </p>
        </div>
        <div className="mt-3 flex flex-col text-black">
          <h5 className="text-xs group-hover:font-semibold md:text-sm lg:text-base">
            BestSelller Book Bootcamp -write, Market & Publish Your Book
            -Lucknow
          </h5>
          <div className="mt-3 flex flex-1 flex-col justify-end gap-3">
            <p className="text-sm text-pry">Saturdat, March 18, 9.30PM</p>
            <p className="text-[10px] text-grayText md:text-[12px] lg:text-[14px]">
              ONLINE EVENT - Attend anywhere
            </p>
          </div>
        </div>
      </Link>

      {reminderOn ? (
        <BsAlarmFill
          className={`absolute bottom-2 right-2 z-10 h-[20px] w-[20px] text-blue-700 hover:cursor-pointer lg:h-[25px] lg:w-[25px]`}
          onClick={() => setReminderOn(!reminderOn)}
        />
      ) : (
        <BsAlarm
          className={`absolute bottom-2 right-2 z-10 h-[20px] w-[20px] text-red-700 hover:cursor-pointer lg:h-[25px] lg:w-[25px]`}
          onClick={() => setReminderOn(!reminderOn)}
        />
      )}
    </div>
  );
};

export default PrimaryCard;
