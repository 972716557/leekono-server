"use client";
import { ImageViewer, Swiper } from "antd-mobile";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Products } from "./_constant";
import { Table } from "antd";
import { notFound, useParams } from "next/navigation";
import { useTranslation } from "@/i18n/client";
const prefix = "leekono-product-detail";

export default function LeekonoSwiper() {
  const { lng, id } = useParams();
  const { t } = useTranslation(lng as string, "product");
  const detail = Products.find((item) => item.id === id);

  const [src, setSrc] = useState<StaticImageData>();
  const [visible, setVisible] = useState(false);
  if (!detail) {
    notFound();
  }

  const onClick = ({ src }: { src: string }) => {
    setSrc(src as unknown as StaticImageData);
    setVisible(true);
  };
  return (
    <>
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
          image={src as unknown as string}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
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
    </>
  );
}
