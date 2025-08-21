import { Params, TempData } from "@/types/common";
import { languages } from "@/i18n/settings";
import { getTranslation } from "@/i18n";

import { Products } from "../_constant";
import LeekonoSwiper from "../_swiper";
import "../_index.css";

const prefix = "leekono-product-detail";

const ProductDetail = async () => {
  // const isEN = lng === En_Locale;
  // const isTW = lng === TW_Locale;
  // const isZH = lng === ZH_Locale;

  return (
    <div className={prefix}>
      <LeekonoSwiper />
      {/* <div className={`${prefix}-card`}>
        <h2 className={`${prefix}-title`}>{t(`${detail.id}.title`)}</h2>
        <div className={`${prefix}-content`}>
          {isEN && detail.enDescription}
          {isTW && detail.twDescription}
          {isZH && detail.zhDescription}
        </div>
      </div> */}

      {/* <div className={`${prefix}-card ${prefix}-advantage`}>
        <h2 className={`${prefix}-title`}>{t("productAdvantage")}</h2>
        {isEN && detail.enAdvantage}
        {isTW && detail.twAdvantage}
        {isZH && detail.zhAdvantage}
      </div> */}
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
  const { lng } = await params;
  const { t } = await getTranslation(lng, "common");

  // 根据语言返回不同的元数据
  const metadata = {
    title: t("productMetadata.detail"),
    description: t("productMetadata.description"),
  };

  return metadata;
}

export default ProductDetail;
