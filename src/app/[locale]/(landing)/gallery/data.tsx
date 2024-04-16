import React from "react";

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
