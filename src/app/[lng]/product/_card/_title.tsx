"use client";
import { useTranslation } from "@/i18n/client";
import { useParams } from "next/navigation";

const Title = ({ id }: { id: string }) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "product");
  return (
    <div>
      {t(id)}
      {id === "warranty" && (
        <span>
          <span>/(</span>
          {t("year")}
          <span>)</span>
        </span>
      )}
    </div>
  );
};

export default Title;
