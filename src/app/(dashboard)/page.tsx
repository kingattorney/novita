import { Button } from "@/components/ui/button";
import Link from "next/link";
import FAQ from "./FAQ";
import Hero from "./Hero";

export default async function HomePage() {
  return (
    <main>
      <div className="container py-10">
        <h1 className="text-4xl font-bold text-center">
          Dự án Cù Lao An Bình Chứng Ngộ
        </h1>
        <h2 className="text-2xl mt-3 font-bold text-center">
          Triển khai sản phẩm &quot;Lò không khói của Tiến sỹ Paul&quot;
        </h2>
        <Hero />
        <FAQ />
        <div className="text-center py-32">
          <Button asChild>
            <Link href="https://forms.gle/oX4NmPLxzYMVv2Lo9" target="blank">
              Đăng ký tham gia sử dụng &quot;Lò không khói&quot;
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
