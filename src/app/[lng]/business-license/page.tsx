import businessLicenseEN from "@/assets/images/license-en.png";
import businessLicenseZH from "@/assets/images/license-zh.png";
import { En_Locale, WebSiteData } from "@/constant";
import { getAlternates, getOgLocale } from "../../seo";
import { getTranslation } from "@/i18n";
import { languages } from "@/i18n/settings";
import { Params } from "@/types/common";
import Image from "next/image";

const BusinessLicense = async ({ params }: Params) => {
  const { lng } = await params;
  const isEN = lng === En_Locale;
  return (
    <div style={{ background: "#f5f5f7", padding: "24px 16px", minHeight: "60vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <Image
          style={{ width: "100%", borderRadius: 16 }}
          src={isEN ? businessLicenseEN : businessLicenseZH}
          alt="businessLicense"
        />
      </div>
    </div>
  );
};

export async function generateMetadata({ params }: Params) {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "common");

  return {
    title: t("businessLicense"),
    description: t("businessLicense"),
    alternates: getAlternates(lng, "/business-license"),
    openGraph: {
      title: t("businessLicense"),
      description: t("businessLicense"),
      url: `/${lng}/business-license`,
      siteName: WebSiteData.name,
      locale: getOgLocale(lng),
      alternateLocale: WebSiteData.alternateLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: t("businessLicense"),
      description: t("businessLicense"),
    },
  };
}

export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}
export default BusinessLicense;
