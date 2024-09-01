"use client";

import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import FormEvent from "~/app/(home)/ui/partials/make-your-event/FormEvent";
import SecondaryCard from "~/app/ui/components/cards/secondary-card";
import PrimaryModal from "~/app/ui/components/modals/primary-modal";

import { eventsDb } from "~/app/data";

export default function MyEvents() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);
  return (
    <div className="bg-gree-400 relative flex-1">
      <h1>My Events</h1>
      <div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {eventsDb.mine.map((item) => (
            <li key={item.id}>
              <SecondaryCard type="mine" myEventData={item} />
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleOpenModal}
        className="group fixed bottom-[5%] right-[5%] z-10 flex items-center gap-1 rounded-full bg-white ease-in hover:bg-pry hover:px-2 hover:py-1 active:bg-blue-600"
      >
        <IoMdAddCircle className="h-[40px] w-[40px] text-pry ease-in group-hover:text-white sm:h-[48px] sm:w-[48px] md:h-[52px] md:w-[52px] lg:h-[64px] lg:w-[64px]" />
        <p className="hidden text-xs font-semibold text-white duration-1000 ease-in group-hover:block sm:text-sm md:text-[18px] lg:text-base">
          Create Event
        </p>
      </button>

      <PrimaryModal isVisible={isModalVisible} onClose={handleCloseModal}>
        <div className="mx-auto flex w-[90%] flex-col items-center justify-center bg-orange-400">
          <FormEvent />
        </div>
      </PrimaryModal>
    </div>
  );
}
