import Section from "@/components/section";

export default function WhatWereDoing() {
  return (
    <Section>
      <h2 className="font-test font-bold text-4xl pr-4 bg-brand-dark text-white ml-12 py-4 text-right">
        What We're <div className="text-6xl font-black">DOING</div>
      </h2>
      <div className="mx-8 my-8 shadow-xl border border-accent-warm-light p-4 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-brand-dark">
            Weaving Wellness
          </h3>
          <a className="flex items-center gap-4 w-fit bg-accent-warm text-white px-4 py-2 font-bold right-arrow cursor-pointer">
            Details
          </a>
        </div>
        <div className="h-0.5 bg-brand-light w-full my-4" />
        <img src="/weaving_wellness.png" />
        <div className="h-0.5 bg-brand-light w-full my-4" />
        <p>
          This year, learn how crafting can be healing. <em>ANXIOUSLOOMERS</em>{" "}
          is proud to now offer a gentle introduction to loom knitting and
          mental wellness strategies. Each session combines hands-on winter hat
          crafting with discussions about stress management and healthy coping
          skills. Experience the meditative rhythm of looming while building
          friendships in a supportive, judgment-free environment.
        </p>
      </div>
    </Section>
  );
}
