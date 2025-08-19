"use client";
import { useState } from "react";
import { Popup } from "antd-mobile";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../../public/favicon-title.png";
import { routes } from "@/constant";
import { useTranslation } from "react-i18next";
import "./_index.css";
import Language from "../language";
const prefix = "leekono-layout-mobile-header";
const MobileHeader = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const params = useParams();
  const onClick = () => {
    setVisible(true);
  };

  const onTouchEnd = (path: string) => {
    router.push(`/${params.lng}/${path}`);
    setVisible(false);
  };

  const onClickHome = () => {
    router.push("/");
  };

  return (
    <header className="top-[0] left-[0] right-[0] pd-20 w-full fixed z-1001 sticky bg-white shadow-[0_8px_24px_-2px_rgba(0,0,0,0.05)]">
      <div className="relative flex items-center justify-center h-[50px]">
        <span onTouchEnd={onClick} className="absolute left-[20px] font-[16px]">
          <MenuOutlined />
        </span>
        <span onClick={onClickHome}>
          <Image src={logo} alt="logo" className="w-[120px]" />
        </span>
        <span className="absolute right-[20px] font-[16px]">
          <Language />
        </span>
      </div>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        position="left"
        maskClassName={`${prefix}-mask`}
        bodyStyle={{
          width: "60vw",
          height: "calc(100vh - 50px)",
          top: 50,
          background: "#fff",
          borderRight: "1px solid #ebedf1",
        }}
      >
        {routes.map((item) => (
          <div
            key={item.id}
            onTouchEnd={() => onTouchEnd(item.path)}
            className={`${prefix}-side`}
          >
            <div className={`${prefix}-side-item`}>{t(item.id)}</div>
          </div>
        ))}
      </Popup>
    </header>
  );
};
export default MobileHeader;
