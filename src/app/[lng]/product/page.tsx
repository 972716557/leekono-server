import { Col, Row } from "antd";

import { LedTypes, WebSiteData } from "@/constant";
import { getTranslation } from "@/i18n";
import { languages } from "@/i18n/settings";
import { Params } from "@/types/common";
import softSrc from "@/assets/images/soft.png";

import Card from "./_card";
import { Products } from "./_constant";

import "./_index.css";

const prefix = "leekono-product";
export async function generateMetadata({ params }: Params) {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "common");

  // 根据语言返回不同的元数据
  const metadata = {
    metadataBase: new URL(WebSiteData.url),
    title: t("productMetadata.title"),
    description: t("productMetadata.description"),
    openGraph: {
      title: t("productMetadata.title"),
      description: t("productMetadata.description"),
      url: "/product",
      siteName: WebSiteData.name,
      locale: "en_US",
      alternateLocale: WebSiteData.alternateLocale,
      type: "website",
      images: [softSrc],
    },
    twitter: {
      card: "summary_large_image",
      title: t("productMetadata.title"),
      description: t("productMetadata.description"),
      images: [softSrc],
    },
  };

  return metadata;
}
const Product = () => {
  return (
    <div className={prefix}>
      <Row gutter={[12, 12]} className={`${prefix}-row`}>
        {LedTypes.map((item, index) => (
          <Col xxl={6} lg={8} sm={12} xs={12} key={index}>
            <Card type={item}></Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}
export default Product;
