"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import { Avatar } from "@nextui-org/react";
import { PERSONS } from "@/utils/data";

export const Navbar = () => {
  const personalData=PERSONS["mj-hesari"]
  return (
    <NextUINavbar
      className="hidden md:block sticky bg-background top-5 w-full max-w-[845px] mx-auto mt-5 rounded-[61px] px-6 z-50 shadow-sm"
    >
      {/* Navbar Brand */}
      <NavbarBrand className="gap-2">
      <Avatar
          src={personalData.logo}
          className="w-8 h-8 border-2 border-gray-200"
        />
        <p className="font-black text-sm">{`${personalData.firstName} ${personalData.lastName}`}</p>
      </NavbarBrand>

      {/* Navigation Items */}
      <NavbarContent className="hidden sm:flex" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className="uppercase text-gray-950 text-sm hover:text-blue-500"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </NextUINavbar>
  );
};
