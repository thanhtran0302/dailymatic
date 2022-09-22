import PlusIcon from "../../icons/Plus";
import CreateTask from "../createTask/CreateTask";
import Modal, { useModal } from "../modal/Modal";

const NewTask = () => {
  const { isModalOpen, setModalOpen } = useModal();

  return (
    <div className="menu absolute bottom-16 right-10">
      <div
        onClick={() => setModalOpen(true)}
        className="border shadow-md hover:shadow-lg flex items-center justify-center rounded-full cursor-pointer"
      >
        <PlusIcon />
      </div>
      <Modal
        title="Create a new task"
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <CreateTask setModalAction={setModalOpen} />
      </Modal>
    </div>
  );
};

export default NewTask;
