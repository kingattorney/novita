import { Button } from "@/components/ui/button";
import { FAQ } from "./FAQ";

export default function HomePage() {
  return (
    <main className="container py-10">
      <h1 className="text-4xl font-bold text-center">
        Triển khai sản phẩm &quot;Lò không khói của tiến sỹ Paul&quot;
      </h1>
      <div className="py-10 flex gap-5 items-center">
        <picture>
          <img
            src="z5288918661266_d563c8c11eef5587f24e279e03f6932f.jpg"
            alt=""
          />
        </picture>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@novitagroup/video/7349120696703864066"
          data-video-id="7349120696703864066"
        >
          <section>
            <a
              target="_blank"
              title="@novitagroup"
              href="https://www.tiktok.com/@novitagroup?refer=embed"
            >
              @novitagroup
            </a>
          </section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </div>
      <FAQ />
      <div className="text-center py-32">
        <Button>Đăng ký tham gia sử dụng &quot;Lò không khói&quot;</Button>
      </div>
    </main>
  );
}
