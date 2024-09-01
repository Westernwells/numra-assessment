"use client";

import Image from "next/image";
import React, { useState } from "react";
import PrimaryButton from "~/app/ui/components/buttons/primary-button";
import PrimaryModal from "~/app/ui/components/modals/primary-modal";
import FormEvent from "./FormEvent";

export default function MakeYourEvent() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-sec px-[20%] py-10 text-center">
        <p className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          Make your own Event
        </p>
        <p className="my-4 text-sm md:text-base lg:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <div className="w-full max-w-[300px]">
          <PrimaryButton label="Create Event" onClick={handleOpenModal} />
        </div>
      </div>

      <PrimaryModal isVisible={isModalVisible} onClose={handleCloseModal}>
        <div className="mx-auto flex w-[90%] flex-col items-center justify-center bg-orange-400">
          <FormEvent />
        </div>
      </PrimaryModal>
    </div>
  );
}
