import { useTranslation } from "@/app/i18n/client";

const FormattedMessage = async ({ id }) => {
  const { t } = await useTranslation(lng, "second-page");
  return t(id);
};
export default FormattedMessage;
