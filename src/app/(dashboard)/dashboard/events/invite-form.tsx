type FormData = {
  name: string;
  email: string;
};

interface FormProps {
  // formData: FormData;
  list: FormData[];
  setList: React.Dispatch<React.SetStateAction<FormData[]>>;
}

import React, { useState } from "react";

const InviteForm: React.FC<FormProps> = ({ list, setList }) => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    // if (!formData.name) {
    //   newErrors.name = "Name is required";
    // }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // console.log("Form submitted:", formData);
      setErrors({});
      const newList = [...list, formData];
      setList(newList);
      setFormData({ name: "", email: "" });
      setErrors({});

      // Perform form submission logic here (e.g., API call)
    }
  };

  return (
    <div className="mx-auto max-w-sm rounded bg-white p-4 shadow-md">
      {/* <div className="mb-4">
        <label htmlFor="name" className="mb-2 block font-bold text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-gray-700"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div> */}

      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block font-bold text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded border px-3 py-2 text-gray-700"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      <button
        // type="submit"
        onClick={handleSubmit}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  );
};

export default InviteForm;
