import axios from "axios";
import { FC } from "react";
import { RankedTask } from "../../../pages";
import { API_URL } from "../../constants/api";
import Task from "../task/Task";

interface TaskProps {
  tasks: RankedTask[];
}

const TaskList: FC<TaskProps> = ({ tasks }) => {
  const onChange = async (id: string) => {
    await axios.patch(`${API_URL}/task/done/${id}`);
  };

  return (
    <div className="flex flex-col items-center px-3">
      {tasks.map((task: RankedTask, index: number) => {
        return (
          <Task
            task={task}
            key={index}
            onChange={async () => {
              await onChange(task.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
