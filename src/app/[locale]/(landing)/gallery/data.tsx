import React from "react";

export const LINKS: Record<
  string,
  { text: string; items: { text: string; href: string }[] }[]
> = {
  vi: [
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
  ],
  en: [
    {
      text: "EXPERIMENTAL IMAGES AND VIDEOS",
      items: [
        {
          text: "The experiment involved the Chairman of Vinh Long province",
          href: "https://drive.google.com/drive/folders/1fzeq_rIC7pED09cAHxG0AtGhgmkveK5E?usp=drive_link",
        },
        {
          text: "The experiment was attended by the Chairman of Long Ho district",
          href: "https://drive.google.com/drive/folders/1yCw_9Oypc9vGTNgjHycqIMhfb4X24gwZ?usp=drive_link",
        },
        {
          text: "The experiment was attended by Hanoi leaders",
          href: "https://drive.google.com/drive/folders/1gtVARoK2yYZCLdwepdyvv0azSuOAiipL?usp=drive_link",
        },
        {
          text: "Experiment on March 3, 2024",
          href: "https://drive.google.com/drive/folders/1IxlNLSnKSMjVESZ-L2EsxN9XIQlZXwPd?usp=drive_link",
        },
        {
          text: "Experiment on March 10, 2024",
          href: "https://drive.google.com/drive/folders/1L669y80eXE2-qNQk_iQoA1WRdKIqsm_h?usp=drive_link",
        },
        {
          text: "Tablet experiment on March 17, 2024",
          href: "https://drive.google.com/drive/folders/1LOQVgvmZIwPOul1F8htvCzVUcvqspbER?usp=drive_link",
        },
        {
          text: "Longan peel experiment on March 23, 2024",
          href: "https://drive.google.com/drive/folders/1OWMM7wSC996FW4rpXUzawCwUla2Q3hnw?usp=drive_link",
        },
        {
          text: "Experiment on March 27, 2024",
          href: "https://drive.google.com/drive/folders/1OiBoF8DQX73sTMJlVR5uMDH25aQkRSPu?usp=drive_link",
        },
      ],
    },
    {
      text: "VIDEOS AND IMAGES OF 'THE GASIFIER'",
      items: [
        {
          text: "Burning cocoa shells and bakes pizza with 'the Gasifier'",
          href: "https://drive.google.com/drive/folders/1JsUNiJZ2oykP6ClNxRi5C0KIV4ZlLezY?usp=drive_link",
        },
        {
          text: "Compare the ways of creating Biochar",
          href: "https://drive.google.com/drive/folders/1Luu4lciKbKTWO_Ss4d8SvK2CtSS6fOMo?usp=drive_link",
        },
        {
          text: "Biochar products",
          href: "https://drive.google.com/drive/folders/1OuXdf1kvBfKgfXbsIsF3ezCaJ4OAaWt9?usp=drive_link",
        },
      ],
    },
  ],
};

export function Intro({ locale }: { locale: string }) {
  if (locale == "vi")
    return (
      <>
        <p>
          <b> &quot;Lò Không Khói TS Paul&quot;</b> - một phát minh mang tính
          đột phá trong việc bảo vệ môi trường, nâng cao thu nhập và cải thiện
          cuộc sống của những người nông dân.
        </p>
        <p>
          Tính đến thời điểm này, chúng tôi đã và đang tiến hành các thử nghiệm
          thực tế của &quot;Lò Không Khói &quot; tại UBND Huyện Long Hồ, tỉnh
          Vĩnh Long, Trường cấp 2 xã An Bình và biệt thự Đỗ Trí Minh là các địa
          điểm thực nghiệm hàng tuần và tiến tới còn nhiều địa điểm khác nữa.
          Những lần thực nghiệm này không chỉ là cơ hội để kiểm tra và cải thiện
          hiệu suất của công nghệ, mà còn là dịp để tương tác trực tiếp với
          người dân địa phương và chia sẻ những lợi ích mà &quot;Lò Không Khói
          &quot; mang lại.
        </p>
        <p>
          Chúng tôi tin rằng việc thực hiện những lần thực nghiệm định kỳ này sẽ
          giúp chúng tôi tiếp tục phát triển và ngày càng hoàn thiện sản phẩm
          của mình, đồng thời đảm bảo rằng &quot;Lò Không Khói &quot; thực sự
          đáp ứng được nhu cầu và mong muốn của người nông dân. Cùng chúng tôi
          trải nghiệm những chuyến thực nghiệm đầy hứa hẹn và khám phá cách mà
          &quot;Lò Không Khói&quot; đang từng bước tiếp cận đến người dân tại
          Đồng bằng Sông Cửu Long thông qua các clip và hình ảnh dưới đây.
        </p>
      </>
    );
  if (locale == "en")
    return (
      <>
        <p>
          <b> &quot;Dr Paul’s The Gasifier&quot; </b>- a breakthrough invention
          in protecting the environment, increasing income and improving the
          lives of farmers.
        </p>
        <p>
          Up to now, we have been conducting experiments of &quot;Dr Paul’s The
          Gasifier&quot; weekly at: People&apos;s committee of Long Ho district,
          Vinh Long province; Secondary school of An Binh commune; and Do Tri
          Minh Villa; and moving forward to many more locations. These
          experiments are not only an opportunity to test and improve the
          performance of “the Gasifier”, but also to interact directly with
          local farmers and share the benefits of &quot;the Gasifier&quot;.
        </p>
        <p>
          We believe these periodic experiments will help us continue to develop
          and improve our products, while ensuring &quot;the Gasifier&quot;
          truly meets the needs and expectations of the farmers. Join us to
          experience promising experimental trips and discover how &quot;the
          Gasifier&quot; is gradually reaching people in the Mekong Delta
          through the clips and images below.
        </p>
      </>
    );
}
