import businessLicenseEN from "@/assets/images/license-en.png";
import businessLicenseZH from "@/assets/images/license-zh.png";
import { En_Locale, WebSiteData } from "@/constant";
import { getTranslation } from "@/i18n";
import { languages } from "@/i18n/settings";
import { Params } from "@/types/common";
import Image from "next/image";

const BusinessLicense = async ({ params }: Params) => {
  const { lng } = await params;
  const isEN = lng === En_Locale;
  return (
    <div>
      <Image
        style={{ width: "100%" }}
        src={isEN ? businessLicenseEN : businessLicenseZH}
        alt="businessLicense"
      />
    </div>
  );
};

export async function generateMetadata({ params }: Params) {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "common");

  // 根据语言返回不同的元数据
  const metadata = {
    title: t("businessLicense"),
    description: t("businessLicense"),
    metadataBase: new URL(WebSiteData.url),
    openGraph: {
      title: t("businessLicense"),
      description: t("businessLicense"),
      url: "/case",
      siteName: WebSiteData.name,
      locale: "en_US",
      alternateLocale: WebSiteData.alternateLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("businessLicense"),
      description: t("businessLicense"),
    },
  };

  return metadata;
}

export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}
export default BusinessLicense;
