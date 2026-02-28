"use client";

import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import { useParams } from "next/navigation";

const prefix = "leekono-footer";

const LeekonoFooter = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "common");

  return (
    <footer className={prefix}>
      <div className={`${prefix}-inner`}>
        {/* Top section */}
        <div className={`${prefix}-top`}>
          <div className={`${prefix}-brand`}>
            <div className={`${prefix}-brand-name`}>Leekono LED</div>
            <div className={`${prefix}-brand-desc`}>{t("address")}</div>
          </div>
          <div className={`${prefix}-contact`}>
            <div className={`${prefix}-label`}>Contact</div>
            <div className={`${prefix}-value`}>{t("phone")}</div>
            <div className={`${prefix}-value`}>{t("email")}</div>
          </div>
          <div className={`${prefix}-links`}>
            <div className={`${prefix}-label`}>Legal</div>
            <Link href={`/${lng}/business-license`} className={`${prefix}-link`}>
              {t("businessLicense")}
            </Link>
          </div>
        </div>
        {/* Bottom bar */}
        <div className={`${prefix}-bottom`}>
          <span>&copy; 2026 Leekono LED. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default LeekonoFooter;
