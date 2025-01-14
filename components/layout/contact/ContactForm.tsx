import { Input } from "@nextui-org/input";
import { Radio, RadioGroup } from "@nextui-org/react";
import BaseButton from "../../common/BaseButton";
import useMediaQuery from "@/Hooks/useMediaQuery";

export default function ContactForm() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="bg-background p-8 rounded-2xl flex flex-col justify-between gap-8">
      <div>
        <p className="text-xl font-semibold mb-4">Have Any Projects?</p>
        <p>Reach out and I'll get in touch within 24 hours.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-4">
        <Input
          type="email"
          variant={"underlined"}
          label="First Name"
          placeholder="Don"
          color="primary"
          classNames={{
            label: "font-semibold",
          }}
        />
        <Input
          type="text"
          variant={"underlined"}
          label="Last Name"
          placeholder="Doe"
          color="primary"
          classNames={{
            label: "font-semibold",
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-4">
        <Input
          type="email"
          variant={"underlined"}
          label="First Name"
          placeholder="Don"
          color="primary"
          classNames={{
            label: "font-semibold",
          }}
        />
        <Input
          type="text"
          variant={"underlined"}
          label="Last Name"
          placeholder="Doe"
          color="primary"
          classNames={{
            label: "font-semibold",
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium mb-4">Select Subject</p>
        <RadioGroup orientation={isMobile ? "vertical" : "horizontal"}>
          <Radio value="general-inquiry">
            <span className="text-sm">General Inquiry</span>
          </Radio>
          <Radio value="product-review">
            <span className="text-sm">Product Review</span>
          </Radio>
          <Radio value="mentoring">
            <span className="text-sm">Mentoring</span>
          </Radio>
          <Radio value="project-inquiry">
            <span className="text-sm">Project Inquiry</span>
          </Radio>
        </RadioGroup>
      </div>
      <div className="flex gap-4">
        <Input
          type="email"
          variant={"underlined"}
          label="Message"
          color="primary"
          placeholder="Write your message..."
          classNames={{
            label: ["font-semibold" , 'group-data-[focused=true]:text-blue-100'],
          }}
        />
      </div>
        <BaseButton className="bg-[#3D61FF] w-full text-white"><img className="w-4 h-4" src="/images/Fill.png" alt="Fill" /> Submit</BaseButton>
    </div>
  );
}
