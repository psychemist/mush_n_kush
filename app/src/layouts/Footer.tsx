import { Input } from "@/components/Input";
import InputIcon from "@/components/Input/InputIcon";
import { ArrowRightCircle, Facebook, Linkedin, Twitter } from "lucide-react";
import footerlogo from "@/assets/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-10 flex w-full flex-col items-center gap-8 pt-10">
      <div className="grid grid-cols-1 place-items-start justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        <section className="flex w-full flex-col items-center gap-8">
          <div>
            <Image src={footerlogo} alt="logo" />
          </div>
        </section>
        <section className="flex w-full flex-col gap-8">
          <h3 className="text-lg font-semibold text-gray-500">Socials</h3>
          <article className="flex flex-col items-start gap-8">
            <p className="font-base w-60 text-gray-300">
              Connect with us , Join our community and get access to our latest
              news and updates.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded bg-cyan-500"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded bg-cyan-500"
              >
                <Twitter size={18} className="text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded bg-cyan-500"
              >
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </article>
        </section>

        <section className="flex w-full flex-col gap-8">
          <h3 className="text-lg font-semibold text-gray-500">
            Receive Our NewsLetter
          </h3>
          <article className="flex flex-col gap-4 text-base text-gray-300">
            <Input.Root>
              <Input.Field
                name="getintouch"
                placeholder="Enter your email"
                className="h-10 w-full rounded border-0 bg-gray-50 text-xs text-gray-500 placeholder:text-gray-200 focus-within:bg-transparent focus:ring-0"
              />
              <InputIcon
                icon={ArrowRightCircle}
                size="18"
                className="text-cyan-500"
              />
            </Input.Root>
          </article>
        </section>
      </div>
      <section className="flex w-full justify-center border-t-2 border-gray-100 py-6 text-center">
        <span className="text-sm font-medium text-gray-100">
          {" "}
          All rights reserved.
        </span>
      </section>
    </footer>
  );
}
