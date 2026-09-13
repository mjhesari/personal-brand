"use client";

import { useEffect, useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Avatar } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { PERSONS } from "@/utils/data";
import { ThemeSwitch } from "@/components/theme-switch";
import { LangSwitch } from "@/components/lang-switch";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

const navHrefs = {
  about: "#about",
  experience: "#exprience",
  projects: "#featured-projects",
  contact: "#contact",
} as const;

export const Navbar = ({ dicts }: { dicts: DictsTypes }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const personalData = PERSONS["mj-hesari"];
  const navItems = [
    { label: dicts.nav.about, href: navHrefs.about },
    { label: dicts.nav.experience, href: navHrefs.experience },
    { label: dicts.nav.projects, href: navHrefs.projects },
    { label: dicts.nav.contact, href: navHrefs.contact },
  ];

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="sticky top-3 sm:top-5 z-50 px-4 md:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-[845px]">
        <NextUINavbar
          maxWidth="full"
          height="3.25rem"
          classNames={{
            base: "bg-content1/90 backdrop-blur-md shadow-sm rounded-full px-2 sm:px-4 border border-default-100/80",
            wrapper: "px-2 sm:px-3",
          }}
        >
          <NavbarContent justify="start" className="gap-2 basis-0 grow">
            <NavbarBrand className="gap-2 max-w-fit">
              <Avatar
                src={personalData.logo}
                className="w-7 h-7 sm:w-8 sm:h-8 border border-default-200"
              />
              <p className="font-black text-xs sm:text-sm text-foreground truncate">
                {`${personalData.firstName} ${personalData.lastName}`}
              </p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden md:flex gap-5" justify="center">
            {navItems.map((item) => (
              <NavbarItem key={item.href}>
                <Link
                  className="text-foreground text-sm hover:text-primary transition-colors"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          <NavbarContent justify="end" className="gap-2 sm:gap-3 basis-0 grow">
            <NavbarItem>
              <LangSwitch />
            </NavbarItem>
            <NavbarItem>
              <ThemeSwitch />
            </NavbarItem>
            <NavbarItem className="md:hidden">
              <button
                type="button"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((open) => !open)}
                className="w-8 h-8 rounded-full inline-flex items-center justify-center text-foreground hover:bg-default-100 transition-colors"
              >
                <Icon
                  icon={isMenuOpen ? "line-md:close" : "line-md:menu"}
                  className="w-5 h-5"
                />
              </button>
            </NavbarItem>
          </NavbarContent>
        </NextUINavbar>

        <AnimatePresence>
          {isMenuOpen ? (
            <>
              <motion.button
                type="button"
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 z-40 bg-foreground/10 backdrop-blur-[1px]"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.nav
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="md:hidden absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 rounded-3xl bg-content1 border border-default-100 shadow-sm p-2 overflow-hidden"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.18 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-default-100 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};
