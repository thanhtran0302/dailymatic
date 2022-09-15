import axios from "axios";
import { useForm } from "react-hook-form";
import { ChangeEvent, FormEvent } from "react";
import Input from "../src/components/input/Input";

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

const CreateTask = () => {
  const { register, getValues, setValue } = useForm<CreateTask>();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { timeSpentEstimate, dueDate, ...data } = getValues();
    const a = await axios.post("http://localhost:4001/task", {
      ...data,
      ...(dueDate && { dueDate }),
      ...(timeSpentEstimate && {
        timeSpentEstimate: `${timeSpentEstimate.hour}:${timeSpentEstimate.minute}`,
      }),
    });
  };

  return (
    <div className="text-dark-500">
      <form className="w-5/12 m-auto mt-10" onSubmit={onSubmit}>
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
        <div>
          <select
            {...register("timeSpentEstimate.hour")}
            id="hour"
            value={getValues("timeSpentEstimate.hour")}
            className="shadow-sm rounded-lg border-2 border-gray-300"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          >
            <option value="00" selected>
              00
            </option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
          </select>
          <select
            {...register("timeSpentEstimate.minute")}
            id="minute"
            className="shadow-sm rounded-lg border-2 border-gray-300"
          >
            <option value="00" selected>
              00
            </option>
            <option value="30">30</option>
          </select>
        </div>
        <div>
          <select
            {...register("priority")}
            id="priotity"
            className="shadow-sm rounded-lg border-2 border-gray-300"
            required
          >
            <option value="LOWEST">LOWEST</option>
            <option value="LOW">LOW</option>
            <option value="NORMAL" selected>
              NORMAL
            </option>
            <option value="HIGH">HIGH</option>
            <option value="HIGHEST">HIGHEST</option>
            <option value="URGENT">URGENT</option>
            <option value="CRITICAL">CRITICAL</option>
          </select>
        </div>
        <button type="submit">Create task</button>
      </form>
    </div>
  );
};

export default CreateTask;
