'use client';

import { FormEvent, useState } from 'react';
import { Input, Textarea } from '@nextui-org/input';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { DictsTypes } from '@/app/[lang]/dictionaries/dictionaries';

const SUBJECTS = ['general', 'review', 'mentoring', 'project'] as const;
type SubjectKey = (typeof SUBJECTS)[number];

export default function ContactForm({ dicts }: { dicts: DictsTypes }) {
  const [subject, setSubject] = useState<SubjectKey>('project');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    window.setTimeout(() => setStatus('sent'), 700);
    window.setTimeout(() => setStatus('idle'), 2600);
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="bg-content1 p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm flex flex-col gap-6 md:gap-7 h-full"
    >
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
          {dicts.contact.haveProjects}
        </h3>
        <p className="mt-2 text-default-500 text-sm sm:text-base leading-7">
          {dicts.contact.reachOut}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          isRequired
          name="name"
          type="text"
          variant="bordered"
          label={dicts.contact.name}
          placeholder={dicts.contact.namePlaceholder}
          labelPlacement="outside"
          classNames={{
            label: 'text-sm font-medium text-foreground',
            inputWrapper:
              'bg-default-50 border-default-200 hover:border-primary data-[hover=true]:bg-default-50 group-data-[focus=true]:border-primary',
          }}
        />
        <Input
          isRequired
          name="email"
          type="email"
          variant="bordered"
          label={dicts.contact.email}
          placeholder={dicts.contact.emailPlaceholder}
          labelPlacement="outside"
          classNames={{
            label: 'text-sm font-medium text-foreground',
            inputWrapper:
              'bg-default-50 border-default-200 hover:border-primary data-[hover=true]:bg-default-50 group-data-[focus=true]:border-primary',
          }}
        />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium text-foreground">
          {dicts.contact.selectSubject}
        </p>
        <div
          className="grid grid-cols-2 gap-2.5 sm:gap-3"
          role="radiogroup"
          aria-label={dicts.contact.selectSubject}
        >
          {SUBJECTS.map((key) => {
            const selected = subject === key;
            return (
              <button
                key={key}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setSubject(key)}
                className={`rounded-2xl px-3.5 py-3.5 text-sm font-medium text-start border transition-all duration-200 ${
                  selected
                    ? 'bg-primary/10 border-primary text-primary shadow-none'
                    : 'bg-default-50 border-default-200 text-foreground shadow-sm hover:bg-default-100'
                }`}
              >
                {dicts.contact.subjects[key]}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="subject" value={subject} />
      </div>

      <Textarea
        isRequired
        name="message"
        variant="bordered"
        minRows={5}
        label={dicts.contact.message}
        placeholder={dicts.contact.messagePlaceholder}
        labelPlacement="outside"
        classNames={{
          label: 'text-sm font-medium text-foreground',
          inputWrapper:
            'bg-default-50 border-default-200 hover:border-primary data-[hover=true]:bg-default-50 group-data-[focus=true]:border-primary',
        }}
      />

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground py-3.5 px-4 text-sm font-semibold disabled:opacity-70"
      >
        <Icon
          icon={
            status === 'sent'
              ? 'line-md:confirm-circle'
              : 'line-md:email-twotone-to-email-twotone-transition'
          }
          className="w-5 h-5"
        />
        {status === 'sending'
          ? dicts.contact.sending
          : status === 'sent'
            ? dicts.contact.sent
            : dicts.contact.submit}
      </motion.button>
    </motion.form>
  );
}
