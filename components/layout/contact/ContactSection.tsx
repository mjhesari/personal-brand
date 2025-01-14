"use client";
import { useAppSelector } from "@/redux/app/hooks";
import Title from "../Title/Title";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import { Button, Card } from "@nextui-org/react";
import ContactItems from "./ContactItems";
import { Icon } from "@iconify-icon/react";
export default function ContactSection({ dicts }: { dicts: DictsTypes }) {
  const { siteData: personData } = useAppSelector(
    (state) => state.person.personData
  );
  const { phone, mail } = personData || {};
  return (
    <section className="mt-10" id="contact">
      <Title text={dicts.menuItems.contact} />
      <div className="grid md:grid grid-cols-2 gap-6">
        <Card className="flex h-max border" shadow="none">
          <div className="space-y-3 mb-2 mt-4 mx-4">
            {phone?.length
              ? phone?.map(
                  (phone, index) => (
                    <div
                      key={index}
                      data-aos="fade-left"
                      data-aos-delay={index * 100}
                      data-aos-offset="100"
                    >
                      <ContactItems
                        dicts={dicts}
                        type="phone"
                        content={phone?.value ?? ""}
                      />
                    </div>
                  )
                )
              : null}
            {/* Emails */}
            {mail?.length
              ? mail?.map(
                  (mail, index) => (
                    <div
                      key={index}
                      data-aos="fade-left"
                      data-aos-delay={index * 100}
                      data-aos-offset="100"
                    >
                      <ContactItems
                        dicts={dicts}
                        type="mail"
                        content={mail?.value ?? ""}
                      />
                    </div>
                  )
                )
              : null}
            <div className="flex justify-center place-content-center items-center pb-2">
              <Button
                className="w-full bg-green-500/20 text-[#41891C] hover:bg-green-300 rounded-xl"
                startContent={<Icon icon="ic:twotone-whatsapp" className="text-[#41891C]" width="20" />}
                size="lg"
              >
                Whatsapp Chat
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
