"use client";

import { MoveLeft, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import Card from "@/components/Card";
import team1 from "@/assets/team1.png";
import team2 from "@/assets/team2.png";
import team3 from "@/assets/team3.png";
import { fadeIn } from "@/utils/motion";

export default function Cards() {
  const team = [
    {
      image: team1,
      name: "Chris Evans",
      city: "Michigan, TX",
      number: "989-653-2986",
      email: "chrisevans@cons.com",
    },
    {
      image: team2,
      name: "Alison Kiara",
      city: "Michigan, TX",
      number: "989-653-2986",
      email: "alisonkiara@cons.com",
    },
    {
      image: team3,
      name: "Adam Gates",
      city: "Michigan, TX",
      number: "989-653-2986",
      email: "adamgates@cons.com",
    },
    {
      image: team1,
      name: "Paul Bridge",
      city: "Michigan, TX",
      number: "989-653-2986",
      email: "paulbridge@cons.com",
    },
    {
      image: team2,
      name: "Sara Storm",
      city: "Michigan, TX",
      number: "989-653-2986",
      email: "sarastorm@cons.com",
    },
    {
      image: team1,
      name: "Clement Alves",
      city: "Michigan, TX",
      number: "989-653-2986",
      email: "clement1@cons.com",
    },
  ];

  return (
    <section className="flex flex-col py-20" id="team">
      {/* Caurosel */}
      <Splide
        hasTrack={false}
        tag="section"
        options={{
          perPage: 3,
          perMove: 1,
          gap: 20,
          keyboard: true,
          drag: true,
          breakpoints: {
            640: {
              perPage: 1,
              gap: 0,
            },
            1024: {
              perPage: 2,
              gap: 10,
            },
          },
        }}
      >
        <SplideTrack className="py-8">
          {team.map((team) => (
            <SplideSlide key={team.name + team.email}>
              <Card
                className="mx-auto"
                srcImage={team.image}
                name={team.name}
                city={team.city}
                number={team.number}
                email={team.email}
              />
            </SplideSlide>
          ))}
        </SplideTrack>

        {/* Custom Arrows */}
        <div className="splide__arrows mx-auto flex w-24 items-center justify-center gap-1 rounded-full bg-white py-2 shadow-lg">
          <button className="splide__arrow splide__arrow--prev flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
            <MoveLeft size={24} className="text-black" />
          </button>
          <button className="splide__arrow splide__arrow--next flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500">
            <MoveRight size={24} className="text-white" />
          </button>
        </div>
      </Splide>
    </section>
  );
}
