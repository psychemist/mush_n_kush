import Image from "next/image";
import { FaEye, FaHatWizard } from "react-icons/fa";

export default function HotelCard({ imgUrl, name, startingPrice }) {
  return (
    <div className="rounded-2xl bg-white px-4 py-4">
      <div>
        <Image
          className="rounded-3xl"
          src={imgUrl}
          height={400}
          width={400}
          alt={`Viewing ${name}`}
        />
      </div>
      <h3 className="mt-4 font-semibold text-black">{name}</h3>
      <p className="mt-4 text-sm text-gray-400">
        start from £{startingPrice}/night
      </p>
      <div className="mt-8 flex">
        <button className="btn mr-4 flex-1">Book Now</button>
        <button className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-red-400">
          <FaEye size={24} />
        </button>
      </div>
    </div>
  );
}
