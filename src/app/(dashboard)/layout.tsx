import React from "react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <footer>
        <div className="container py-5 flex-col flex justify-center items-center">
          <p className="font-bold text-xl">Liên hệ</p>
          <ul>
            <li>
              <b>Địa chỉ: </b>
              tầng 4, Tòa nhà Lam Giang, 167-173 Trần Hưng Đạo, Phường Cô Giang,
              Quận 1, Tp.Hồ Chí Minh
            </li>
            <li>
              <b>SĐT: </b> 1900 8666 47 - 0963 718 946
            </li>
            <li>
              <b>Email: </b>
              csh@kingattorney.com.vn
            </li>
          </ul>
        </div>
        <div
          className={cn(
            "flex justify-center items-center h-12 bg-gray-100 text-gray-500"
          )}
        >
          <p>© {new Date().getFullYear()} Novita Group</p>
        </div>
      </footer>
    </div>
  );
}