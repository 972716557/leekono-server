import businessLicenseEN from "@/assets/images/license-en.png";
import businessLicenseZH from "@/assets/images/license-zh.png";
import Image from "next/image";

const BusinessLicense = () => {
  // const locale = getLocale();
  // const isEN = locale === En_Locale;
  // src={isEN ? businessLicenseEN : businessLicenseZH}
  return (
    <div>
      <Image
        style={{ width: "100%" }}
        src={businessLicenseEN}
        alt="businessLicense"
      />
    </div>
  );
};
export default BusinessLicense;
