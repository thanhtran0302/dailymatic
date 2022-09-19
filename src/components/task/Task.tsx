import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";
import { RankedTask } from "../../../pages";

interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
  task: RankedTask;
}

const Task: FC<TaskProps> = ({
  className,
  onChange,
  task: { title, id, isDone },
  ...props
}) => {
  const [isChecked, setChecked] = useState(!!isDone);

  return (
    <div className="flex items-center">
      {"hello"}
      <input
        {...props}
        type="checkbox"
        id={id}
        defaultChecked={!!isDone}
        className={`
          shadow-sm rounded-sm border-2 border-gray-300 h-5 w-5 mr-2 ${className}
        `}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(e);
          }
          setChecked(e.target.checked);
        }}
      />
      <label
        htmlFor={id}
        className={`${
          isChecked && "text-grey-500 line-through"
        } line-clamp-2 md:line-clamp-1`}
      >
        {title}
      </label>
    </div>
  );
};

export default Task;
