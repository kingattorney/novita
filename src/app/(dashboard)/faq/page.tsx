import React from "react";
import FAQ from "../FAQ";

export default function page() {
  return (
    <div className="container py-10">
      <FAQ limit={false} />
    </div>
  );
}
