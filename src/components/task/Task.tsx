import { FC } from "react";
import EditIcon from "../../icons/Edit";

interface Task {
  title: string;
  isDone: boolean;
}

interface TaskProps {
  tasks: Task[];
}

const Task: FC<TaskProps> = ({ tasks }) => (
  <div className="flex flex-col items-center">
    {tasks.map(({ title, isDone }: Task, index: number) => {
      return (
        <div
          key={index}
          className="px-3 py-4 rounded-lg group flex justify-between hover:bg-gray-50 hover:shadow-sm w-9/12 lg:w-5/12 items-center"
        >
          <div className={`${isDone && "line-through text-gray-400"}`}>
            {title}
          </div>
          <div className="visible group-hover:visible cursor-pointer hover:bg-gray-100 p-2 rounded-full">
            <EditIcon />
          </div>
        </div>
      );
    })}
  </div>
);

export default Task;
