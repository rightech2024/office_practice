import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";

const Provider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <AntdRegistry>
      <ConfigProvider theme={theme} direction="rtl">{children}</ConfigProvider>
    </AntdRegistry>
  );
};

export default Provider;
