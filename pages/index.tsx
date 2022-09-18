import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import NewTask from "../src/components/newTask/NewTask";
import Task from "../src/components/task/Task";
import { API_URL } from "../src/constants/api";

export interface RankedTask {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  priority: string;
  dueDate: Date | null;
  timeSpentEstimate: string | null;
  isDone: Date | null;
}

interface HomeProps {
  tasks: RankedTask[];
}

const Home: NextPage<HomeProps> = ({ tasks }) => {
  return (
    <div className="mx-auto text-dark-500">
      <Head>
        <title>Focus of the day</title>
        <meta
          name="description"
          content="Today's tasks that you should focus on"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-orange-500 text-5xl font-bold text-center mt-28">
          Today&rsquo;s focus
        </h1>

        <div className="tasks mt-4">
          <Task tasks={tasks} />
        </div>
      </div>
      <NewTask />
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${API_URL}/task/focus`);

  return {
    props: {
      tasks: data,
    },
  };
}

export default Home;
