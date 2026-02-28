"use client";
import { useState } from "react";
import { Popup } from "antd-mobile";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import { useTranslation } from "@/i18n/client";
import { routes } from "@/constant";

import Language from "../language";
import logo from "../../../public/favicon-title.png";
import "./_index.css";

const prefix = "leekono-header";
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
    router.push(`/${lng}${path}`);
    setVisible(false);
  };

  const onClickHome = () => {
    router.push(`/${lng}`);
  };

  const isActive = (path: string) => {
    if (path === "/") return pathname === `/${lng}` || pathname === `/${lng}/`;
    return pathname.startsWith(`/${lng}${path}`);
  };

  return (
    <header className={`${prefix}`}>
      <div className={`${prefix}-inner`}>
        {/* Mobile hamburger */}
        <span
          onClick={onClick}
          className={`${prefix}-menu-btn`}
        >
          <MenuOutlined />
        </span>

        {/* Logo */}
        <span onClick={onClickHome} className={`${prefix}-logo`}>
          <Image src={logo} alt="logo" className="w-[110px] md:w-[130px]" />
        </span>

        {/* Desktop nav */}
        <nav className={`${prefix}-nav`}>
          {routes.map((item) => (
            <span
              key={item.id}
              onClick={() => onNavigate(item.path)}
              className={`${prefix}-nav-link ${
                isActive(item.path) ? `${prefix}-nav-link-active` : ""
              }`}
            >
              {t(item.id)}
            </span>
          ))}
        </nav>

        {/* Language switcher */}
        <span className={`${prefix}-lang`}>
          <Language />
        </span>
      </div>

      {/* Mobile slide menu */}
      <Popup
        visible={visible}
        onMaskClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        position="left"
        maskClassName={`${prefix}-mask`}
        bodyStyle={{
          width: "80vw",
          maxWidth: "340px",
          height: "100vh",
          top: 0,
          background: "#0a0a0a",
          border: "none",
        }}
      >
        <div className={`${prefix}-mobile`}>
          <div className={`${prefix}-mobile-top`}>
            <span onClick={() => setVisible(false)} className={`${prefix}-mobile-close`}>
              <CloseOutlined />
            </span>
          </div>
          <nav className={`${prefix}-mobile-nav`}>
            {routes.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate(item.path)}
                className={`${prefix}-mobile-link ${
                  isActive(item.path) ? `${prefix}-mobile-link-active` : ""
                }`}
              >
                {t(item.id)}
              </div>
            ))}
          </nav>
        </div>
      </Popup>
    </header>
  );
};
export default Header;
