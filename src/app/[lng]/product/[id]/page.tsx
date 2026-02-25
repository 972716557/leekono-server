import { Params, TempData } from "@/types/common";
import { languages } from "@/i18n/settings";
import { getTranslation } from "@/i18n";

import { Products } from "../_constant";
import LeekonoSwiper from "../_swiper";
import "../_index.css";
import { WebSiteData } from "@/constant";
import { getAlternates, getOgLocale } from "../../../seo";

const prefix = "leekono-product-detail";

const ProductDetail = async () => {
  return (
    <div className={prefix}>
      <LeekonoSwiper />
    </div>
  );
};

export async function generateStaticParams() {
  const lngs = languages.map((item) => ({
    lng: item,
  }));
  const res: TempData[] = [];
  lngs.forEach((item) => {
    Products.forEach((caseData) => {
      res.push({ ...item, id: caseData.id });
    });
  });
  return res;
}

export async function generateMetadata({ params }: Params) {
  const { lng, id } = await params;
  const { t } = await getTranslation(lng, "common");

  const product = Products.find((item) => item.id === id);
  const productId = product?.id;

  return {
    title: t(`${productId}.title`),
    description: t(`${productId}.description`),
    alternates: getAlternates(lng, `/product/${id}`),
    openGraph: {
      title: t(`${productId}.title`),
      description: t(`${productId}.description`),
      url: `/${lng}/product/${id}`,
      siteName: WebSiteData.name,
      locale: getOgLocale(lng),
      alternateLocale: WebSiteData.alternateLocale,
      type: "website",
      images: product?.images,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: t(`${productId}.title`),
      description: t(`${productId}.description`),
      images: product?.images,
    },
  };
}

export default ProductDetail;
