import CreateTask from "../createTask/CreateTask";
import Modal, { useModal } from "../modal/Modal";

const NewTask = () => {
  const { isModalOpen, setModalOpen } = useModal();

  return (
    <div className="menu absolute bottom-16 right-10">
      <button onClick={() => setModalOpen(true)}>Add new task</button>
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
