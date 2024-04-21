"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCard() {
  return (
    <div className="h-[10rem]  flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "NextJs",
    name: "",
    
  },
  {
    quote:
      "Express Js",
    name: "William Shakespeare",
    
  },
  {
    quote: "Tailwind CSS",
    name: "Edgar Allan Poe",
    
  },
  {
    quote:
      "Next Auth",
    name: "Jane Austen",
    
  },
  {
    quote:
      "MongoDB",
    name: "Herman Melville",
    
  },
  {
    quote:
      "TypeScript",
    name: "Herman Melville",
    
  },
];
