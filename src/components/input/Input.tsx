import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        id={id}
        className="shadow-sm rounded-lg border-2 border-gray-300"
      />
    </div>
  );
};

export default Input;
