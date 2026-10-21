"use client";
import { Card, Carousel } from "@/components/projects/apple-cards-carousel";
import { data } from "@/components/projects/Data";


export default function AllProjects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
  console.log(data[0]);

  return (
    <div className="w-full h-full pt-8 font-sans">
      <h2 className="max-w-7xl mx-auto font-heading text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-foreground dark:text-[#EDEDED]">
        My Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
