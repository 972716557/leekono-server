"use client";
import { Table } from "antd";
import { ImageViewer, Swiper } from "antd-mobile";
import Image from "next/image";
import { useState } from "react";

import { En_Locale, TW_Locale, ZH_Locale } from "@/constant";

import { Products } from "../_constant";

import "../_index.css";
import { notFound, useParams } from "next/navigation";
import { useTranslation } from "@/i18n/client";

const prefix = "leekono-product-detail";

const ProductDetail = () => {
  const { lng, id } = useParams();
  const { t } = useTranslation(lng, "product");

  const isEN = lng === En_Locale;
  const isTW = lng === TW_Locale;
  const isZH = lng === ZH_Locale;
  const [visible, setVisible] = useState(false);

  const detail = Products.find((item) => item.id === id);
  const [src, setSrc] = useState(detail?.images[0]);

  if (!detail) {
    notFound();
  }
  const onClick = (src: string) => {
    setSrc(src);
    setVisible(true);
  };

  return (
    <div className={prefix}>
      <div className={`${prefix}-swiper`}>
        <Swiper
          indicator={(total, current) => (
            <div className={`${prefix}-swiper-indicator`}>
              {`${current + 1} / ${total}`}
            </div>
          )}
        >
          {Object.values(detail.images).map((item, index) => (
            <Swiper.Item key={index}>
              <Image
                alt="img"
                src={item}
                onClick={() => {
                  onClick(item);
                }}
              />
            </Swiper.Item>
          ))}
        </Swiper>
        <ImageViewer
          image={src}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      </div>
      <div className={`${prefix}-card`}>
        <h2 className={`${prefix}-title`}>{t(`${detail.id}.title`)}</h2>
        <div className={`${prefix}-content`}>
          {isEN && detail.enDescription}
          {isTW && detail.twDescription}
          {isZH && detail.zhDescription}
        </div>
      </div>
      <div className={`${prefix}-card`}>
        <h2 className={`${prefix}-title`}>{t("productDetails")}</h2>
        <Table
          scroll={{ x: "auto" }}
          columns={detail.columns}
          dataSource={detail.data}
          pagination={false}
        />
      </div>
      <div className={`${prefix}-card ${prefix}-advantage`}>
        <h2 className={`${prefix}-title`}>{t("productAdvantage")}</h2>
        {isEN && detail.enAdvantage}
        {isTW && detail.twAdvantage}
        {isZH && detail.zhAdvantage}
      </div>
    </div>
  );
};
export default ProductDetail;
