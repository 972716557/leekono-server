import React from "react";

import { getTranslation } from "@/i18n";
import { languages } from "@/i18n/settings";
import { Params } from "@/types/common";
import { WebSiteData } from "@/constant";

import "./_index.css";

export default async function Page({ params }: Params) {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "common");

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-500  bg-fixed bg-cover bg-bottom error-bg">
      <div className="text-gray-100 p-[20px] text-xl">{t("mobileTip")}</div>
    </div>
  );
}
export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}

export async function generateMetadata({ params }: Params) {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "common");

  // 根据语言返回不同的元数据
  const metadata = {
    metadataBase: new URL(WebSiteData.url),
    title: t("warning.title"),
    description: t("warning.description"),
    icons: "/favicon.ico",
    image: WebSiteData.logo,
  };

  return metadata;
}
