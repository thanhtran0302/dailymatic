import { FC } from "react";

interface MenuItemProps {
  title: string;
}

const MenuItem: FC<MenuItemProps> = ({ title }) => (
  <p className="p-4 cursor-pointer hover:bg-gray-50">{title}</p>
);

export default MenuItem;
