import Image from "next/image";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";

export default function Partnership() {
  const partnerships = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="my-16 flex w-full flex-wrap items-center justify-center gap-6 rounded-full bg-transparent px-4 py-8 md:gap-10 lg:bg-gray-50">
      {partnerships.map((partnership) => (
        <Image
          key={partnership}
          src={partnership}
          alt="partnership"
          className="h-full w-40"
        />
      ))}
    </div>
  );
}
