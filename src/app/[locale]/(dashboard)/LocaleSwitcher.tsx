"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useChangeLocale, useCurrentLocale } from "../../../../locales/client";

export default function LocaleSwitcher() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  return (
    <div>
      <Select
        value={locale}
        onValueChange={(value) => {
          changeLocale(value as any);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="vi">Tiếng Việt</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="zh">中文</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
