"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import servicesImage from "@/assets/services.png";
import Button from "@/components/Button";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "@/utils/motion";

export default function Services() {
  const ourPoints = [
    {
      number: "01",
      Heading: "Decentralization",
      content:
        "Reduces reliance on centralized authorities, which can be beneficial in heavily regulated industries.",
      color: "bg-cyan-500",
    },
    {
      number: "02",
      Heading: "Transparency",
      content:
        "Transactions and product information are recorded on the blockchain, providing a transparent history that can enhance trust.",
      color: "bg-orange-500",
    },
    {
      number: "03",
      Heading: "Security",

      content:
        "Smart contracts can automate transactions securely, reducing the risk of fraud and ensuring that agreements are enforced without intermediaries.",
      color: "bg-green-500",
    },
    {
      number: "04",
      Heading: "Privacy",

      content:
        "Users can maintain their privacy, as transactions may not require extensive personal information compared to traditional systems.",
      color: "bg-cyan-500",
    },
    {
      number: "05",
      Heading: "Regulatory Compliance",

      content:
        "Smart contracts can be programmed to ensure compliance with local laws, helping businesses operate within legal boundaries.",
      color: "bg-orange-500",
    },
  ];

  return (
    <motion.section variants={staggerContainer(0.5, 0.3)}>
      <motion.div
        variants={fadeIn("left", "spring", 1, 0.3)}
        initial="hidden"
        whileInView="show"
        id="services"
        className="items-last-baseline mt-4 grid w-full grid-cols-1 items-baseline gap-8 md:grid-cols-2"
      >
        <div className="order-last flex w-full flex-col items-start gap-3 md:-order-1 lg:w-96">
          <p className="mt-4 text-base leading-normal text-gray-300">
          Know exactly where your premium herb comes from, every step of the way.
          Got questions or need the freshest drop? We're just a click away!
          </p>
          <Button>Contact Us</Button>
        </div>
        <p className="text-4xl font-medium leading-snug text-gray-500 lg:text-5xl">
          Why Choose us for best relaxation experience?
        </p>
      </motion.div>
      <div className="my-10 flex flex-col items-center justify-between gap-16 lg:flex-row">
        <motion.div
          variants={zoomIn(0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="h-full w-3/4"
        >
          <Image
            src={servicesImage}
            alt="Build image"
            priority
            className="w-full lg:w-[450px]"
          />
        </motion.div>
        <div className="flex flex-col gap-4 md:gap-10">
          {ourPoints.map((point, index) => (
            <motion.div
              key={point.content}
              variants={slideIn("down", "spring", 1, index * 0.3)}
              initial="hidden"
              whileInView="show"
              className="relative grid w-full grid-cols-1 gap-12 md:grid-cols-[80px_1fr] md:gap-4 lg:w-full"
            >
              <div
                className={`relative h-16 w-16 -translate-x-2 translate-y-1 transform rounded-bl-3xl rounded-br rounded-tl rounded-tr-3xl md:left-0 ${point.color}`}
              />

              <div>
                <span className="absolute left-4  top-2 w-full text-4xl font-semibold md:left-0">
                  {point.number}
                </span>
                <span className=" text-2xl font-semibold md:left-0">
                  <h2>{point.Heading}</h2>
                </span>
                <span className="text-base text-gray-300 md:text-lg">
                  {point.content}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
