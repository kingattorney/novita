import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import { DocumentRenderer } from "@keystatic/core/renderer";
const reader = createReader(process.cwd(), keystaticConfig);

export default async function ThuNgo() {
  const homepage = await reader.singletons.homepage.read();

  return (
    <div className="container py-20 flex justify-center items-center">
      <div className="bg-white flex flex-col prose  p-5 rounded-xl max-w-screen-lg border border-[#71AE0F]">
        <DocumentRenderer document={await homepage!.thungo()} />
      </div>
    </div>
  );
}
