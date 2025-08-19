import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface CaseType {
  id: string;
  type: string;
  poster: StaticImageData;
  images: StaticImageData[];
  enTitle: string;
  zhTitle: string;
  twTitle: string;
  time: string;
  enNode: ReactNode;
  zhNode: ReactNode;
  twNode: ReactNode;
  fixedImgHeight?: boolean;
}
