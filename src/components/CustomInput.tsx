import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";

interface ICustomInput {
  label?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  id: string;
}

export const CustomInput: React.FC<ICustomInput> = ({
  label,
  type,
  id,
}) => {
  const [inputType, setInputType] = useState("password");

  const handleChangeType = (): void => {
    if (inputType == "password") setInputType("text");
    else setInputType("password");
  };

  return (
    <div className="">
      <label htmlFor={id} className="block text-sm text-secondary-brown">
        {label}
      </label>
      <div className="relative">
        <input
          type={type == "password" ? inputType : type}
          className="placeholder-transparent bg-white mt-1 block w-full rounded p-3 py-2.5 text-sm border border-border-color outline-primary-blue/50"
          id={id}
        />
        {type == "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {inputType == "password" ? (
              <FiEye onClick={handleChangeType} />
            ) : (
              <FiEyeOff onClick={handleChangeType} />
            )}
          </button>
        )}

        {type == "data" && (
          <SlCalender className="absolute right-3 top-1/2 -translate-y-1/2" />
        )}
      </div>
    </div>
  );
};
