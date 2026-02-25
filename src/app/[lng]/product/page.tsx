import { LedTypes, WebSiteData } from "@/constant";
import { getTranslation } from "@/i18n";
import { languages } from "@/i18n/settings";
import { Params } from "@/types/common";
import { getAlternates, getOgLocale } from "../../seo";
import softSrc from "@/assets/images/soft.png";

import Card from "./_card";

import "./_index.css";

const prefix = "leekono-product";

export async function generateMetadata({ params }: Params) {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "common");

  return {
    title: t("productMetadata.title"),
    description: t("productMetadata.description"),
    alternates: getAlternates(lng, "/product"),
    openGraph: {
      title: t("productMetadata.title"),
      description: t("productMetadata.description"),
      url: `/${lng}/product`,
      siteName: WebSiteData.name,
      locale: getOgLocale(lng),
      alternateLocale: WebSiteData.alternateLocale,
      type: "website",
      images: [softSrc],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: t("productMetadata.title"),
      description: t("productMetadata.description"),
      images: [softSrc],
    },
  };
}

const Product = async ({ params }: Params) => {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "product");

  return (
    <div className={prefix}>
      {/* Hero */}
      <section className={`${prefix}-hero`}>
        <h1 className={`${prefix}-hero-title`}>{t("heroTitle")}</h1>
        <p className={`${prefix}-hero-subtitle`}>{t("heroSubtitle")}</p>
      </section>

      {/* Product grid */}
      <section className={`${prefix}-grid`}>
        {LedTypes.map((item, index) => (
          <Card type={item} key={index} />
        ))}
      </section>
    </div>
  );
};

export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}

export default Product;
