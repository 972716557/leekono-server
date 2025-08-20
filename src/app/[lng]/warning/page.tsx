import { getTranslation } from "@/i18n";
import { Params } from "@/types/common";
import React from "react";
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
