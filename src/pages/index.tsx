import React, { useState } from "react";
import App from "./_app.js";
import { createRoot } from "react-dom/client";
import { Button, Col, Layout, Menu, Row, Space, theme } from "antd";
import Image from "next/image";
import { Typography } from "antd";
import { Breadcrumb } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 48,
  paddingInline: 50,
  lineHeight: "48px",
  display: "flex",
  position: "fixed",
  width: "100%",
  zIndex: 100,
};

const logoStyle = {
  display: "flex",
  height: 48,
  alignItems: "center",
};

const flex11 = {
  flex: "1 1 0%",
};

const logoTitle = {
  fontSize: "18px",
  color: "#fff",
  margin: "0 0 0 12px",
};

const topMenu = {
  width: 200,
};

const siderBar = {
  paddingTop: 48,
};

const customTrigger = {
  position: "absolute",
  left: "10px",
  fontSize: "16px",
  bottom: "10px",
};

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="header" style={headerStyle}>
          <a href="" style={logoStyle}>
            <Title style={logoTitle}>Ant Design Pro</Title>
          </a>
          <div style={flex11}></div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
            style={topMenu}
          />
        </Header>

        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={siderBar}
            theme="light"
          >
            <div className="logo" />
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "nav 1",
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "nav 2",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
              ]}
            />

            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
              ]}
            />

            <div style={customTrigger}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </div>
          </Sider>
          <Layout>
            <Header style={{ height: 48 }}></Header>
            <Content
              style={{
                padding: 24,
                marginBottom: 0,
                background: colorBgContainer,
              }}
            >
              <Breadcrumb>
                <Breadcrumb.Item>表单页</Breadcrumb.Item>
                <Breadcrumb.Item>分步表单</Breadcrumb.Item>
              </Breadcrumb>

              <Title level={3} style={{ marginTop: 8, fontSize: 20 }}>
                基础表单
              </Title>
              <span>
                表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。
              </span>
            </Content>

            <Layout style={{ padding: 24 }}>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
