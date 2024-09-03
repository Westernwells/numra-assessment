"use client";

import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import RegisteredUsersTable from "../registered-users-table";
import InviteForm from "../invite-form";
import PrimaryButton from "~/app/ui/components/buttons/primary-button";
import Link from "next/link";

export default function EventDetailsPageDashboard() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const [currentView, setCurrentView] = useState("eventDetails"); //

  const [createInvite, setCreateInvite] = useState(false);
  const [newInvitesList, setNewInvitesList] = useState<FormData[]>([]);
  return (
    <>
      {/* <div className="flex w-full flex-col">
      {currentView === "registeredUsersView" ? (
        <div className="relative flex-1 bg-orange-300 pt-4">
          <button
            onClick={() => setCurrentView("eventDetails")}
            className="absolute -top-6 left-0 rounded-lg bg-pry px-3 py-2 text-xs text-white sm:text-sm md:text-base"
          >
            {"< back"}
          </button>

          <div className="flex flex-col">
            <h4 className="mb-8 text-center text-xl font-semibold md:text-2xl">
              Here is the list of people that have registered for the event
            </h4>
            <div>
              <RegisteredUsersTable
                data={myEventData?.registered ? myEventData?.registered : []}
              />
            </div>
          </div>
        </div>
      ) : currentView === "invitesView" ? (
        <div className="flex-1 bg-orange-300 pt-4">
          <div className="relative">
            <button
              onClick={() => {
                createInvite
                  ? setCreateInvite(false)
                  : setCurrentView("eventDetails");
              }}
              className="absolute -top-10 left-0 rounded-lg bg-pry px-3 py-2 text-xs text-white sm:text-sm md:text-base"
            >
              {"< back"}
            </button>
          </div>

          {createInvite ? (
            <div>
              <h4 className="mb-8 text-center text-xl font-semibold md:text-2xl">
                Create invite
              </h4>
              <div>
                <InviteForm list={newInvitesList} setList={setNewInvitesList} />

                {newInvitesList.length ? (
                  <ul className="mt-8">
                    {newInvitesList.map((item, count) => (
                      <li
                        key={count}
                        className="flex items-center justify-between"
                      >
                        <p>{item?.email}</p>
                        <button
                          onClick={() => {}}
                          className="text-xl font-bold text-red-500"
                        >
                          x
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div>Nothing added yet</div>
                )}
                <div className="mx-auto max-w-[200px]">
                  <PrimaryButton label="Submit" className="mt-10" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <h4 className="mb-8 text-center text-xl font-semibold md:text-2xl">
                Here is the list of people that have registered for the event
              </h4>
              <div>
                <RegisteredUsersTable
                  inviteType
                  data={
                    myEventData?.sentInvites?.invitedLIst
                      ? myEventData?.sentInvites?.invitedLIst
                      : []
                  }
                />
              </div>
            </div>
          )}

          {!createInvite && (
            <button
              onClick={() => setCreateInvite(true)}
              className="group absolute bottom-[5%] right-[5%] z-10 flex items-center gap-1 rounded-full bg-white ease-in hover:bg-pry hover:px-2 hover:py-1 active:bg-blue-600"
            >
              <IoMdAddCircle className="h-[40px] w-[40px] text-pry ease-in group-hover:text-white sm:h-[48px] sm:w-[48px] md:h-[52px] md:w-[52px] lg:h-[64px] lg:w-[64px]" />
              <p className="hidden text-xs font-semibold text-white duration-1000 ease-in group-hover:block sm:text-sm md:text-[18px] lg:text-base">
                New invite
              </p>
            </button>
          )}
        </div>
      ) : (
        <div className="mx-auto flex w-[90%] flex-col items-center justify-center overflow-y-auto pb-10">
          <div
            className="hh-[50vh] relative flex w-[100%] flex-col items-center justify-end gap-[3%] rounded-[10px] bg-cover bg-center px-[5%] py-[10%] md:flex-row"
            style={{
              backgroundImage: "url('/eventDetailsImage.png')",
            }}
          >
            <div className="mt-12 w-full min-w-[250px] max-w-[400px] rounded-[10px] bg-white p-4 drop-shadow-lg lg:mt-0">
              {type !== "mine" && (
                <p className="mb-2 text-center text-2xl font-semibold text-green-500">
                  Registered
                </p>
              )}
              <p>Date & time</p>
              <p className="my-3 text-xs text-grayText md:text-sm lg:text-base">
                Saturdat, March 18 2023, 9.30PM
              </p>

              {type === "mine" ? (
                <div className="mt-4 flex flex-col items-center gap-2">
                  <PrimaryButton
                    label={`Registered users`}
                    bgClr={`${data?.reminder ? "bg-grayPlain" : "bg-pry"}`}
                    onClick={() => setCurrentView("registeredUsersView")}
                  />
                  <PrimaryButton
                    label={"Invites"}
                    // bgClr={`bg-teal-300`}
                    className="bg-red-600 hover:bg-black"
                    onClick={() => setCurrentView("invitesView")}
                  />
                </div>
              ) : (
                <div className="mt-4 flex flex-col items-center gap-2">
                  <PrimaryButton
                    label={`${data?.reminder ? "Remove reminder" : "Add reminder"}`}
                    bgClr={`${data?.reminder ? "bg-grayPlain" : "bg-pry"}`}
                  />
                  <PrimaryButton
                    label={"Cancel registration"}
                    className="bg-red-600 hover:bg-black"
                  />
                </div>
              )}

            </div>
          </div>

          <div className="mt-5">
            <div className="textt-white">
              <h3 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
                {type === "mine" ? myEventData?.title : data?.title}
              </h3>
              <h5 className="mb-2 mt-3 text-base font-semibold md:text-xl lg:text-2xl">
                {type === "mine" ? myEventData?.location : data?.location}
              </h5>
              <p className="text-xs md:text-sm lg:text-base">
                {type === "mine" ? myEventData?.description : data?.description}
              </p>
            </div>
            {currentUser?.id === myEventData?.organizerInfo?.organizerId ||
            currentUser?.id === data?.organizerInfo?.organizerId ? (
              <div className="mx-auto mt-8 flex max-w-[250px] flex-col gap-2 sm:max-w-[500px] sm:flex-row sm:items-center">
                <PrimaryButton
                  label="Edit event"
                  className="bg-black hover:shadow-lg"
                  bgClr="bg-pry "
                />
                <PrimaryButton
                  label="Delete event"
                  className="bg-black hover:bg-red-800"
                  bgClr="bg-black hover:text-black hover:bg-white hover:border-solid hover:border-2 hover:border-graybg hover:shadow-lg "
                />
              </div>
            ) : (
              <div className="mt-5 flex items-center gap-2">
                <p className="font-semibold">Organizer: </p>
                <div className="">
                  <p>
                    {type === "mine"
                      ? myEventData?.organizerInfo?.name
                      : data?.organizerInfo?.name}
                    (
                    <span className="text-blue-600">
                      {type === "mine"
                        ? myEventData?.organizerInfo?.email
                        : data?.organizerInfo?.email}
                    </span>
                    )
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div> */}
      <div className="flex w-full flex-col">
        <div className="relative mb-8 mt-4 flex-1 bg-orange-300">
          <Link
            href={"/dashboard/events"}
            className="absolutee -top-6 left-0 rounded-lg bg-pry px-3 py-2 text-xs text-white sm:text-sm md:text-base"
          >
            {"< back"}
          </Link>
        </div>
        This is the product details page!
      </div>
    </>
  );
}
