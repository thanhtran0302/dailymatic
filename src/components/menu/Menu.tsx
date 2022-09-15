import { useState } from "react";
import BurgerMenuIcon from "../../icons/BurgerMenu";
import MenuItem from "../menuItem/MenuItem";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="menu absolute bottom-16 right-10">
      <div
        className={`
        menu-items rounded-md shadow-md mb-2
        ${isOpen ? "block" : "hidden"}
      `}
      >
        <MenuItem title="Backlog" />
        <MenuItem title="Add new task" />
      </div>
      <div
        onClick={() => setOpen(!isOpen)}
        className="w-14 h-14 cursor-pointer rounded-full p-2 shadow-md hover:shadow-lg z-10 float-right"
      >
        <BurgerMenuIcon />
      </div>
    </div>
  );
};

export default Menu;
