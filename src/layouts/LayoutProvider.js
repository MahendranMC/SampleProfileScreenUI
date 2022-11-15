import React, { lazy, Suspense, useState } from "react";
import "antd/dist/antd.css";
import "../index.css";
import { PlusOutlined } from "@ant-design/icons";
import {
  Layout,
  Typography,
  Button,
  Drawer,
  Image,
  Avatar,
  Badge,
  Row,
  Col,
  Divider,
  Result,
  PageHeader,
  Card
} from "antd";
import { Switch, Route } from "react-router-dom";
import Navigator from "../components/Navigator";

const { Header, Sider, Content } = Layout;

const ProfileUpdate = lazy(() => import("./ProfileUpdate"));
const DashBoard = lazy(() => import("./Dashboard"));
const MenuItems = lazy(() => import("../components/MenuItems"));
const { Text } = Typography;
const { Meta } = Card;
const PageNotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
  );
};
const LayoutProvider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const onClose = () => {
    setOpenDrawer(false);
  };
  return (
    <Layout className="main-layout">
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed((prevState) => !prevState)}
      >
        <div className="logo">
          <h3>Logo</h3>
        </div>
        <MenuItems />
      </Sider>
      <Layout className="site-layout" style={{ background: "#fff" }}>
        <PageHeader
          className="site-page-header-responsive site-layout-background"
          title={
            <>
              <Text strong>Good Morning, Mahendran</Text>
              <br />
              <Text type="secondary">{new Date().toLocaleDateString()}</Text>
            </>
          }
          extra={[
            <Button
              key="1"
              type="primary"
              danger
              onClick={showDrawer}
              icon={<PlusOutlined />}
            >
              Add Project
            </Button>,
            <Navigator key="2" />
          ]}
          footer={false}
        >
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              minHeight: 280
              //height: "100vh"
            }}
          >
            <Suspense fallback={"loading..."}>
              <Switch>
                <Route exact path="/" component={ProfileUpdate} />
                <Route exact path="/home" component={ProfileUpdate} />
                <Route exact path="/dashboard" component={DashBoard} />
                <Route exact path="*" component={PageNotFound} />
              </Switch>
            </Suspense>
          </Content>
        </PageHeader>
        <Drawer
          title="User Profile"
          placement="right"
          onClose={onClose}
          open={openDrawer}
        >
          <Card
            hoverable
            bordered={false}
            width={180}
            cover={
              <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
            }
          >
            <Meta title="Stacy Keller" description="stacykeller@xyz.com" />
          </Card>
        </Drawer>
      </Layout>
    </Layout>
  );
};

export default LayoutProvider;
