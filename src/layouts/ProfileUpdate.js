import React, { useEffect, useRef, useState } from "react";
import "antd/dist/antd.css";
import {
  Space,
  Form,
  Typography,
  Input,
  Button,
  Row,
  Col,
  Divider
} from "antd";
import { Prompt } from "react-router-dom";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  UserOutlined,
  AuditOutlined,
  MailOutlined
} from "@ant-design/icons";
const { Title } = Typography;

const ProfileUpdate = () => {
  const [form] = Form.useForm();
  const formRef = useRef();

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(
        "https://sampleprofile-917ec-default-rtdb.firebaseio.com/Users/U1.json"
      );
      const result = await response.json();
      form.setFieldsValue({
        firstName: result?.firstName ?? "",
        lastName: result?.lastName ?? "",
        email: result?.email ?? "",
        phone: result?.phone ?? "",
        location: result?.location ?? "",
        displayName: result?.displayName ?? ""
      });
    };
    fetchProfile();
  }, []);

  const onFinish = (values) => {
    try {
      // if (values) {
      //   let postObj = {
      //     FirstName: values.firstName,
      //     LastName: values.lastName,
      //     Email: values.email,
      //     Phone: values.phone,
      //     Location: values.location,
      //     DisplayName: values.displayName
      //   };
      //   fetch(
      //     "https://sampleprofile-917ec-default-rtdb.firebaseio.com/UserProfiles/U1.json",
      //     {
      //       method: "POST",
      //       headers: {
      //         Accept: "application/json",
      //         "Content-Type": "application/json"
      //       },
      //       body: JSON.stringify({
      //         U1: postObj
      //       })
      //     }
      //   );
      //   console.log("we are in");
      // }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {/* <Prompt
        when={isBlocking}
        message={(location) =>
          `Are you sure you want to go to ${location.pathname}?`
        }
      /> */}
      <Divider orientation="left" orientationMargin={0}>
        <Title level={5}>My Profile</Title>
      </Divider>
      <Form
        layout="vertical"
        form={form}
        ref={formRef}
        preserve={false}
        name="basicForm"
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <Form.Item
              name="firstName"
              label="First Name"
              colon={false}
              rules={[
                {
                  required: true,
                  message: "First Name is required!"
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="First name"
              />
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <Form.Item
              name="lastName"
              label="Last Name"
              colon={false}
              //required={true}
              rules={[
                {
                  required: true,
                  message: "Last Name is required!"
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Last name"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <Form.Item
              name="displayName"
              label="Display Name"
              colon={false}
              //required={true}
              rules={[
                {
                  required: true,
                  message: "Display Name is required!"
                }
              ]}
            >
              <Input
                prefix={<AuditOutlined className="site-form-item-icon" />}
                placeholder="Display name"
              />
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <Form.Item
              name="email"
              label="Email"
              colon={false}
              rules={[
                {
                  type: "email",
                  message: "Please enter a valid Email!"
                },
                {
                  required: true,
                  message: "Email is required!"
                }
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <Form.Item
              name="phone"
              label="Phone No"
              colon={false}
              //required={true}
              rules={[
                {
                  required: true,
                  message: "Phone no is required!"
                },
                {
                  //type:'regexp',
                  //pattern: new RegExp(/^\(\d{3}\)\s\d{3}\s-\s\d{4}/g),
                  min: 10,
                  max: 10,
                  message: "Please enter a valid phone no"
                }
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="site-form-item-icon" />}
                placeholder="Phone No(Work)"
              />
            </Form.Item>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <Form.Item
              name="location"
              label="Location"
              colon={false}
              //required={true}
              rules={[
                {
                  required: true,
                  message: "Location is required!"
                }
              ]}
            >
              <Input
                prefix={<EnvironmentOutlined className="site-form-item-icon" />}
                placeholder="Location"
              />
            </Form.Item>
          </Col>
        </Row>
        <Space>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
          <Button
            type="primary"
            onClick={() => {
              form.resetFields();
            }}
          >
            Reset
          </Button>
        </Space>
      </Form>
    </>
  );
};

export default ProfileUpdate;
