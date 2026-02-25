import { languages } from "@/i18n/settings";
import ThreeClient from "./_client";

export async function generateStaticParams() {
  return languages.map((item) => ({ lng: item }));
}

export default function Page() {
  return <ThreeClient />;
}
