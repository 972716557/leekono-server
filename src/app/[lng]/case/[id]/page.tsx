import { notFound } from "next/navigation";

import { En_Locale, TW_Locale, ZH_Locale } from "@/constant";

import { Cases } from "../_constant";

import "../_index.css";

const prefix = "leekono-case-detail";
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
export default Detail;
