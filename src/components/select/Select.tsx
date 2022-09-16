import { FC, SelectHTMLAttributes, useState } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
}

const Select: FC<SelectProps> = ({ options, name, value, ...props }) => {
  return (
    <div>
      <select
        name={name}
        id={name}
        value={value}
        {...props}
        className="shadow-sm rounded-lg border-2 border-gray-300"
      >
        <option value="">Please select</option>
        {options.map(({ label, value }: SelectOption, i: number) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
