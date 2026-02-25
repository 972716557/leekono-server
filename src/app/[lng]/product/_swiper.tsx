"use client";
import { ImageViewer, Swiper } from "antd-mobile";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Products } from "./_constant";
import { Table } from "antd";
import { notFound, useParams } from "next/navigation";
import { useTranslation } from "@/i18n/client";
import { useIsMobile } from "@/hooks/useIsMobile";

const prefix = "leekono-product-detail";

export default function LeekonoSwiper() {
  const { lng, id } = useParams();
  const { t } = useTranslation(lng as string, "product");
  const detail = Products.find((item) => item.id === id);
  const isMobile = useIsMobile();

  const [src, setSrc] = useState<StaticImageData>();
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!detail) {
    notFound();
  }

  const images = Object.values(detail.images);

  const onClickImage = ({ src }: { src: string }) => {
    setSrc(src as unknown as StaticImageData);
    setVisible(true);
  };

  return (
    <>
      <div className={`${prefix}-swiper`}>
        {isMobile ? (
          <Swiper
            indicator={(total, current) => (
              <div className={`${prefix}-swiper-indicator`}>
                {`${current + 1} / ${total}`}
              </div>
            )}
          >
            {images.map((item, index) => (
              <Swiper.Item key={index}>
                <Image
                  alt="img"
                  src={item}
                  onClick={() => onClickImage(item)}
                />
              </Swiper.Item>
            ))}
          </Swiper>
        ) : (
          <div className={`${prefix}-gallery`}>
            <div className={`${prefix}-gallery-main`}>
              <Image
                alt="product"
                src={images[activeIndex]}
                onClick={() => onClickImage(images[activeIndex])}
                className={`${prefix}-gallery-main-img`}
              />
            </div>
            <div className={`${prefix}-gallery-thumbs`}>
              {images.map((item, index) => (
                <div
                  key={index}
                  className={`${prefix}-gallery-thumb ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <Image alt="thumb" src={item} />
                </div>
              ))}
            </div>
          </div>
        )}
        <ImageViewer
          image={src as unknown as string}
          visible={visible}
          onClose={() => setVisible(false)}
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
