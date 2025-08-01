import { Button } from "@nextui-org/button";

export default function ContactAbout() {
  return (
    <div className="bg-background p-8 rounded-2xl flex flex-col justify-between gap-8 h-full">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <p className="text-xl font-semibold mb-4">Follow Me </p>
          <p>Contact me with contact form or text/call me directly.</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-[#f9f9f9] rounded-2xl flex py-3 px-4 items-center justify-between">
            <p>JohnDoeSamuel@x.pro</p>
            <div className="flex gap-2">
              <Button
                className="w-8 h-8 min-w-8 p-0"
                color="primary"
                variant="bordered"
              >
                <img className="w-4 h-4" src="/images/Copy.png" alt="copy" />
              </Button>
              <Button
                className="w-8 h-8 min-w-8 p-0"
                color="primary"
                variant="bordered"
              >
                <img className="w-4 h-4" src="/images/email.png" alt="copy" />
              </Button>
            </div>
          </div>
          <div className="bg-[#f9f9f9] rounded-2xl flex py-3 px-4 items-center justify-between">
            <p>+49 16 30580 9607</p>
            <div className="flex gap-2">
              <Button
                className="w-8 h-8 min-w-8 p-0"
                color="primary"
                variant="bordered"
              >
                <img className="w-4 h-4" src="/images/Copy.png" alt="copy" />
              </Button>
              <Button
                className="w-8 h-8 min-w-8 p-0"
                color="primary"
                variant="bordered"
              >
                <img className="w-4 h-4" src="/images/Call.png" alt="copy" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-full flex items-center justify-center gap-1 bg-[#E2F5D8] py-3 rounded-2xl text-[#41891C]">
            <img src="/images/Whatsapp.svg" alt="" />
            Whatsapp Chat
          </button>
          <button className="w-full flex items-center justify-center gap-1 bg-[#DFF5FF] py-3 rounded-2xl text-[#2A81A1]">
            <img src="/images/Telegram.svg" alt="" />
            Telegram Chat
          </button>
        </div>
      </div>
    </div>
  );
}
