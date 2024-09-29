import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Header() {
  return (
    <Navbar.Root>
      <a href="/">
        <Image
          src={"/images/logo.png"}
          width={250}
          height={250}
          className="absolute top-0"
          alt="logo"
        />
      </a>
    </Navbar.Root>
  );
}
