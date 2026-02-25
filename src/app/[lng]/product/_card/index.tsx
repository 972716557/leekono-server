"use client";
import { RightOutlined } from "@ant-design/icons";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";

import { useTranslation } from "@/i18n/client";
import rentalSrc from "@/assets/images/rental.png";
import outdoorSrc from "@/assets/images/outdoor.png";
import posterSrc from "@/assets/images/poster.png";
import indoorSrc from "@/assets/images/indoor.png";
import transparentSrc from "@/assets/images/transparent.png";
import crystalSrc from "@/assets/images/crystal.png";
import softSrc from "@/assets/images/soft.png";
import taxiSrc from "@/assets/images/taxi.png";
import floorSrc from "@/assets/images/floor.png";

import "./index.css";
import { LedEnum } from "@/constant";

interface CardProps {
  type: string;
}

const imgs: Record<LedEnum, StaticImageData> = {
  rental: rentalSrc,
  indoor: indoorSrc,
  outdoor: outdoorSrc,
  poster: posterSrc,
  transparent: transparentSrc,
  crystal: crystalSrc,
  taxi: taxiSrc,
  soft: softSrc,
  floor: floorSrc,
};

const prefix = "leekono-product-card";

const Card: FC<CardProps> = (props) => {
  const router = useRouter();
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "product");

  const { type = "led" } = props;

  const onClickDetail = () => {
    router.push(`/${lng}/product/${type}`);
  };

  return (
    <div className={prefix} onClick={onClickDetail}>
      <div className={`${prefix}-img-wrapper`}>
        <Image
          alt={t(`${type}.title`)}
          className={`${prefix}-img`}
          src={imgs[type as unknown as LedEnum]}
        />
      </div>
      <div className={`${prefix}-body`}>
        <h3 className={`${prefix}-title`}>{t(`${type}.title`)}</h3>
        <p className={`${prefix}-desc`}>{t(`${type}.description`)}</p>
        <span className={`${prefix}-link`}>
          {t("learnMore")}
          <RightOutlined />
        </span>
      </div>
    </div>
  );
};

export default Card;
