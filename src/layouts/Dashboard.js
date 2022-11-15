import { SmileOutlined } from "@ant-design/icons";
import { Result, Divider, Typography } from "antd";
import React from "react";
const { Title } = Typography;
const Dashboard = () => {
  console.log("we are in dashboard!");
  return (
    <>
      <Divider orientation="left" orientationMargin={0}>
        <Title level={5}>My Dashboard</Title>
      </Divider>
      <Result
        icon={<SmileOutlined />}
        title="Welcome to your dashboard!"
        //extra={<Button type="primary">Next</Button>}
      />
    </>
  );
};
export default Dashboard;
