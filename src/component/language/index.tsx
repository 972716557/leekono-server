import { GlobalOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";

const items = [
  { label: "中文", key: "zh-CN" },
  { label: "English", key: "en-US" },
  { label: "繁體", key: "zh-TW" },
];
const Language = () => {
  const onClick: MenuProps["onClick"] = ({ key }) => {};

  return (
    <Dropdown menu={{ items, onClick }}>
      <GlobalOutlined />
    </Dropdown>
  );
};

export default Language;
