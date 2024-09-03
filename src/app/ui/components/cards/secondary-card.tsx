"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsAlarmFill, BsAlarm } from "react-icons/bs";
import PrimaryModal from "../modals/primary-modal";
import PrimaryButton from "../buttons/primary-button";
import { currentUser } from "~/app/data";
import RegisteredUsersTable from "~/app/(dashboard)/dashboard/events/registered-users-table";
import { IoMdAddCircle } from "react-icons/io";
import InviteForm from "~/app/(dashboard)/dashboard/events/invite-form";

interface DetailsCardProps {
  imageUrl: string;
  details?: string[];
  type?: string; // mine || others
  data?: {
    id: number;
    title: string;
    eventId: number;
    location: string;
    description: string;
    date: string;
    time: string;
    reminder: boolean;
    organizerInfo: {
      organizerId: number;
      name: string;
      email: string;
    };
  };

  myEventData?: {
    id: number;
    eventId: number;
    title: string;
    location: string;
    description: string;
    date: string;
    time: string;
    reminder: boolean;
    organizerInfo: {
      organizerId: number;
      name: string;
      email: string;
    };
    sentInvites: {
      // eventId: number;
      invitedLIst: {
        id: number;
        name: string;
        email: string;
      }[];
    };
    registered: {
      id: number;
      name: string;
      email: string;
    }[];
  };

  // data?: {};
}

type FormData = {
  name: string;
  email: string;
};

// export default function PrimaryCard() {
const SecondaryCard: React.FC<DetailsCardProps> = ({
  imageUrl,
  details,
  type,
  data,
  myEventData,
}) => {
  const [reminderOn, setReminderOn] = useState(false);

  return (
    <div>
      <div className="group relative flex h-[420px] w-full flex-col rounded-[10px] bg-white p-[5%] hover:bg-grayPlain">
        <Link
          href={`/dashboard/events/${type === "mine" ? myEventData?.id : data?.id}`}
          className="flex flex-1 flex-col"
        >
          {/* <button onClick={handleOpenModal} className="w-full"> */}
          <div className="flex w-full flex-1 flex-col">
            <div
              className="relative flex h-[240px] w-[100%] flex-col items-center rounded-[5px] bg-cover bg-center"
              style={{
                backgroundImage: "url('/eventImage.png')",
              }}
            >
              {type !== "mine" && (
                <p className="absolute left-3 top-3 rounded-[5px] bg-white px-2 py-[0.5px] text-sm text-pry">
                  Free
                </p>
              )}
            </div>
            <div className="mt-3 flex flex-1 flex-col text-black">
              <h5 className="text-xs group-hover:font-semibold md:text-sm lg:text-base">
                {type === "mine" ? myEventData?.title : data?.title}
              </h5>

              <div className="mt-4 flex flex-1 flex-col justify-end gap-3">
                <p className="text-sm text-pry">Saturdat, March 18, 9.30PM</p>

                <p className="text-[10px] text-grayText md:text-[12px] lg:text-[14px]">
                  {type === "mine" ? myEventData?.location : data?.location}
                </p>
              </div>
            </div>
          </div>
          {/* </button> */}
        </Link>

        {myEventData?.reminder || data?.reminder ? (
          <BsAlarmFill
            className={`absolute bottom-2 right-2 z-10 h-[20px] w-[20px] text-blue-700 lg:h-[25px] lg:w-[25px]`}
            // onClick={() => setReminderOn(!reminderOn)}
          />
        ) : (
          <BsAlarm
            className={`absolute bottom-2 right-2 z-10 h-[20px] w-[20px] text-red-700 lg:h-[25px] lg:w-[25px]`}
            // onClick={() => setReminderOn(!reminderOn)}
          />
        )}
      </div>
    </div>
  );
};

export default SecondaryCard;
