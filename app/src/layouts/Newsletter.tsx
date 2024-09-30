"use client";

import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { fadeIn } from "@/utils/motion";

export default function Newsletter() {
  return (
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <h2 className="w-9/12 text-4xl font-semibold capitalize leading-tight text-gray-500 md:w-7/12 md:text-5xl">
        Subscribe to our Newsletter
      </h2>
      <p className="w-9/12 text-base font-medium text-gray-300 md:w-7/12 md:text-lg">
        Age sold some full like rich new. Amounted repeated as believed in
        confined juvenile.
      </p>
      <Button>
        <a href="#" className="flex items-center justify-center gap-3">
          SUBSCRIBE
          <MoveRight size={18} />
        </a>
      </Button>
    </div>
  );
}
