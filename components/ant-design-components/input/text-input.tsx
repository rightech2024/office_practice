"use client";
import { Col, Form, Input, Row, Select, Space, Tooltip } from "antd";
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { SelectProps } from "antd";

interface ItemProps {
  label: string;
  value: string;
}

const options: ItemProps[] = [];

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `Long Label: ${value}`,
    value,
  });
}

const sharedProps: SelectProps = {
  mode: "multiple",
  style: { width: "100%" },
  options,
  placeholder: "Select Item...",
  maxTagCount: "responsive",
};

const TextInput = () => {
  const [value, setValue] = useState([]);

  const selectProps: SelectProps = {
    value,
    onChange: setValue,
  };

  const suffix = (
    <>
      <DownOutlined />
    </>
  );

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      dir="rtl"
      className="!font-sans"
      scrollToFirstError
    >
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            label="نام محصول"
            colon={true}
            labelAlign="right"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
          >
            <Input className="!font-YekanBakh" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="انتخاب اول"
            colon={true}
            labelAlign="right"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
          >
            <Select
              mode="multiple"
              value={value}
              style={{ width: "100%" }}
              onChange={setValue}
              suffixIcon={suffix}
              placeholder="Please select"
              options={[
                { value: "Ava Swift", label: "Ava Swift" },
                { value: "Cole Reed", label: "Cole Reed" },
                { value: "Mia Blake", label: "Mia Blake" },
                { value: "Jake Stone", label: "Jake Stone" },
                { value: "Lily Lane", label: "Lily Lane" },
                { value: "Ryan Chase", label: "Ryan Chase" },
                { value: "Zoe Fox", label: "Zoe Fox" },
                { value: "Alex Grey", label: "Alex Grey" },
                { value: "Elle Blair", label: "Elle Blair" },
              ]}
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="انتخاب دوم"
            colon={true}
            labelAlign="right"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
          >
            <Select
              mode="multiple"
              className="!font-YekanBakh"
              value={value}
              style={{ width: "100%" }}
              onChange={setValue}
              suffixIcon={suffix}
              placeholder="لطفا محصول خود را وارد کنید"
              maxTagCount={"responsive"}
              options={[
                { value: "Ava Swift", label: "Ava Swift" },
                { value: "Cole Reed", label: "Cole Reed" },
                { value: "Mia Blake", label: "Mia Blake" },
                { value: "Jake Stone", label: "Jake Stone" },
                { value: "Lily Lane", label: "Lily Lane" },
                { value: "Ryan Chase", label: "Ryan Chase" },
                { value: "Zoe Fox", label: "Zoe Fox" },
                { value: "Alex Grey", label: "Alex Grey" },
                { value: "Elle Blair", label: "Elle Blair" },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default TextInput;
