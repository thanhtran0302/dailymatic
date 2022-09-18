import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: FC<InputProps> = ({
  label,
  id,
  className,
  onChange,
  defaultChecked,
  ...props
}) => {
  const [isChecked, setChecked] = useState(defaultChecked);

  return (
    <div className="flex items-center">
      <input
        {...props}
        id={id}
        defaultChecked={defaultChecked}
        className={`shadow-sm rounded-sm border-2 border-gray-300 h-5 w-5 mr-2 ${className}`}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(e);
          }
          setChecked(e.target.checked);
        }}
      />
      <label
        htmlFor={id}
        className={`${isChecked && "text-grey-500 line-through"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
