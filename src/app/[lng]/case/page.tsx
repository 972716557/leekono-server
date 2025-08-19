import { languages } from "@/i18n/settings";
import React from "react";

export default function page() {
  return <div>这是</div>;
}
export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}
