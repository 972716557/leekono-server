"use client";

import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import { useParams } from "next/navigation";

const LeekonoFooter = () => {
  const { lng } = useParams();

  const { t } = useTranslation(lng as string, "common");

  return (
    <footer className="bg-[#1a1a1a] text-[#999]">
      <div className="leekono-container flex flex-col items-center p-[32px_10px_20px] text-[12px] leading-[2] md:flex-row md:justify-between md:items-start md:p-[48px_40px_32px] md:text-[14px] md:leading-[2.2]">
        <div className="text-center md:text-left md:max-w-[320px]">
          <div className="text-white font-semibold text-[16px] mb-[4px]">
            Leekono LED
          </div>
          <div>{t("address")}</div>
        </div>
        <div className="text-center mt-[8px] md:mt-0">
          <div>
            {t("phoneLabel")}
            <span className="text-[#4d84ed] ml-[4px]">{t("phone")}</span>
          </div>
          <div>{t("email")}</div>
        </div>
        <div className="text-center mt-[8px] md:mt-0 md:text-right">
          <div>Leekono &copy; 2025</div>
          <div>
            <Link
              href="/business-license"
              className="text-[#999] hover:text-white transition-colors"
            >
              {t("businessLicense")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LeekonoFooter;
