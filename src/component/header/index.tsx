"use client";
import { useState } from "react";
import { Popup } from "antd-mobile";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { MenuOutlined } from "@ant-design/icons";

import { useTranslation } from "@/i18n/client";
import { routes } from "@/constant";

import Language from "../language";
import logo from "../../../public/favicon-title.png";
import "./_index.css";

const prefix = "leekono-layout-mobile-header";
const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "common");

  const onClick = () => {
    setVisible(true);
  };

  const onNavigate = (path: string) => {
    router.push(path);
    setVisible(false);
  };

  const onClickHome = () => {
    router.push("/");
  };

  const isActive = (path: string) => {
    if (path === "/") return pathname === `/${lng}` || pathname === `/${lng}/`;
    return pathname.startsWith(`/${lng}${path}`);
  };

  return (
    <header className="top-0 left-0 right-0 w-full fixed z-[1001] bg-white shadow-[0_8px_24px_-2px_rgba(0,0,0,0.05)]">
      <div className="leekono-container relative flex items-center justify-center h-[50px] md:h-[64px] md:justify-between">
        {/* Mobile hamburger - hidden on desktop */}
        <span
          onClick={onClick}
          className="absolute left-[20px] font-[16px] cursor-pointer md:hidden"
        >
          <MenuOutlined />
        </span>

        {/* Logo */}
        <span onClick={onClickHome} className="cursor-pointer">
          <Image src={logo} alt="logo" className="w-[120px] md:w-[140px]" />
        </span>

        {/* Desktop nav links - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-[32px]">
          {routes.map((item) => (
            <span
              key={item.id}
              onClick={() => onNavigate(item.path)}
              className={`${prefix}-nav-item cursor-pointer text-[15px] transition-colors ${
                isActive(item.path)
                  ? "text-[#1677ff] font-medium"
                  : "text-[#454d64] hover:text-[#1677ff]"
              }`}
            >
              {t(item.id)}
            </span>
          ))}
        </nav>

        {/* Language switcher */}
        <span className="absolute right-[20px] font-[16px] md:static">
          <Language />
        </span>
      </div>

      {/* Mobile popup menu */}
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
            onClick={() => onNavigate(item.path)}
            className={`${prefix}-side`}
          >
            <div className={`${prefix}-side-item`}>{t(item.id)}</div>
          </div>
        ))}
      </Popup>
    </header>
  );
};
export default Header;
