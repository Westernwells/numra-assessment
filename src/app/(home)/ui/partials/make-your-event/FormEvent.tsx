import React, { useState } from "react";
import PrimaryButton from "~/app/ui/components/buttons/primary-button";
import ImageUpload from "~/app/ui/components/image-upload";

interface FormEventProps {
  // onSubmit: (formData: EventFormData) => void;
}

interface EventFormData {
  title: string;
  venue: string;
  time: string;
  date: string;
  email: string;
  description: string;
}

const FormEvent: React.FC<FormEventProps> = () => {
  const [formData, setFormData] = useState<EventFormData>({
    title: "",
    venue: "",
    time: "",
    date: "",
    email: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      description: value,
    });
  };

  const handleFormSubmit = (formData: EventFormData) => {
    console.log("Form Submitted:", formData);
    // Process form data here
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFormSubmit(formData);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div>
          <h4 className="mb-4 text-center text-2xl font-semibold md:text-3xl lg:text-4xl">
            New Event
          </h4>
          <div>
            <div className="">
              <label
                htmlFor="title"
                className="mb-2 block font-bold text-gray-700"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="venue"
                className="mb-2 block font-bold text-gray-700"
              >
                Venue:
              </label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="mb-2 block font-bold text-gray-700"
              >
                Time:
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="mb-2 block font-bold text-gray-700"
              >
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-bold text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-2"
                required
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="title"
              className="mb-2 block font-bold text-gray-700"
            >
              Event Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleDescriptionChange}
              className="w-full rounded border border-gray-300 px-3 py-2"
              required
            />
          </div>
        </div>

        {/* <button
          type="submit"
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        >
          Submit
        </button> */}
        <div className="mt-10">
          <PrimaryButton label="Create Event" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default FormEvent;
