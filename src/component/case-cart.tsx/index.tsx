"use client";
import { FC } from "react";

import "./index.css";
import { CaseType } from "../../app/[lng]/case/_interface";
import { En_Locale, TW_Locale, ZH_Locale } from "@/constant";
import { t } from "i18next";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

const prefix = "leekono-case-card";
const CaseCard: FC<CaseType> = (props) => {
  const {
    zhTitle,
    twTitle,
    enTitle,
    time,
    poster,
    id,
    type,
    fixedImgHeight = false,
  } = props;
  const router = useRouter();

  const { lng } = useParams();

  const onClick = () => {
    router.push(`/case/${id}`);
  };
  const isEN = lng === En_Locale;
  const isTW = lng === TW_Locale;
  const isZH = lng === ZH_Locale;
  return (
    <div
      className={`${prefix} ${fixedImgHeight && `${prefix}-fixed-height`} `}
      onClick={onClick}
    >
      <div className={`${prefix}-tip`}>{t(`${type}.title`)}</div>
      <Image alt="poster" className={`${prefix}-img`} src={poster} />
      <div className={`${prefix}-content`}>
        <div className={`${prefix}-title`}>
          {isEN && enTitle}
          {isTW && twTitle}
          {isZH && zhTitle}
        </div>
        <div className={`${prefix}-time`}>{time}</div>
      </div>
    </div>
  );
};
export default CaseCard;
