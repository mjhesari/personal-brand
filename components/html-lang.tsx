"use client";

import { useEffect } from "react";

export function HtmlLang({ lang, dir }: { lang: string; dir: "ltr" | "rtl" | string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return null;
}
