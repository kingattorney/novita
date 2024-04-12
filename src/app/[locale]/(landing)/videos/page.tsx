import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { getI18n } from "../../../../../locales/server";
import Image from "next/image";

interface Result {
  data: {
    id: number;
    attributes: {
      link: string;
      image: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  }[];
}

function fetchVIDEOS(page = 1) {
  return fetch(
    "http://45.77.170.65:1337/api/video-tiktoks?populate=*&pagination[pageSize]=20&pagination[page]=" +
      page
  ).then((res) => res.json());
}

export default async function Page() {
  const data = (await fetchVIDEOS()) as Result;
  const t = await getI18n();
  return (
    <div
      className="py-10"
      style={{
        backgroundImage: "url('/qa.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <Breadcrumb className="w-full">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Video TikToks</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5 lg:grid-cols-5 py-10 md:gap-10 container">
        {data.data.map((video) => (
          <div
            key={video.id}
            className="relative overflow-hidden bg-gray-100 rounded-lg"
          >
            zz
            <a
              href={video.attributes.link}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <Image
                alt=""
                src={`http://45.77.170.65:1337${video.attributes.image.data.attributes.url}`}
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
