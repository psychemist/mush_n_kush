import Image from "next/image";
import Button from "@/components/Button";
import hero from "@/assets/hero.png";

export default function Banner() {
  const totalValues = [
    {
      number: "6,255,356",
      content: "Sales Completed",
      color: "bg-orange-500",
    },
    {
      number: "15000+",
      content: "Daily Customers",
      color: "bg-cyan-500",
    },
    {
      number: "50+",
      content: "Countries Present",
      color: "bg-green-500",
    },
  ];

  return (
    <section className="mt-5 grid grid-cols-1 lg:grid-cols-2">
      <article className="mt-8 flex flex-col gap-28">
        <div className="flex flex-col gap-8">
          <h2 className="w-10/12 text-5xl font-bold leading-tight text-gray-500 md:w-full lg:text-6xl">
            <span className="whitespace-pre text-green-500">Nature's</span>{" "}
            Finest at your <span className="text-green-500">FingerTips</span>.
          </h2>
          <p className="w-10/12 text-base font-normal md:text-lg">
            Marijuana provides significant benefits, including pain relief,
            anxiety reduction, seizure reduction, nausea relief, appetite
            stimulation, and improved sleep.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-4">
            <Button>Explore</Button>
            <Button color="outline">Contact Us</Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-around gap-8">
          {totalValues.map(({ number, content, color }) => (
            <div key={number} className="relative flex flex-col gap-2">
              <span className="text-3xl font-medium lg:text-4xl">{number}</span>
              <span className="text-base leading-normal text-gray-300 md:text-lg lg:text-xl">
                {content}
              </span>
              <div className={`left-0 h-1 w-40 ${color}`} />
            </div>
          ))}
        </div>
      </article>

      <article className="hidden lg:block">
        <div className="-mr-10 -mt-[6.5rem]">
          <Image src={hero} alt="" priority className="max-w-full" />
        </div>
      </article>
    </section>
  );
}
