"use client";

import React from "react";

import Weed from "@/components/Weed";

import strain2 from "@/assets/team2.png";
import strain6 from "@/assets/team6.png";
import strain1 from "@/assets/team1.png";
import strain3 from "@/assets/team3.png";
import strain4 from "@/assets/team4.png";
import strain5 from "@/assets/team5.png";
import Image from "next/image";

const WeedData = [
  {
    image: strain2,
    title: "Cosmic Citrus Haze",
    content:
      "A sativa-dominant hybrid that delivers an uplifting cerebral high with notes of tangy citrus. Perfect for creative pursuits and social gatherings.",
    price: "$1250 scroll",
  },
  {
    image: strain6,
    title: "Frost Giant OG",
    content:
      "A high-THC indica strain with a cool, minty flavor profile. Delivers a powerful body high that's perfect for pain relief and deep relaxation.",
    price: "$1800 scroll",
  },
  {
    image: strain1,
    title: "Velvet Midnight Kush",
    content:
      "An indica powerhouse with deep berry flavors and a smooth, velvety smoke. Excellent for insomnia and deep relaxation.",
    price: "$2500 scroll",
  },

  {
    image: strain5,
    title: "Purple Dreamcatcher CBD",
    content:
      "This indica-rich strain offers a calming body high with a pleasant grape aroma. Ideal for relaxation and stress relief without intense psychoactive effects",
    price: "$1000 scroll",
  },
  {
    image: strain4,
    title: "Mango Tango THC-V",
    content:
      "A unique sativa-leaning strain high in THC-V. Provides an uplifting, focused high with potential appetite-suppressing effects. Tastes of ripe mango and herbs.",
    price: "$1450 scroll",
  },

  {
    image: strain3,
    title: "Electric Lemon Zest",
    content:
      "A potent sativa strain with an energizing buzz and a sharp lemon scent. Great for boosting mood and focus during daytime use.",
    price: "$2000 scroll",
  },
];

const Product = () => {
  return (
    <section className="flex flex-col py-20" w-full id="team">
      <div>
        <h2 className="text-4xl font-semibold leading-relaxed text-gray-500 md:text-5xl">
          Our Best Selling Products
        </h2>
        <p className="w-11/12 py-8 text-base font-medium text-gray-300  md:w-full md:text-lg">
          Discover our premium marijuana offerings, expertly cultivated for
          quality and consistency. Our best-selling products are rigorously
          tested for purity and potency, ensuring a safe and enjoyable
          experience. From soothing flower strains to delicious edibles, we have
          something for everyone. Enjoy top-tier quality and exceptional
          customer support as you explore our selection!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        {WeedData.map((card, index) => (
          <Weed
            key={index}
            image={card.image}
            title={card.title}
            content={card.content}
            price={card.price}
            onClick={() => {}}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
