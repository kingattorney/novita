import { Button } from "@/components/ui/button";
import Link from "next/link";
import FAQ from "./FAQ";
import Hero from "./Hero";

export default async function HomePage() {
  return (
    <main>
      <div
        style={{
          backgroundImage: "url('/hero.png')",
        }}
        className="py-14"
      >
        <picture>
          <img src="/logo2.svg" className="mx-auto mb-5" alt="" />
        </picture>
        <h1 className="text-4xl font-medium text-center font-itim text-white">
          Dự án Cù Lao An Bình Chứng Ngộ
        </h1>
        <h2 className="text-2xl mt-3 font-medium text-center font-itim text-white">
          - Triển khai sản phẩm &quot;Lò không khói của Tiến sỹ Paul&quot; -
        </h2>
      </div>
      <Hero />
      <FAQ />
    </main>
  );
}
