import { languages } from "@/i18n/settings";
import { getTranslation } from "@/i18n";
import { Params } from "@/types/common";

import Card from "./_card";
import "./_index.css";

const prefix = "leekono-case";

const Case = () => {
  return (
    <div className={prefix}>
      <Card />
    </div>
  );
};

export async function generateMetadata({ params }: Params) {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "common");

  // 根据语言返回不同的元数据
  const metadata = {
    title: t("caseMetadata.title"),
    description: t("productMetadata.description"),
  };

  return metadata;
}

export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}
export default Case;
