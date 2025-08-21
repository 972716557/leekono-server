import "./_index.css";
import { languages } from "@/i18n/settings";
import { Metadata } from "next";
import Card from "./_card";
const prefix = "leekono-case";

const Case = () => {
  return (
    <div className={prefix}>
      <Card />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Cases",
  description: "A leading LED technology company.",
};

export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}
export default Case;
