import { getCurrentLocale, getI18n } from "../../../../locales/server";

function fetchData(locale: "vi" | "en" | "zh") {
  return fetch("http://45.77.170.65:1337/api/thungo?locale=" + locale).then(
    (res) => res.json()
  );
}

export default async function ThuNgo() {
  const t = await getI18n();
  const locale = getCurrentLocale();
  const { data } = await fetchData("vi");
  if (!data?.attributes?.content) return null;
  return (
    <div className="container pb-20 gap-5 flex-col flex justify-center items-center">
      <h2 className="text-4xl  font-medium text-center font-itim text-[#3FA514]">
        {t("open_letter")}
      </h2>
      <div
        dangerouslySetInnerHTML={{
          __html: data.attributes.content,
        }}
        className="bg-white flex  flex-col prose  p-5 rounded-xl max-w-screen-lg border border-[#71AE0F]"
      ></div>
    </div>
  );
}
