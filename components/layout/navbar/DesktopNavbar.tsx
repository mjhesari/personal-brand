"use client";
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { menuItems } from "@/data/data";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { useAppSelector } from "@/redux/app/hooks";
import Image from "next/image";

export const DesktopNavbar = ({ dicts }: { dicts: DictsTypes }) => {
  const { siteData: businessConfig } = useAppSelector(
    (state) => state.person.personData
  );
  const mainLogo = businessConfig?.logo?.find(
    (logo) => logo.type === "primary"
  )?.url;
  return (
    <Navbar className="hidden top-5 w-full max-w-[845px] mx-auto mt-5 rounded-3xl z-50 shadow-sm md:grid md:grid-cols-1 justify-between [&>header]:ps-4">
      {/* Navbar Brand */}
      <NavbarBrand>
        <div className="border-2 grid place-items-center !h-10 aspect-square rounded-xl">
          <Image
            src={mainLogo ?? "/no-src"}
            alt="logo"
            width={32}
            height={32}
            className="!h-8 !w-auto"
          />
        </div>

        <p className="font-black text-sm">{}</p>
      </NavbarBrand>
      {/* Navigation Items */}
      <NavbarContent className="hidden sm:flex" justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className="uppercase text-gray-950 text-sm hover:text-blue-500"
              href={item.href}
            >
              {dicts.menuItems[item.label as keyof typeof dicts.menuItems]}{" "}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};
