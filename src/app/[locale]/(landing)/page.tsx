import { getI18n } from "../../../../locales/server";
import FAQ from "./faq/FAQ";
import Hero from "./Hero";
import ThuNgo from "./ThuNgo";

export const revalidate = 3600;

export default async function HomePage() {
  const t = await getI18n();
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
          {t("hero.slogan")}
        </h1>
        <h2 className="text-2xl mt-3 font-medium text-center font-itim text-white">
          {t("hero.subslogan")}
        </h2>
      </div>
      <Hero />
      <ThuNgo />
      <FAQ />
    </main>
  );
}
