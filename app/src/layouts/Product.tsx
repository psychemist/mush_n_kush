"use client";

import React from "react";

import Weed from "@/components/Weed";

import team1 from "@/assets/team1.png";
import Image from "next/image";

const WeedData = [
  {
    image: team1,
    title: "Card 1",
    content: "This is the content for card 1.",
  },
  {
    image: team1,
    title: "Card 2",
    content: "This is the content for card 2.",
  },
  { image: team1, title: "Card 3", content: "This is the content for card 3." },
  { image: team1, title: "Card 1", content: "This is the content for card 1." },
  { image: team1, title: "Card 2", content: "This is the content for card 2." },
  { image: team1, title: "Card 3", content: "This is the content for card 3." },
];

const Product = () => {
  return (
    <section className="flex flex-col py-20" id="team">
      <div>
        <h2 className="text-4xl font-semibold leading-relaxed text-gray-500 md:text-5xl">
          Our Best Selling Products
        </h2>
        <p className="w-11/12 text-base font-medium text-gray-300 md:w-7/12 md:text-lg">
          Blessing welcomed ladyship she met humoured sir breeding her. Six
          curiosity day assurance bed necessary.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        {WeedData.map((card, index) => (
          <Weed
            key={index}
            image={card.image}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
