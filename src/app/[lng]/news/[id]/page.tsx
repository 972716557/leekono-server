import { notFound } from "next/navigation";

import { En_Locale, TW_Locale, WebSiteData, ZH_Locale } from "@/constant";
import { languages } from "@/i18n/settings";
import { Params, TempData } from "@/types/common";
import { getTranslation } from "@/i18n";
import { getAlternates, getOgLocale } from "../../../seo";

import { NewsList } from "../_constant";
import "../_index.css";

const prefix = "leekono-news-detail";

export async function generateMetadata({ params }: Params) {
  const { lng: locale, id } = await params;
  const { t } = await getTranslation(locale, "news");
  const detail = NewsList.find((item) => item.id === id);
  const isEN = locale === En_Locale;
  const isTW = locale === TW_Locale;
  const title = isEN
    ? detail?.enTitle
    : isTW
      ? detail?.twTitle
      : detail?.zhTitle;

  return {
    title,
    description: t("heroSubtitle"),
    alternates: getAlternates(locale, `/news/${id}`),
    openGraph: {
      title,
      description: t("heroSubtitle"),
      url: `/${locale}/news/${id}`,
      siteName: WebSiteData.name,
      locale: getOgLocale(locale),
      alternateLocale: WebSiteData.alternateLocale,
      type: "article",
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description: t("heroSubtitle"),
    },
  };
}

const NewsDetail = async ({
  params,
}: {
  params: Promise<{ id: string; lng: string }>;
}) => {
  const { id, lng: locale } = await params;
  const detail = NewsList.find((item) => item.id === id);
  const isEN = locale === En_Locale;
  const isTW = locale === TW_Locale;
  const isZH = locale === ZH_Locale;

  if (!detail) {
    notFound();
  }

  return (
    <div className={prefix}>
      <div className={`${prefix}-header`}>
        <span className={`${prefix}-time`}>{detail.time}</span>
        <h1 className={`${prefix}-title`}>
          {isEN && detail.enTitle}
          {isTW && detail.twTitle}
          {isZH && detail.zhTitle}
        </h1>
      </div>
      <div className={`${prefix}-body`}>
        {isEN && detail.enContent}
        {isTW && detail.twContent}
        {isZH && detail.zhContent}
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const lngs = languages.map((item) => ({
    lng: item,
  }));
  const res: TempData[] = [];
  lngs.forEach((item) => {
    NewsList.forEach((news) => {
      res.push({ ...item, id: news.id });
    });
  });
  return res;
}

export default NewsDetail;
