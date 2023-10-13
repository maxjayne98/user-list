import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {}

const Input = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-col text-gray-100">
      {label && (
        <label htmlFor="name" className="text-sm">
          {label}{" "}
        </label>
      )}
      <input className="py-1 px-2 rounded-md  text-xs" {...props} />
    </div>
  );
};

export default Input;
