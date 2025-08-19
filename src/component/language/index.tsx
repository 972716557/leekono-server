"use client";
import { GlobalOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { useRouter } from "next/navigation";

const items = [
  { label: "中文", key: "zh" },
  { label: "English", key: "en" },
  { label: "繁體", key: "zh-TW" },
];

const Language = () => {
  const router = useRouter();
  const onClick: MenuProps["onClick"] = ({ key }) => {
    router.push(`/${key}`);
  };

  return (
    <Dropdown menu={{ items, onClick }}>
      <GlobalOutlined />
    </Dropdown>
  );
};

export default Language;
