import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";

const items = [
  {
    label: "Edit Profile",
    key: "1",
    danger: true
  },
  {
    label: "Log Out",
    key: "2",
    danger: true
  }
];
const Navigator = () => {
  const onClick = ({ key }) => {};
  return (
    <div className="space-align-container">
      <div className="space-align-block">
        <Space align="center">
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            shape="square"
            size="default"
          />
          <Dropdown
            menu={{
              items,
              onClick
            }}
          >
            <Space>
              Stacy Keller
              <DownOutlined />
            </Space>
          </Dropdown>
        </Space>
      </div>
    </div>
  );
};
export default Navigator;
