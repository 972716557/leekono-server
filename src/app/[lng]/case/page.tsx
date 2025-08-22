import { languages } from "@/i18n/settings";
import { getTranslation } from "@/i18n";
import { Params } from "@/types/common";
import { WebSiteData } from "@/constant";
import indoorCase2and1 from "@/assets/case/indoor/case2/1.jpg";

import Card from "./_card";
import "./_index.css";

const prefix = "leekono-case";

const Case = () => {
  return (
    <div className={prefix}>
      <Card />
    </div>
  );
};

export async function generateMetadata({ params }: Params) {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "common");

  // 根据语言返回不同的元数据
  const metadata = {
    title: t("caseMetadata.title"),
    description: t("caseMetadata.description"),
    metadataBase: new URL(WebSiteData.url),
    openGraph: {
      title: t("caseMetadata.title"),
      description: t("caseMetadata.description"),
      url: "/case",
      siteName: WebSiteData.name,
      locale: "en_US",
      alternateLocale: WebSiteData.alternateLocale,
      type: "website",
      images: [indoorCase2and1],
    },
    twitter: {
      card: "summary_large_image",
      title: t("caseMetadata.title"),
      description: t("caseMetadata.description"),
      images: [indoorCase2and1],
    },
  };

  return metadata;
}

export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}
export default Case;
