"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Person } from "@/types/person";

function normalizeUrl(url: string) {
  if (!url) return "#";
  if (url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("tel:")) {
    return url;
  }
  return `https://${url}`;
}

export default function ContactAbout({
  dicts,
  personData,
}: {
  dicts: DictsTypes;
  personData: Person;
}) {
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  const telegram = personData.links.find((item) => item.name === "Telegram");
  const instagram = personData.links.find((item) => item.name === "Instagram");
  const otherLinks = personData.links.filter(
    (item) => item.name !== "Telegram" && item.name !== "Instagram",
  );

  const copyValue = async (value: string, key: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  };

  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
      className="bg-content1 p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm flex flex-col gap-6 md:gap-7 h-full"
    >
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {dicts.contact.responseTime}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
          {dicts.contact.followMe}
        </h3>
        <p className="mt-2 text-default-500 text-sm sm:text-base leading-7">
          {dicts.contact.followDesc}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <ContactRow
          label={dicts.contact.emailLabel}
          value={personData.email}
          icon="line-md:email"
          actionLabel={copied === "email" ? dicts.contact.copied : dicts.contact.copy}
          onCopy={() => copyValue(personData.email, "email")}
          href={`mailto:${personData.email}`}
          actionIcon={copied === "email" ? "line-md:confirm" : "line-md:clipboard-arrow"}
        />
        {personData.phone ? (
          <ContactRow
            label={dicts.contact.phoneLabel}
            value={personData.phone}
            icon="line-md:phone-call"
            actionLabel={copied === "phone" ? dicts.contact.copied : dicts.contact.copy}
            onCopy={() => copyValue(personData.phone!, "phone")}
            href={`tel:${personData.phone.replace(/\s+/g, "")}`}
            actionIcon={copied === "phone" ? "line-md:confirm" : "line-md:clipboard-arrow"}
            ltr
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-3 mt-auto">
        {telegram ? (
          <ChannelLink
            href={normalizeUrl(telegram.url)}
            label={dicts.contact.telegram}
            hint={dicts.contact.openChat}
            icon="line-md:telegram"
            className="bg-[#E5F5FF] text-[#1E6F91] dark:bg-[#132531] dark:text-[#7CC8EA]"
          />
        ) : null}
        {instagram ? (
          <ChannelLink
            href={normalizeUrl(instagram.url)}
            label={dicts.contact.instagram}
            hint={dicts.contact.openChat}
            icon="line-md:instagram"
            className="bg-[#F8E8F2] text-[#A1286C] dark:bg-[#2A1522] dark:text-[#F2A0C8]"
          />
        ) : null}
      </div>

      {otherLinks.length ? (
        <div className="flex items-center gap-3 pt-2 border-t border-default-100">
          {otherLinks.map((item) => (
            <Link
              key={item.id}
              href={normalizeUrl(item.url)}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              className="w-10 h-10 rounded-xl bg-default-100 text-foreground inline-flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Icon icon={item.icon} className="w-5 h-5" />
            </Link>
          ))}
        </div>
      ) : null}
    </motion.aside>
  );
}

function ContactRow({
  label,
  value,
  icon,
  actionLabel,
  actionIcon,
  onCopy,
  href,
  ltr,
}: {
  label: string;
  value: string;
  icon: string;
  actionLabel: string;
  actionIcon: string;
  onCopy: () => void;
  href: string;
  ltr?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-default-50 border border-default-100 px-4 py-3 flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-content1 text-primary inline-flex items-center justify-center shrink-0">
        <Icon icon={icon} className="w-5 h-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-default-500 mb-0.5">{label}</p>
        <Link
          href={href}
          className="block text-sm font-medium text-foreground truncate hover:text-primary transition-colors"
          dir={ltr ? "ltr" : undefined}
        >
          {value}
        </Link>
      </div>
      <button
        type="button"
        onClick={onCopy}
        className="shrink-0 inline-flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-xs font-semibold text-default-600 hover:bg-content1 hover:text-primary transition-colors"
      >
        <Icon icon={actionIcon} className="w-4 h-4" />
        <span className="hidden sm:inline">{actionLabel}</span>
      </button>
    </div>
  );
}

function ChannelLink({
  href,
  label,
  hint,
  icon,
  className,
}: {
  href: string;
  label: string;
  hint: string;
  icon: string;
  className: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group w-full rounded-2xl px-4 py-3.5 flex items-center justify-between transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
    >
      <span className="inline-flex items-center gap-2 font-semibold">
        <Icon icon={icon} className="w-5 h-5" />
        {label}
      </span>
      <span className="text-xs opacity-80 group-hover:opacity-100">{hint}</span>
    </Link>
  );
}
