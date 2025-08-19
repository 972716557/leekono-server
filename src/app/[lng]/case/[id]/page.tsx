import { En_Locale, TW_Locale, ZH_Locale } from "@/constant";

import { Cases } from "../_constant";

import "../_index.css";
import { Params } from "@/types/common";
import { notFound } from "next/navigation";

const prefix = "leekono-case-detail";
const Detail = async ({ params }: Params) => {
  const detail = Cases?.find((item) => item.id === "outdoor-case3");
  const { lng: locale } = await params;
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
