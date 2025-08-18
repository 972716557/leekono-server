// import { getLocale, useSearchParams } from "umi";
import { Empty } from "antd";

import { En_Locale, TW_Locale, ZH_Locale } from "@/constant";

import { Cases } from "./constant";

import "./index.css";

const prefix = "leekono-case-detail";
const Detail = () => {
  // const [searchParams] = useSearchParams();

  // const id = searchParams.get("id");
  // const detail = Cases?.find((item) => item.id === id);

  // const locale = getLocale();
  // const isEN = locale === En_Locale;
  // const isTW = locale === TW_Locale;
  // const isZH = locale === ZH_Locale;

  return (
    <div className={prefix}>
      <Empty />
    </div>
  );
};
export default Detail;
