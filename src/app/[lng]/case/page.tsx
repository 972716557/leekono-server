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
  title: "...",
  description: "...",
};

export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}
export default Case;
