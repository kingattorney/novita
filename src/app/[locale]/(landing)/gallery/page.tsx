import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:'Thư viện lưu trữ hình ảnh và video thực nghiệm'
};

export default function Page() {
  return (
    <div>
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
          Thư viện lưu trữ hình ảnh và video thực nghiệm
        </h1>
        <h2 className="text-2xl mt-3 font-medium text-center font-itim text-white">
          - Lò Không Khói TS Paul -
        </h2>
      </div>
      <div className="container py-10 gap-5 flex flex-col items-center max-w-screen-lg">
        <Breadcrumb className="w-full">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Thư viện lưu trữ hình ảnh và video thực nghiệm
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="bg-white flex  flex-col prose max-w-none  p-5 rounded-xl  border border-[#71AE0F]">
          <p>
            <b> &quot;Lò Không Khói TS Paul&quot;</b> - một phát minh mang tính
            đột phá trong việc bảo vệ môi trường, nâng cao thu nhập và cải thiện
            cuộc sống của những người nông dân.
          </p>
          <p>
            Tính đến thời điểm này, chúng tôi đã và đang tiến hành các thử
            nghiệm thực tế của &quot;Lò Không Khói &quot; tại UBND Huyện Long
            Hồ, tỉnh Vĩnh Long, Trường cấp 2 xã An Bình và biệt thự Đỗ Trí Minh
            là các địa điểm thực nghiệm hàng tuần và tiến tới còn nhiều địa điểm
            khác nữa. Những lần thực nghiệm này không chỉ là cơ hội để kiểm tra
            và cải thiện hiệu suất của công nghệ, mà còn là dịp để tương tác
            trực tiếp với người dân địa phương và chia sẻ những lợi ích mà
            &quot;Lò Không Khói &quot; mang lại.
          </p>

          <p>
            Chúng tôi tin rằng việc thực hiện những lần thực nghiệm định kỳ này
            sẽ giúp chúng tôi tiếp tục phát triển và ngày càng hoàn thiện sản
            phẩm của mình, đồng thời đảm bảo rằng &quot;Lò Không Khói &quot;
            thực sự đáp ứng được nhu cầu và mong muốn của người nông dân. Cùng
            chúng tôi trải nghiệm những chuyến thực nghiệm đầy hứa hẹn và khám
            phá cách mà &quot;Lò Không Khói&quot; đang từng bước tiếp cận đến
            người dân tại Đồng bằng Sông Cửu Long thông qua các clip và hình ảnh
            dưới đây.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/qa.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
        className="py-10"
      >
        <div className="container space-y-5 max-w-screen-lg my-10">
          {LINKS.map((link) => (
            <div
              key={link.text}
              className="bg-white flex flex-col p-5 rounded-xl border border-[#71AE0F]"
            >
              <h2 className="text-4xl py-5 font-medium text-center text-[#629809] font-itim">
                {link.text}
              </h2>
              {
                <div className="grid grid-cols-1 gap-5">
                  {link.items.map((item) => (
                    <a
                      key={item.text}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-5 rounded-xl border border-[#71AE0F]"
                    >
                      <p className="text-lg font-medium text-[#629809] font-itim">
                        {item.text}
                      </p>
                      <ChevronRight className="w-6 h-6 text-[#629809]" />
                    </a>
                  ))}
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const LINKS = [
  {
    text: "CLIP VÀ HÌNH ẢNH THỰC NGHIỆM",
    items: [
      {
        text: "Thực nghiệm có Chủ tịch tỉnh Vĩnh Long tham gia",
        href: "https://drive.google.com/drive/folders/1fzeq_rIC7pED09cAHxG0AtGhgmkveK5E?usp=drive_link",
      },
      {
        text: "Thực nghiệm có Chủ tịch huyện Long Hồ tham dự",
        href: "https://drive.google.com/drive/folders/1yCw_9Oypc9vGTNgjHycqIMhfb4X24gwZ?usp=drive_link",
      },
      {
        text: "Thực nghiệm có lãnh đạo Hà Nội tham dự",
        href: "https://drive.google.com/drive/folders/1gtVARoK2yYZCLdwepdyvv0azSuOAiipL?usp=drive_link",
      },
      {
        text: "Thực nghiệm ngày 03/3/2024",
        href: "https://drive.google.com/drive/folders/1IxlNLSnKSMjVESZ-L2EsxN9XIQlZXwPd?usp=drive_link",
      },
      {
        text: "Thực nghiệm ngày 10/3/2024",
        href: "https://drive.google.com/drive/folders/1L669y80eXE2-qNQk_iQoA1WRdKIqsm_h?usp=drive_link",
      },
      {
        text: "Thực nghiệm viên nén ngày 17/3/2024",
        href: "https://drive.google.com/drive/folders/1LOQVgvmZIwPOul1F8htvCzVUcvqspbER?usp=drive_link",
      },
      {
        text: "Thực nghiệm vỏ nhãn ngày 23/3/2024",
        href: "https://drive.google.com/drive/folders/1OWMM7wSC996FW4rpXUzawCwUla2Q3hnw?usp=drive_link",
      },
      {
        text: "Thực nghiệm ngày 27/3/2024",
        href: "https://drive.google.com/drive/folders/1OiBoF8DQX73sTMJlVR5uMDH25aQkRSPu?usp=drive_link",
      },
    ],
  },
  {
    text: "CLIP VÀ HÌNH ẢNH VỀ LÒ KHÔNG KHÓI",
    items: [
      {
        text: "Lò đốt vỏ cacao và nướng Pizza",
        href: "https://drive.google.com/drive/folders/1JsUNiJZ2oykP6ClNxRi5C0KIV4ZlLezY?usp=drive_link",
      },
      {
        text: "So sánh cách tạo Biochar hiện nay",
        href: "https://drive.google.com/drive/folders/1Luu4lciKbKTWO_Ss4d8SvK2CtSS6fOMo?usp=drive_link",
      },
      {
        text: "Sản phẩm Biochar",
        href: "https://drive.google.com/drive/folders/1OuXdf1kvBfKgfXbsIsF3ezCaJ4OAaWt9?usp=drive_link",
      },
    ],
  },
];
