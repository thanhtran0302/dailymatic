import axios from "axios";
import { useForm } from "react-hook-form";
import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction } from "react";
import Input from "../input/Input";
import Select from "../select/Select";
import { API_URL } from "../../constants/api";

interface CreateTask {
  title: string;
  priority: string;
  description?: string;
  dueDate?: Date;
  timeSpentEstimate?: {
    hour: string;
    minute: string;
  };
}

interface CreateTaskProps {
  setModalAction: Dispatch<SetStateAction<boolean>>;
}

const CreateTask: FC<CreateTaskProps> = ({ setModalAction }) => {
  const { getValues, setValue } = useForm<CreateTask>();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { timeSpentEstimate, dueDate, ...data } = getValues();
    const payload = {
      ...data,
      ...(dueDate && { dueDate }),
      ...(timeSpentEstimate && {
        timeSpentEstimate: `${timeSpentEstimate.hour}:${timeSpentEstimate.minute}`,
      }),
    };

    await axios.post(`${API_URL}/task`, payload);
    setModalAction(false);
  };

  return (
    <div className="text-dark-500">
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          label="Title"
          id="title"
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
            setValue("title", value)
          }
          required
        />
        <Input
          type="text"
          label="Description"
          id="description"
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
            setValue("description", value);
          }}
        />
        <Input
          type="date"
          label="Due date"
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
            setValue("dueDate", new Date(value))
          }
        />
        <div className="flex py-2">
          <Select
            options={[
              { value: "01", label: "01" },
              { value: "02", label: "02" },
              { value: "03", label: "03" },
              { value: "04", label: "04" },
            ]}
            name="select-hour"
            value={getValues("timeSpentEstimate.hour")}
            onChange={({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
              setValue("timeSpentEstimate.hour", value)
            }
          />
          <Select
            options={[
              { value: "00", label: "00" },
              { value: "30", label: "30" },
            ]}
            name="select-minute"
            value={getValues("timeSpentEstimate.minute")}
            onChange={({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
              setValue("timeSpentEstimate.minute", value)
            }
          />
        </div>
        <div>
          <Select
            options={[
              { value: "NORMAL", label: "NORMAL" },
              { value: "LOWEST", label: "LOWEST" },
              { value: "LOW", label: "LOW" },
              { value: "HIGH", label: "HIGH" },
              { value: "HIGHEST", label: "HIGHEST" },
              { value: "URGENT", label: "URGENT" },
              { value: "CRITICAL", label: "CRITICAL" },
            ]}
            name="select-priority"
            value={getValues("priority")}
            onChange={({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
              setValue("priority", value)
            }
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
