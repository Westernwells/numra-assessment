import React from "react";

interface InputProps {
  type: string;
  name?: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const PrimaryInput: React.FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  disabled,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default PrimaryInput;
