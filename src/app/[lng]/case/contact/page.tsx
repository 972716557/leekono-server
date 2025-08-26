import { Params } from "@/types/common";
import "./index.css";
import { getTranslation } from "@/i18n";
import { languages } from "@/i18n/settings";
import { Metadata } from "next";
import { WebSiteData } from "@/constant";
const prefix = "leekono-contact";

const Contact = async ({ params }: Params) => {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "contact");
  return (
    <div className={prefix}>
      <div className={`${prefix}-content`}>
        <div className={`${prefix}-label`}>{t("addressLabel")}</div>
        <div className={`${prefix}-value`}>{t("address")}</div>
      </div>
      <div className={`${prefix}-content`}>
        <div className={`${prefix}-label`}>{t("phoneLabel")}</div>
        <div className={`${prefix}-value`}>{t("phone")}</div>
      </div>

      <div className={`${prefix}-content`}>
        <div className={`${prefix}-label`}>{t("emailLabel")}</div>
        <div className={`${prefix}-value`}>{t("email")}</div>
      </div>
    </div>
  );
};
export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}

export async function generateMetadata({ params }: Params) {
  const { lng, id } = await params;
  const { t } = await getTranslation(lng, "common");

  // 根据语言返回不同的元数据
  const metadata = {
    title: t("contact"),
    description: t("companyName"),
    icons: "/favicon.ico",
    metadataBase: new URL(WebSiteData.url),
    openGraph: {
      title: t("contact"),
      description: t("companyName"),
      url: "/contact",
      siteName: WebSiteData.name,
      locale: "en_US",
      alternateLocale: WebSiteData.alternateLocale,
      type: "website",
      author: "Leekono LED",
    },
    twitter: {
      card: "summary_large_image",
      title: t("contact"),
      description: t("companyName"),
    },
  };

  return metadata;
}

export default Contact;
