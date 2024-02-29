"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
];

export default function About() {
  return (<HeroParallax products={products} />);
}