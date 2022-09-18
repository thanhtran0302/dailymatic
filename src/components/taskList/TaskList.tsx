import axios from "axios";
import { FC } from "react";
import { RankedTask } from "../../../pages";
import { API_URL } from "../../constants/api";
import Checkbox from "../checkbox/Checkbox";

interface TaskProps {
  tasks: RankedTask[];
}

const TaskList: FC<TaskProps> = ({ tasks }) => {
  const onChange = async (id: string) => {
    await axios.patch(`${API_URL}/task/done/${id}`);
  };

  return (
    <div className="flex flex-col items-center">
      {tasks.map(({ title, id, isDone }: RankedTask, index: number) => {
        return (
          <div
            key={index}
            className="px-3 py-4 rounded-lg group flex justify-between hover:shadow-md w-9/12 lg:w-5/12 items-center"
          >
            <Checkbox
              type="checkbox"
              defaultChecked={!!isDone}
              label={title}
              id={title}
              onChange={async () => {
                await onChange(id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
