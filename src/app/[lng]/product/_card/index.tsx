"use client";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useParams, useRouter } from "next/navigation";

import { FC } from "react";
import classNames from "classnames";
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
import devilSrc from "@/assets/images/devil.png";

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
  devil: devilSrc,
};

const prefix = "leekono-product-card";
const Card: FC<CardProps> = (props) => {
  const history = useRouter();
  const { lng } = useParams();
  const { t } = useTranslation(lng as string, "product");

  const { type = "led" } = props;

  const onClickContactUs = () => {
    history.push("/contact");
  };

  const titleClass = classNames(`${prefix}-title`, `${prefix}-title-mobile`);

  const onClickDetail = () => {
    history.push(`/${lng}/product/${type}`);
  };
  return (
    <div className={prefix}>
      <div>
        <Image
          alt="img"
          className={`${prefix}-img`}
          src={imgs[type as unknown as LedEnum]}
        />
      </div>
      <div className={titleClass}>{t(`${type}.title`)}</div>
      <div className={`${prefix}-footer`}>
        <Button
          className={`${prefix}-button`}
          type="primary"
          onClick={onClickContactUs}
        >
          {t("contact")}
        </Button>
      </div>
      <div className={`${prefix}-detail`} onClick={onClickDetail}>
        {t("learnMore")}
        <RightOutlined />
      </div>
    </div>
  );
};
export default Card;
