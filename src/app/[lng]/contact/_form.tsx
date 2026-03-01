"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "@/i18n/client";
import { LedTypes } from "@/constant";
import emailjs from "@emailjs/browser";

const prefix = "leekono-contact";

const SERVICE_ID = "service_ccmc3zg";
const TEMPLATE_ID = "template_hr452ph";
const PUBLIC_KEY = "Pf8vXTp_O75zKUki6";

const InquiryForm = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "contact");
  const { t: tCommon } = useTranslation(lng as string, "common");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    productType: "",
    area: "",
    pixelPitch: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const productLabel = form.productType
      ? tCommon(`${form.productType}.title`)
      : "N/A";

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone || "N/A",
          productType: productLabel,
          area: form.area ? `${form.area} ㎡` : "N/A",
          pixelPitch: form.pixelPitch ? `${form.pixelPitch} mm` : "N/A",
          message: form.message || "N/A",
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", phone: "", productType: "", area: "", pixelPitch: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={`${prefix}-form-section`}>
      <h2 className={`${prefix}-form-title`}>{t("formTitle")}</h2>
      <p className={`${prefix}-form-subtitle`}>{t("formSubtitle")}</p>

      <form onSubmit={onSubmit} className={`${prefix}-form`}>
        <div className={`${prefix}-form-row`}>
          <div className={`${prefix}-form-group`}>
            <label className={`${prefix}-form-label`}>{t("nameLabel")}</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder={t("namePlaceholder")}
              className={`${prefix}-form-input`}
              required
            />
          </div>
          <div className={`${prefix}-form-group`}>
            <label className={`${prefix}-form-label`}>
              {t("emailInputLabel")}
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder={t("emailPlaceholder")}
              className={`${prefix}-form-input`}
              required
            />
          </div>
        </div>

        <div className={`${prefix}-form-row`}>
          <div className={`${prefix}-form-group`}>
            <label className={`${prefix}-form-label`}>
              {t("phoneInputLabel")}
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder={t("phonePlaceholder")}
              className={`${prefix}-form-input`}
            />
          </div>
          <div className={`${prefix}-form-group`}>
            <label className={`${prefix}-form-label`}>
              {t("productTypeLabel")}
            </label>
            <select
              name="productType"
              value={form.productType}
              onChange={onChange}
              className={`${prefix}-form-input ${prefix}-form-select`}
            >
              <option value="">{t("productTypePlaceholder")}</option>
              {LedTypes.map((type) => (
                <option key={type} value={type}>
                  {tCommon(`${type}.title`)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={`${prefix}-form-group`}>
          <label className={`${prefix}-form-label`}>{t("areaLabel")}</label>
          <input
            type="text"
            name="area"
            value={form.area}
            onChange={onChange}
            placeholder={t("areaPlaceholder")}
            className={`${prefix}-form-input`}
          />
        </div>

        <div className={`${prefix}-form-group`}>
          <label className={`${prefix}-form-label`}>{t("pixelPitchLabel")}</label>
          <input
            type="text"
            name="pixelPitch"
            value={form.pixelPitch}
            onChange={onChange}
            placeholder={t("pixelPitchPlaceholder")}
            className={`${prefix}-form-input`}
          />
        </div>

        <div className={`${prefix}-form-group`}>
          <label className={`${prefix}-form-label`}>{t("messageLabel")}</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder={t("messagePlaceholder")}
            className={`${prefix}-form-input ${prefix}-form-textarea`}
            rows={5}
          />
        </div>

        {status === "success" && (
          <p className={`${prefix}-form-status ${prefix}-form-status-success`}>
            {t("submitSuccess")}
          </p>
        )}
        {status === "error" && (
          <p className={`${prefix}-form-status ${prefix}-form-status-error`}>
            {t("submitError")}
          </p>
        )}

        <button
          type="submit"
          className={`${prefix}-form-submit`}
          disabled={status === "sending"}
        >
          {status === "sending" ? t("submitting") : t("submitButton")}
        </button>
      </form>
    </section>
  );
};

export default InquiryForm;
