"use client";
import { FC, useRef, useState } from "react";
import { Popup, Swiper, SwiperRef } from "antd-mobile";
import { Modal } from "antd";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { RightOutlined } from "@ant-design/icons";

import { LedEnum, Posters } from "@/constant";
import { useTranslation } from "@/i18n/client";

import "./index.css";

export interface SwiperDataType {
  src: StaticImageData;
  type: string;
}
export interface SwiperProps {
  data: SwiperDataType[];
  showPlusButton?: boolean;
  isPictureInsideContent?: boolean;
  className?: string;
}

const prefix = "leekono-swiper";

const LeekonoSwiper: FC<SwiperProps> = ({
  data,
  showPlusButton = true,
  className,
}) => {
  const ref = useRef<SwiperRef>(null);
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "product");
  const [index, setIndex] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onIndexChange = (index: number) => {
    setIndex(index);
  };

  const onClickPlusButton = () => {
    // if (isMobile()) {
    //   setPopupVisible(true);
    //   return;
    // }
    showModal();
  };

  return (
    <div className={prefix}>
      <Swiper
        ref={ref}
        trackOffset={10}
        slideSize={70}
        indicator={() => null}
        className={className}
        style={{
          "--border-radius": "8px",
        }}
        onIndexChange={onIndexChange}
        defaultIndex={0}
      >
        {data?.map((item, index) => (
          <Swiper.Item key={index}>
            <div className={`${prefix}-card`}>
              <div className={`${prefix}-card-content`}>
                <h2 className={`${prefix}-card-title`}>
                  {t(`${item.type}.title`)}
                </h2>
                <Link
                  href={`/product/${item.type}`}
                  className="inline-flex items-center gap-[4px]"
                >
                  {t("learnMore")}
                  <RightOutlined />
                </Link>
              </div>
              <Image
                alt="img"
                src={Posters[item.type as unknown as LedEnum]}
                className={`${prefix}-card-image`}
              />
              {showPlusButton && (
                <span
                  className={`${prefix}-button-plus`}
                  onClick={onClickPlusButton}
                >
                  <i className="iconfont icon-jia" />
                </span>
              )}
            </div>
          </Swiper.Item>
        ))}
      </Swiper>
      <div className={`${prefix}-button-group`}>
        <span
          onClick={() => ref.current?.swipePrev()}
          className={`${prefix}-button ${
            index === 0 && `${prefix}-button-disabled`
          }`}
        >
          <i className="iconfont icon-mti-jiantouzuo" />
        </span>
        <span
          className={`${prefix}-button ${
            index === data.length - 1 && `${prefix}-button-disabled`
          }`}
          onClick={() => ref.current?.swipeNext()}
        >
          <i className="iconfont icon-mti-jiantouyou" />
        </span>
      </div>
      <Popup
        visible={popupVisible}
        onMaskClick={() => {
          setPopupVisible(false);
        }}
        onClose={() => {
          setPopupVisible(false);
        }}
        bodyStyle={{
          height: "60vh",
          background: "#fff",
          borderRadius: "18px 18px 0 0",
        }}
      >
        <div className={`${prefix}-mask-header`}>
          <div
            className={`${prefix}-mask-close`}
            onClick={() => {
              setPopupVisible(false);
            }}
          >
            <i className="iconfont icon-cuowu" />
          </div>
        </div>
      </Popup>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};
export default LeekonoSwiper;
