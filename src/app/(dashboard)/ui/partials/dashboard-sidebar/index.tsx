"use client";

import { RxDashboard } from "react-icons/rx";
import { MdOutlineEventNote, MdOutlineMessage } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const buttonsList = [
    {
      name: "Dashboard",
      id: 1,
      link: "/dashboard",
      icon: (
        <RxDashboard className="h-[28px] w-[28px] lg:h-[32px] lg:w-[32px]" />
      ),
      active: true,
    },
    {
      name: "Events",
      id: 2,
      link: "/dashboard/events",
      icon: (
        <MdOutlineEventNote className="h-[28px] w-[28px] lg:h-[32px] lg:w-[32px]" />
      ),
      active: false,
    },
    {
      name: "Invites",
      id: 3,
      link: "/dashboard/invites",
      icon: (
        <MdOutlineMessage className="h-[28px] w-[28px] lg:h-[32px] lg:w-[32px]" />
      ),
      active: false,
    },
    {
      name: "Profile",
      id: 4,
      link: "/dashboard/profile",
      icon: <LuUser2 className="h-[28px] w-[28px] lg:h-[32px] lg:w-[32px]" />,
      active: false,
    },

    {
      name: "Logout",
      id: 5,
      icon: <GrLogout className="h-[28px] w-[28px] lg:h-[32px] lg:w-[32px]" />,
      active: false,
    },
  ];

  const [activeTab, setActiveTab] = useState("/dashboard");
  const pathname = usePathname();

  const [showSidebar, setShowSidebar] = useState(false);
  const handleCancel = () => {
    setShowSidebar(false);
  };
  const handleShow = () => {
    setShowSidebar(true);
  };

  return (
    <div className="flex-1">
      {/* <div>Side</div> */}
      {/* <div className="hh-[100px] flex items-center justify-center bg-white py-5"> */}
      <div className="flex h-[50px] w-full items-center justify-center bg-white">
        <Link
          href={"/"}
          className="hidden font-semibold text-pry md:block md:text-2xl"
        >
          Event Hive
        </Link>

        <Link
          href={"/"}
          className="hidden font-semibold text-pry sm:block md:hidden md:text-2xl"
        >
          <IoHome className="h-[32px] w-[32px]" />
        </Link>

        <button
          className="font-semibold text-pry sm:hidden md:text-2xl"
          onClick={() => {
            showSidebar ? handleCancel() : handleShow();
          }}
        >
          <MdOutlineCancelPresentation
            className={`h-[32px] w-[32px] ${showSidebar ? "block" : "hidden"}`}
          />
          <IoMenu
            className={`h-[32px] w-[32px] ${showSidebar ? "hidden" : "block"}`}
          />
        </button>
      </div>
      <div className="relative w-full">
        <ul
          className={`absolute flex w-full flex-col items-center gap-4 bg-white pb-20 pt-12 sm:static md:px-[5%] ${showSidebar ? "left-0" : "-left-[1000%]"}`}
        >
          {buttonsList.map((button) => (
            <li
              key={button.id}
              className={`smm:px-[5%] group relative rounded-[5px] p-5 hover:cursor-pointer hover:opacity-80 md:w-full md:py-3 ${button.link === pathname ? "bg-pry" : button.id === 5 ? "hover:bg-red-500" : "hover:bg-purple-300"}`}
            >
              {button.id === 5 ? (
                <button
                  className={`flex items-center gap-1 md:gap-2 ${button.link === pathname ? "text-white" : "text-black"}`}
                >
                  {button.icon}
                  <p className="absolute bottom-0 left-[50%] hidden translate-x-[-50%] text-xs font-semibold transition group-hover:block md:static md:block md:translate-x-0 md:text-sm md:transition-none lg:text-base">
                    {button.name}
                  </p>
                </button>
              ) : (
                <Link
                  href={button.link ? button.link : ""}
                  className={`flex items-center gap-1 md:gap-2 ${button.link === pathname ? "text-white" : "text-black"}`}
                >
                  {button.icon}
                  <p className="absolute bottom-0 left-[50%] hidden translate-x-[-50%] text-xs font-semibold transition group-hover:block md:static md:block md:translate-x-0 md:text-sm md:transition-none lg:text-base">
                    {button.name}
                  </p>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
