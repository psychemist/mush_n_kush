import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Header() {
  return (
    <Navbar.Root>
      <a href="/">
        <Image
          src={"/images/logo.png"}
          width={200}
          height={200}
          className="absolute -top-5"
          alt="logo"
        />
      </a>
    </Navbar.Root>
  );
}
