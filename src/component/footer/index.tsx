"use client";

import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import { useParams } from "next/navigation";

const LeekonoFooter = () => {
  const { lng } = useParams();

  const { t } = useTranslation(lng as string, "common");

  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73]">
      <div className="leekono-container">
        {/* Mobile layout */}
        <div className="flex flex-col items-center p-[32px_16px_20px] text-[12px] leading-[2] md:hidden">
          <div className="text-[#1d1d1f] font-semibold text-[14px]">
            Leekono LED
          </div>
          <div className="mt-[4px]">{t("phone")}</div>
          <div>{t("email")}</div>
          <div className="mt-[8px] text-center">{t("address")}</div>
          <div className="mt-[12px] flex items-center gap-[16px] text-[11px]">
            <span>Leekono &copy; 2026</span>
            <Link href="/business-license" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
              {t("businessLicense")}
            </Link>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block p-[40px_40px_24px]">
          <div className="border-b border-[#d2d2d7] pb-[24px] mb-[16px] grid grid-cols-3 gap-[40px] text-[13px] leading-[1.8]">
            <div>
              <div className="text-[#1d1d1f] font-semibold text-[14px] mb-[8px]">
                Leekono LED
              </div>
              <div>{t("address")}</div>
            </div>
            <div>
              <div className="text-[#1d1d1f] font-medium text-[13px] mb-[8px]">
                {t("phoneLabel")}
              </div>
              <div>{t("phone")}</div>
              <div className="mt-[8px]">{t("email")}</div>
            </div>
            <div className="text-right">
              <div className="text-[#1d1d1f] font-medium text-[13px] mb-[8px]">
                {t("businessLicense")}
              </div>
              <Link href="/business-license" className="text-[#0066cc] hover:underline text-[13px]">
                {t("businessLicense")}
              </Link>
            </div>
          </div>
          <div className="text-[12px] text-[#86868b]">
            Leekono &copy; 2026. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LeekonoFooter;
