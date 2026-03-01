import { languages } from "@/i18n/settings";
import { getTranslation } from "@/i18n";
import { Params } from "@/types/common";
import { WebSiteData } from "@/constant";
import { getAlternates, getOgLocale } from "../../seo";

import NewsCard from "./_card";
import "./_index.css";

const prefix = "leekono-news";

const News = async ({ params }: Params) => {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "news");

  return (
    <div className={prefix}>
      {/* Hero */}
      <section className={`${prefix}-hero`}>
        <h1 className={`${prefix}-hero-title`}>{t("heroTitle")}</h1>
        <p className={`${prefix}-hero-subtitle`}>{t("heroSubtitle")}</p>
      </section>

      {/* News list */}
      <section className={`${prefix}-content`}>
        <NewsCard />
      </section>
    </div>
  );
};

export async function generateMetadata({ params }: Params) {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "news");

  return {
    title: t("heroTitle"),
    description: t("heroSubtitle"),
    alternates: getAlternates(lng, "/news"),
    openGraph: {
      title: t("heroTitle"),
      description: t("heroSubtitle"),
      url: `/${lng}/news`,
      siteName: WebSiteData.name,
      locale: getOgLocale(lng),
      alternateLocale: WebSiteData.alternateLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: t("heroTitle"),
      description: t("heroSubtitle"),
    },
  };
}

export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}

export default News;
