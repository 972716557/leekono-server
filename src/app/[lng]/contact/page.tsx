import { Params } from "@/types/common";
import "./index.css";
import { getTranslation } from "@/i18n";
const prefix = "leekono-contact";

const Contact = async ({ params }: Params) => {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "contact");
  return (
    <div className={prefix}>
      <div className={`${prefix}-content`}>
        <div className={`${prefix}-label`}>{t("addressLabel")}</div>
        <div className={`${prefix}-value`}>{t("address")}</div>
      </div>
      <div className={`${prefix}-content`}>
        <div className={`${prefix}-label`}>{t("phoneLabel")}</div>
        <div className={`${prefix}-value`}>{t("phone")}</div>
      </div>

      <div className={`${prefix}-content`}>
        <div className={`${prefix}-label`}>{t("emailLabel")}</div>
        <div className={`${prefix}-value`}>{t("email")}</div>
      </div>
    </div>
  );
};
export default Contact;
