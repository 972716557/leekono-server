import { ReactNode } from "react";

export interface CaseType {
  id: string;
  type: string;
  poster: string;
  images: string[];
  enTitle: string;
  zhTitle: string;
  twTitle: string;
  time: string;
  enNode: ReactNode;
  zhNode: ReactNode;
  twNode: ReactNode;
  fixedImgHeight?: boolean;
}
