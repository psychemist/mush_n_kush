import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import logohead from "@/assets/logo.png";

export default function Header() {
  return (
    <Navbar.Root>
      <a href="/">
        <Image
          src={logohead}
          width={250}
          height={250}
          className="absolute top-8"
          alt="logo"
        />
      </a>
    </Navbar.Root>
  );
}
