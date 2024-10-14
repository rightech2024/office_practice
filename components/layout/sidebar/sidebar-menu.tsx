"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, ConfigProvider, Divider, Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "حساب کاربری",
    icon: <MailOutlined />,
    children: [
      {
        key: "5",
        label: "کیف پول",
      },
      {
        key: "6",
        label: "صندوق",
      },
      {
        key: "7",
        label: "افزایش اعتبار",
      },
      {
        key: "8",
        label: "وکیل کارگر",
      },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          {
            key: "11",
            label: "Option 11",
          },
          {
            key: "12",
            label: "Option 12",
          },
        ],
      },
    ],
  },
  {
    key: "sub4",
    label: "حساب کاربری",
    icon: <MailOutlined />,
    children: [
      {
        key: "13",
        label: "کیف پول",
      },
      {
        key: "14",
        label: "صندوق",
      },
      {
        key: "15",
        label: "افزایش اعتبار",
      },
      {
        key: "16",
        label: "وکیل کارگر",
      },
    ],
  },
  {
    key: "sub5",
    label: "حساب کاربری",
    icon: <MailOutlined />,
    children: [
      {
        key: "17",
        label: "کیف پول",
      },
      {
        key: "18",
        label: "صندوق",
      },
      {
        key: "19",
        label: "افزایش اعتبار",
      },
      {
        key: "20",
        label: "وکیل کارگر",
      },
    ],
  },
  {
    key: "sub6",
    label: "حساب کاربری",
    icon: <MailOutlined />,
    children: [
      {
        key: "21",
        label: "کیف پول",
      },
      {
        key: "22",
        label: "صندوق",
      },
      {
        key: "23",
        label: "افزایش اعتبار",
      },
      {
        key: "24",
        label: "وکیل کارگر",
      },
    ],
  },
  {
    key: "sub7",
    label: "حساب کاربری",
    icon: <MailOutlined />,
    children: [
      {
        key: "25",
        label: "کیف پول",
      },
      {
        key: "26",
        label: "صندوق",
      },
      {
        key: "27",
        label: "افزایش اعتبار",
      },
      {
        key: "28",
        label: "وکیل کارگر",
      },
    ],
  },
  {
    key: "sub8",
    label: "حساب کاربری",
    icon: <MailOutlined />,
    children: [
      { key: "30", label: "کیف پول", },
      {
        key: "31",
        label: "صندوق",
      },
      {
        key: "32",
        label: "افزایش اعتبار",
      },
      {
        key: "33",
        label: "وکیل کارگر",
      },
      {
        key: "34",
        label: "سپهر جندقی",
      },
      {
        key: "35",
        label: "سپهر جندقی",
      },
      {
        key: "36",
        label: "سپهر جندقی",
      },
      {
        key: "37",
        label: "سپهر جندقی",
      },
      {
        key: "38",
        label: "سپهر جندقی",
      },
      {
        key: "39",
        label: "سپهر جندقی",
      },
      {
        key: "40",
        label: "سپهر جندقی",
      },
    ],
  },
];

const SidebarMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{ width: "100%", position: "sticky", top: "0px" }}
      className="relative"
    >
      <div className="flex flex-row-reverse custom-sidebar">
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                darkItemBg: "#FFF",
                darkItemHoverBg: "rgb(218, 218, 239) !important",
                itemHeight: 40,
                darkSubMenuItemBg: "#FBFBFB",
                darkItemColor: "#000000",
                fontFamily: "Yekan Bakh",
                itemBorderRadius: 0,
                darkItemHoverColor: "rgb(44, 44, 84) !important",
                itemColor: "#FF0000",
                itemHoverColor: "#0000FF",
                // colorText: "#FF0000",
                // groupTitleColor: "#FF0000",
                // colorLinkHover: "#00FF00",
                // colorPrimaryHover: "#00FF00",
                colorIconHover: "#00FF00",
              },
            },
          }}
        >
          <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{
            fontWeight: "bold",
            height: "100vh",
            transition: "width 0.2s",
            overflowY: "auto",
            borderRadius: "8px",
            backgroundColor: "#FFF !important",
            // backdropFilter: "blur(100px)",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            // border: "0.1rem solid #3C6382",
          }}
        />
        {/* <style jsx global>{`
          .ant-menu-item.ant-menu-item-selected {
            background-color: var(--barenj-primary-light) !important;
            color: #fcfcff !important;
          }
          .ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open,
          .ant-menu-submenu ant-menu-submenu-inline {
            color: inherit;
          }
          .ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open
            .ant-menu-submenu-title,
          .ant-menu-submenu ant-menu-submenu-inline .ant-menu-submenu-title {
            color: inherit;
          }
          .ant-menu .ant-menu-submenu-title,
          ant-menu-title-content {
            color: inherit;
          }
          .ant-menu.ant-menu-inline .ant-menu-sub.ant-menu-inline {
            background-color: transparent !important;
            color: inherit;
          }
          .ant-menu-item.ant-menu-item-only-child {
            color: white;
          }
          .ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-selected
            .ant-menu-submenu-title {
            color: var(--mint-green-300) !important;
          }
          .ant-menu-submenu-title {
            // border-block-end: 1px solid #1a1a1a !important;
            padding-block: 1.5rem;
          }
        `}</style> */}
        </ConfigProvider>
      </div>
    </div>
  );
};

export default SidebarMenu;
