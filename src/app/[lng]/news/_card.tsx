"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "@/i18n/client";
import { En_Locale, TW_Locale } from "@/constant";
import { NewsList, NewsCategory } from "./_constant";

const prefix = "leekono-news";

const categories: Array<"all" | NewsCategory> = [
  "all",
  "company",
  "industry",
  "technical",
];

const NewsCard = () => {
  const { lng } = useParams();
  const router = useRouter();
  const { t } = useTranslation(lng as string, "news");
  const [active, setActive] = useState<"all" | NewsCategory>("all");

  const isEN = lng === En_Locale;
  const isTW = lng === TW_Locale;

  const filtered =
    active === "all"
      ? NewsList
      : NewsList.filter((item) => item.category === active);

  return (
    <>
      {/* Category tabs */}
      <div className={`${prefix}-tabs`}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${prefix}-tab ${active === cat ? `${prefix}-tab-active` : ""}`}
            onClick={() => setActive(cat)}
          >
            {t(cat)}
          </button>
        ))}
      </div>

      {/* News grid */}
      <div className={`${prefix}-grid`}>
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`${prefix}-card`}
            onClick={() => router.push(`/${lng}/news/${item.id}`)}
          >
            <div className={`${prefix}-card-img`}>
              <Image
                alt={isEN ? item.enTitle : isTW ? item.twTitle : item.zhTitle}
                src={item.poster}
              />
              <span className={`${prefix}-card-badge`}>{t(item.category)}</span>
            </div>
            <div className={`${prefix}-card-body`}>
              <h3 className={`${prefix}-card-title`}>
                {isEN ? item.enTitle : isTW ? item.twTitle : item.zhTitle}
              </h3>
              <p className={`${prefix}-card-summary`}>
                {isEN
                  ? item.enSummary
                  : isTW
                    ? item.twSummary
                    : item.zhSummary}
              </p>
              <div className={`${prefix}-card-footer`}>
                <span className={`${prefix}-card-time`}>{item.time}</span>
                <span className={`${prefix}-card-link`}>{t("readMore")}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsCard;
