"use client";

import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import { useParams } from "next/navigation";

const LeekonoFooter = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng, "common");

  return (
    <footer className="flex leading-[2] flex-col items-center p-[32px_10px_20px] text-[12px] text-[#999]">
      <div>
        {t("phoneLabel")}
        <span className="text-[#4d84ed] ml-[4px]">{t("phone")}</span>
      </div>
      <div>{t("email")}</div>
      <div>Leekono © 2025</div>
      <div>
        <Link href={`${lng}/business-license`}>{t("businessLicense")}</Link>
      </div>
      <div style={{ textAlign: "center" }}>{t("address")}</div>
    </footer>
  );
};

export default LeekonoFooter;
