import { FC } from "react";
// import { FormattedMessage, getLocale, history } from "umi";

import "./index.css";
import { CaseType } from "./interface";
import { En_Locale, TW_Locale, ZH_Locale } from "@/constant";

const prefix = "leekono-case-card";
const CaseCard: FC<CaseType> = (props) => {
  return (
    <div>
      这是div
      <div className={`${prefix}-tip`}>
        {/* <FormattedMessage id={`${type}.title`}></FormattedMessage> */}
      </div>
      {/* <img className={`${prefix}-img`} src={poster} /> */}
      <div className={`${prefix}-content`}>
        {/* <div className={`${prefix}-title`}>
          {isEN && enTitle}
          {isTW && twTitle}
          {isZH && zhTitle}
        </div>
        <div className={`${prefix}-time`}>{time}</div> */}
      </div>
    </div>
  );
};
export default CaseCard;
