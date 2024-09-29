import { Input } from "@/components/Input";
import InputIcon from "@/components/Input/InputIcon";
import { ArrowRightCircle, Facebook, Linkedin, Twitter, } from "lucide-react";
import footerlogo from "@/assets/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-8 w-full pt-10 mt-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-start justify-items-center">
        <section className="flex flex-col gap-8 w-full items-center">
          <div>
            <Image src={footerlogo} alt="logo" />
          </div>
         
          
        </section>
        <section className="flex flex-col gap-8 w-full">
          <h3 className="font-semibold text-gray-500 text-lg">
            Socials
          </h3>
          <article className="flex flex-col items-start gap-8">
            <p className="font-base text-gray-300 w-60">
              Connect with us , Join our community and get access to our latest news and updates.
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" className="w-8 h-8 flex items-center justify-center bg-cyan-500 rounded">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" target="_blank" className="w-8 h-8 flex items-center justify-center bg-cyan-500 rounded">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" target="_blank" className="w-8 h-8 flex items-center justify-center bg-cyan-500 rounded">
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </article>
        </section>
       
        <section className="flex flex-col gap-8 w-full">
          <h3 className="font-semibold text-gray-500 text-lg">
            Receive Our NewsLetter
          </h3>
          <article className="flex flex-col gap-4 text-base text-gray-300">
            <Input.Root>
            <Input.Field
              name="getintouch"
              placeholder="Enter your email"
              className="rounded w-full h-10 text-xs text-gray-500 bg-gray-50 placeholder:text-gray-200 border-0 focus:ring-0 focus-within:bg-transparent"
            />
            <InputIcon icon={ArrowRightCircle} size="18" className="text-cyan-500" />
            </Input.Root>
          </article>
        </section>
      </div>
      <section className="flex text-center justify-center py-6 border-t-2 border-gray-100 w-full">
        <span className="text-gray-100 text-sm font-medium"> All rights reserved.</span>
      </section>
    </footer >
  )
}
