import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getI18n } from "../../../../locales/server";

export default async function DangKy() {
  const t = await getI18n();
  return (
    <Button
      asChild
      size="lg"
      className="bg-[#71AE0F] text-lg md:text-xl font-itim whitespace-normal text-center h-auto py-4 hover:bg-[#3FA514]"
    >
      <Link
        href="https://forms.gle/oX4NmPLxzYMVv2Lo9"
        target="blank"
        id="dang-ky-lo-khong-khoi"
      >
        {t("register_button")}
      </Link>
    </Button>
  );
}
