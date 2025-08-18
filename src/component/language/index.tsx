import { GlobalOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { useRouter } from "next/router";

const items = [
  { label: "中文", key: "zh-CN" },
  { label: "English", key: "en-US" },
  { label: "繁體", key: "zh-TW" },
];

const Language = () => {
  const router = useRouter();
  const onClick: MenuProps["onClick"] = ({ key }) => {
    router.push("/another", "/another", { locale: key });
  };

  return (
    <Dropdown menu={{ items, onClick }}>
      <GlobalOutlined />
    </Dropdown>
  );
};

export default Language;
