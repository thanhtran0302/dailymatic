import { format } from "date-fns";
import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";
import { RankedTask } from "../../../pages";
import PlusIcon from "../../icons/Plus";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  task: RankedTask;
}

const Task: FC<InputProps> = ({
  className,
  onChange,
  task: {
    id,
    isDone,
    title,
    createdAt,
    dueDate,
    timeSpentEstimate,
    description,
    priority,
  },
  ...props
}) => {
  const [isChecked, setChecked] = useState(!!isDone);
  const [taskDetailOpen, setTaskDetailOpen] = useState(false);

  return (
    <div className="flex flex-col w-full lg:w-6/12">
      <div
        className={`flex justify-between items-center p-4 hover:shadow-sm rounded-b-lg ${
          taskDetailOpen && "shadow-sm"
        }`}
      >
        <div className="flex items-center">
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
        <div
          className={`${
            taskDetailOpen && "rotate-45 bg-grey-100"
          } transition-transform cursor-pointer flex items-center justify-center hover:bg-grey-100 rounded-full w-7 h-7`}
          onClick={() => setTaskDetailOpen(!taskDetailOpen)}
        >
          <PlusIcon />
        </div>
      </div>
      <div
        className={`mx-4 p-4 relative border border-t-0 rounded-b-md shadow-md ${
          taskDetailOpen ? "block" : "hidden"
        }`}
      >
        {description && <p className="text-dark-400">{description}</p>}
        <div className="task-meta-data mt-4 px-3 flex justify-between">
          <div>
            <div className="created-at">
              <span className="text-dark-400 inline-block mr-2">
                Created at:
              </span>
              <span className="font-semibold">
                {format(new Date(createdAt), "dd MMM yyyy")}
              </span>
            </div>
            {dueDate && (
              <div className="due-date">
                <span className="text-dark-400 inline-block mr-2">
                  Due date:
                </span>
                <span className="font-semibold">
                  {format(new Date(dueDate), "dd MMM yyyy")}
                </span>
              </div>
            )}
            {timeSpentEstimate && (
              <div className="estimation-time">
                <span className="text-dark-400 inline-block mr-2">
                  Estimation time:
                </span>
                <span className="font-semibold">{timeSpentEstimate}</span>
              </div>
            )}
          </div>
          <div>
            <div className="priority">
              <span className="text-dark-400 inline-block mr-2">Priority:</span>
              <span className="font-semibold">{priority}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
