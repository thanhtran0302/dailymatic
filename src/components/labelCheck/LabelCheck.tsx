import { FC, useState } from "react";

export interface LabelCheckProps {
  label: string;
  option: string;
  onChange?: (value: boolean) => void;
}

const LabelCheck: FC<LabelCheckProps> = ({ label, option, onChange }) => {
  const [value, setValue] = useState(false);

  return (
    <div className="flex flex-col">
      <p className="font-bold">{label}</p>
      <div
        onClick={() => {
          setValue(!value);

          if (onChange) {
            onChange(!value);
          }
        }}
        className={`
          text-center
          cursor-pointer p-2 border-2 rounded-md border-grey-200
          ${value && `border-blue-500`}
        `}
      >
        {option}
      </div>
    </div>
  );
};

export default LabelCheck;
