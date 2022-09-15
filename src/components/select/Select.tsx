import { FC, SelectHTMLAttributes, useState } from "react";

interface SelectOption {
  label: string;
  value: string;
  isDefault?: boolean;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
}

const Select: FC<SelectProps> = ({ options, name, value, ...props }) => {
  return (
    <div>
      <select name={name} id={name} value={value} {...props}>
        {options.map(({ label, value, isDefault }: SelectOption, i: number) => (
          <option
            key={i}
            value={value}
            selected={isDefault ? isDefault : false}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
