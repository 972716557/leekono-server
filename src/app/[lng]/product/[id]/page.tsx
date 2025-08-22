import { Params, TempData } from "@/types/common";
import { languages } from "@/i18n/settings";
import { getTranslation } from "@/i18n";

import { Products } from "../_constant";
import LeekonoSwiper from "../_swiper";
import "../_index.css";
import { WebSiteData } from "@/constant";

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

  // 根据语言返回不同的元数据
  const metadata = {
    title: t(`${productId}.title`),
    description: t(`${productId}.description`),
    icons: "/favicon.ico",
    metadataBase: new URL(WebSiteData.url),
    openGraph: {
      title: t("productMetadata.title"),
      description: t("productMetadata.description"),
      url: `/product/${id}`,
      siteName: WebSiteData.name,
      locale: "en_US",
      alternateLocale: WebSiteData.alternateLocale,
      type: "website",
      images: product?.images,
    },
    twitter: {
      card: "summary_large_image",
      title: t("productMetadata.title"),
      description: t("productMetadata.description"),
      images: product?.images,
    },
  };

  return metadata;
}

export default ProductDetail;
