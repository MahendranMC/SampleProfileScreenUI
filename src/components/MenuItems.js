import {
  ProjectFilled,
  HomeFilled,
  BankFilled,
  AppstoreFilled,
  CommentOutlined,
  SettingFilled,
  FileTextFilled
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

//This can be fetched from API based on
//loggen in user permissions

const MenuItems = () => {
  const menuItems = [
    {
      key: "1",
      icon: <HomeFilled />,
      label: <Link to="/home">Home</Link>
    },
    {
      key: "2",
      icon: <ProjectFilled />,
      label: <Link to="/projects">Projects</Link>
    },
    {
      key: "3",
      icon: <AppstoreFilled />,
      label: <Link to="/dashboard">Dashboard</Link>
    },
    {
      key: "4",
      icon: <CommentOutlined />,
      label: <Link to="/messages">Messages</Link>
    },
    {
      key: "5",
      icon: <FileTextFilled />,
      label: <Link to="/documents">Documents</Link>
    },
    {
      key: "6",
      icon: <BankFilled />,
      label: <Link to="/organizations">Organizations</Link>
    },
    {
      key: "7",
      icon: <SettingFilled />,
      label: <Link to="/settings">Settings</Link>
    }
  ];
  return (
    <Menu
      mode="inline"
      theme="light"
      defaultSelectedKeys={["1"]}
      items={menuItems}
    ></Menu>
  );
};
export default MenuItems;
