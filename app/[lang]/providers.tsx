"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Provider } from "react-redux";
import { store } from "@/redux/app/store";
import { Suspense, useEffect } from "react";
import DataGetter from "./data-getter";
import { BusinessPersonTypes } from "@/types/types";
import { Toaster } from "react-hot-toast";
// AOS config
import AOS from 'aos';
import 'aos/dist/aos.css';

export interface ProvidersProps {
  children?: React.ReactNode;
  themeProps?: ThemeProviderProps;
  personData: BusinessPersonTypes;
}

export function Providers({
  children,
  themeProps,
  personData,
}: ProvidersProps) {
  const router = useRouter();
  useEffect(() => {
    // Configuring AOS
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);
  return (
    <Provider store={store}>
      <Suspense fallback="">
        <DataGetter personData={personData} />
      </Suspense>
      <Toaster position='top-center' />
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
    </Provider>
  );
}
