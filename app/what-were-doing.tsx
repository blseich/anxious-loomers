"use client";

import Section from "@/components/section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./what-were-doing.css";

export default function WhatWereDoing() {
  return (
    <Section>
      <div className="lg:max-w-300 lg:mx-auto">
        <div className="bg-brand-dark text-white py-6 lg:py-8 px-4">
          <h2 className="font-test font-bold text-4xl lg:text-5xl">
            <span className="block">What We're</span>
            <span className="block text-5xl lg:text-6xl font-black">DOING</span>
          </h2>
          <p className="mt-2 text-white/80 max-w-prose">
            Programs and partnerships that turn loom knitting into community
            care and connection.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          className="what-were-doing-carousel mx-6 my-8 lg:max-w-4xl lg:mx-auto"
          breakpoints={{ 1024: { spaceBetween: 32 } }}
        >
          <SwiperSlide className="h-full">
            <div className="bg-white border border-accent-warm-light shadow-xl rounded-2xl overflow-hidden h-full flex flex-col">
              <div className="p-4 lg:p-6 border-b border-brand-light flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-semibold tracking-wide text-brand-dark">
                    Community Program
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-dark mt-2">
                    Weaving Wellness
                  </h3>
                  <p className="text-sm text-brand-dark/70">
                    Hands-on loom knitting with mental wellness strategies.
                  </p>
                </div>
                <a
                  href="#weaving-wellness"
                  className="flex items-center gap-4 w-fit bg-accent-warm text-white px-4 py-2 font-bold right-arrow cursor-pointer"
                >
                  Details
                </a>
              </div>
              <div
                className="grid gap-6 p-4 lg:p-6 lg:grid-cols-[1.1fr_1fr] lg:items-start flex-1"
                id="weaving-wellness"
              >
                <img
                  src="/weaving_wellness.png"
                  alt="Weaving Wellness loom knitting session"
                  className="what-were-doing-image w-full rounded-xl border border-brand-light object-cover"
                />
                <p className="text-brand-dark text-base lg:text-lg">
                  This year, learn how crafting can be healing.{" "}
                  <em>ANXIOUSLOOMERS</em> is proud to now offer a gentle
                  introduction to loom knitting and mental wellness strategies.
                  Each session combines hands-on winter hat crafting with
                  discussions about stress management and healthy coping skills.
                  Experience the meditative rhythm of looming while building
                  friendships in a supportive, judgment-free environment.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="bg-white border border-accent-warm-light shadow-xl rounded-2xl overflow-hidden h-full flex flex-col">
              <div className="p-4 lg:p-6 border-b border-brand-light flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-semibold tracking-wide text-brand-dark">
                    Community Support
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-dark mt-2">
                    Partnership with Family Promise
                  </h3>
                  <p className="text-sm text-brand-dark/70">
                    Donating winter hats/beanies to those in need
                  </p>
                </div>
                <a
                  href="#warming-hearts"
                  className="flex items-center gap-4 w-fit bg-accent-warm text-white px-4 py-2 font-bold right-arrow cursor-pointer"
                >
                  Visit Family Promise
                </a>
              </div>
              <div
                className="grid gap-6 p-4 lg:p-6 lg:grid-cols-[1.1fr_1fr] lg:items-start flex-1"
                id="warming-hearts"
              >
                <img
                  src="/promise-house-delaware.jpeg"
                  alt="Promise House Delaware community support program"
                  className="what-were-doing-image w-full rounded-xl border border-brand-light object-cover"
                />
                <p className="text-brand-dark text-base lg:text-lg">
                  ANXIOUSLOOMERS is proud to partner Family Promise of Delaware,
                  Ohio, a nonprofit organization dedicated to preventing and
                  ending homelessness for families with children. They provide
                  emergency shelter, meals, and comprehensive support services
                  to help families achieve sustainable independence. Their
                  programs include homelessness prevention, workforce
                  development, and financial stability resources. Additionally,
                  they focus on meeting the immediate needs of homeless families
                  and training volunteers to assist at-risk families in
                  achieving their goals.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="bg-white border border-accent-warm-light shadow-xl rounded-2xl overflow-hidden h-full flex flex-col">
              <div className="p-4 lg:p-6 border-b border-brand-light flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-semibold tracking-wide text-brand-dark">
                    Community Support
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-dark mt-2">
                    Backpack Drive
                  </h3>
                  <p className="text-sm text-brand-dark/70">
                    Filling backpacks with essentials for those experiencing
                    homelessness
                  </p>
                </div>
                <a
                  href="#backpack-drive"
                  className="flex items-center gap-4 w-fit bg-accent-warm text-white px-4 py-2 font-bold right-arrow cursor-pointer"
                >
                  Details
                </a>
              </div>
              <div
                className="grid gap-6 p-4 lg:p-6 lg:grid-cols-[1.1fr_1fr] lg:items-start flex-1"
                id="backpack-drive"
              >
                <img
                  src="/take-the-opportunity.jpg"
                  alt="Take the Opportunity backpack drive support event"
                  className="what-were-doing-image w-full rounded-xl border border-brand-light object-cover"
                />
                <p className="text-brand-dark text-base lg:text-lg">
                  Take the Opportunity builds community by providing
                  compassionate, practical support to people experiencing
                  homelessness, while empowering volunteers to make a real and
                  immediate impact!! Always ready to Take The Opportunity!
                  <br />
                  <br />
                  ANXIOUSLOOMERS is proud to have participated in Take The
                  Opportunity's second annual backpack drive 2024-2025, over 200
                  backpacks filled with hygienic resources and other essentials
                  were donated to those experiencing homelessness.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Section>
  );
}
