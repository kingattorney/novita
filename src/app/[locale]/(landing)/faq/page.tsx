import React from "react";
import FAQ from "./FAQ";
export const revalidate = 3600;
export default function page() {
  return <FAQ limit={false} />;
}
