import businessLicenseEN from "@/assets/images/license-en.png";
import businessLicenseZH from "@/assets/images/license-zh.png";
import { En_Locale } from "@/constant";
import { Params } from "@/types/common";
import Image from "next/image";

const BusinessLicense = async ({ params }: Params) => {
  const { lng } = await params;
  const isEN = lng === En_Locale;
  return (
    <div>
      <Image
        style={{ width: "100%" }}
        src={isEN ? businessLicenseEN : businessLicenseZH}
        alt="businessLicense"
      />
    </div>
  );
};
export default BusinessLicense;
