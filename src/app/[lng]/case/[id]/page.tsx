import { notFound } from "next/navigation";

import { En_Locale, TW_Locale, ZH_Locale } from "@/constant";
import { languages } from "@/i18n/settings";
import { Params, TempData } from "@/types/common";
import { getTranslation } from "@/i18n";

import { Cases } from "../_constant";

import "../_index.css";

const prefix = "leekono-case-detail";

export async function generateMetadata({ params }: Params) {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "common");

  // 根据语言返回不同的元数据
  const metadata = {
    title: t("caseMetadata.detail"),
    description: t("caseMetadata.description"),
  };

  return metadata;
}
const Detail = async ({
  params,
}: {
  params: Promise<{ id: string; lng: string }>;
}) => {
  const { id, lng: locale } = await params;
  const detail = Cases?.find((item) => item.id === id);
  const isEN = locale === En_Locale;
  const isTW = locale === TW_Locale;
  const isZH = locale === ZH_Locale;

  if (!detail) {
    notFound();
  }

  return (
    <div className={prefix}>
      <h2 className={`${prefix}-title`}>
        {isEN && detail.enTitle}
        {isTW && detail.twTitle}
        {isZH && detail.zhTitle}
      </h2>
      <div className={`${prefix}-description`}>
        {isEN && detail.enNode}
        {isTW && detail.twNode}
        {isZH && detail.zhNode}
      </div>
      <div className={`${prefix}-footer`}></div>
    </div>
  );
};

export async function generateStaticParams() {
  const lngs = languages.map((item) => ({
    lng: item,
  }));
  const res: TempData[] = [];
  lngs.forEach((item) => {
    Cases.forEach((caseData) => {
      res.push({ ...item, id: caseData.id });
    });
  });
  return res;
}

export default Detail;
