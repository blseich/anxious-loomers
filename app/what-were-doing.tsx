"use client";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./what-were-doing.css";

export default function WhatWereDoing() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 3;

  return (
    <>
      <div className="bg-brand-dark text-white">
        <div className="section-container py-6 lg:py-8">
          <h2 className="font-test font-bold text-4xl lg:text-5xl">
            <span className="block">What We're</span>
            <span className="block text-5xl lg:text-6xl font-black">DOING</span>
          </h2>
          <p className="mt-2 text-white/80 max-w-prose">
            Programs and partnerships that turn loom knitting into community
            care and connection.
          </p>
        </div>
        <div className="section-container pb-8 lg:pb-12">
          <div className="-mt-6 lg:-mt-10 rounded-3xl bg-brand-dark/90 p-4 lg:p-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col gap-4">
                <div className="flex justify-center gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={`slide-${index}`}
                      type="button"
                      onClick={() => swiperRef.current?.slideTo(index)}
                      className={`h-2.5 w-8 rounded-full transition-colors cursor-pointer ${
                        index === activeIndex ? "bg-accent-warm" : "bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={index === activeIndex}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-4 lg:gap-6">
                  <button
                    type="button"
                    onClick={() => swiperRef.current?.slidePrev()}
                    className={`hidden lg:inline-flex items-center justify-center h-14 w-14 rounded-full border text-3xl cursor-pointer ${
                      isBeginning
                        ? "border-gray-300 text-gray-300"
                        : "border-accent-warm text-accent-warm"
                    }`}
                    aria-label="Previous slide"
                    aria-disabled={isBeginning}
                    disabled={isBeginning}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </button>
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    className="what-were-doing-carousel flex-1"
                    breakpoints={{ 1024: { spaceBetween: 32 } }}
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                      setIsBeginning(swiper.isBeginning);
                      setIsEnd(swiper.isEnd);
                      setActiveIndex(swiper.activeIndex);
                    }}
                    onSlideChange={(swiper) => {
                      setIsBeginning(swiper.isBeginning);
                      setIsEnd(swiper.isEnd);
                      setActiveIndex(swiper.activeIndex);
                    }}
                  >
                    <SwiperSlide className="h-full">
                      <div className="bg-white border border-accent-warm-light shadow-xl rounded-2xl overflow-hidden h-[520px] lg:h-[600px] flex flex-col relative">
                        <div className="p-4 lg:p-6 border-b border-brand-light flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <div className="inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-semibold tracking-wide text-brand-dark">
                              Community Program
                            </div>
                            <h3 className="text-2xl font-semibold text-brand-dark mt-2">
                              Weaving Wellness
                            </h3>
                            <p className="text-sm text-brand-dark/70">
                              Hands-on loom knitting with mental wellness
                              strategies.
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
                          className="grid gap-6 p-4 lg:p-6 lg:grid-cols-[1.1fr_1fr] lg:items-start flex-1 overflow-hidden"
                          id="weaving-wellness"
                        >
                          <img
                            src="/weaving_wellness.png"
                            alt="Weaving Wellness loom knitting session"
                            className="what-were-doing-image w-full rounded-xl border border-brand-light object-cover"
                          />
                          <p className="text-brand-dark text-base lg:text-lg">
                            This year, learn how crafting can be healing.{" "}
                            <em>ANXIOUSLOOMERS</em> is proud to now offer a
                            gentle introduction to loom knitting and mental
                            wellness strategies. Each session combines hands-on
                            winter hat crafting with discussions about stress
                            management and healthy coping skills. Experience the
                            meditative rhythm of looming while building
                            friendships in a supportive, judgment-free
                            environment.
                          </p>
                        </div>
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-white/0" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                      <div className="bg-white border border-accent-warm-light shadow-xl rounded-2xl overflow-hidden h-[520px] lg:h-[600px] flex flex-col relative">
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
                            Details
                          </a>
                        </div>
                        <div
                          className="grid gap-6 p-4 lg:p-6 lg:grid-cols-[1.1fr_1fr] lg:items-start flex-1 overflow-hidden"
                          id="warming-hearts"
                        >
                          <img
                            src="/promise-house-delaware.jpeg"
                            alt="Promise House Delaware community support program"
                            className="what-were-doing-image w-full rounded-xl border border-brand-light object-cover"
                          />
                          <p className="text-brand-dark text-base lg:text-lg">
                            ANXIOUSLOOMERS is proud to partner with Family
                            Promise of Delaware, Ohio, a nonprofit organization
                            dedicated to preventing and ending homelessness for
                            families with children. They provide emergency
                            shelter, meals, and comprehensive support services
                            to help families achieve sustainable independence.
                            Their programs include homelessness prevention,
                            workforce development, and financial stability
                            resources. Additionally, they focus on meeting the
                            immediate needs of homeless families and training
                            volunteers to assist at-risk families in achieving
                            their goals.
                          </p>
                        </div>
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-white/0" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                      <div className="bg-white border border-accent-warm-light shadow-xl rounded-2xl overflow-hidden h-[520px] lg:h-[600px] flex flex-col relative">
                        <div className="p-4 lg:p-6 border-b border-brand-light flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <div className="inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-semibold tracking-wide text-brand-dark">
                              Community Support
                            </div>
                            <h3 className="text-2xl font-semibold text-brand-dark mt-2">
                              Backpack Drive
                            </h3>
                            <p className="text-sm text-brand-dark/70">
                              Filling backpacks with essentials for those
                              experiencing homelessness
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
                          className="grid gap-6 p-4 lg:p-6 lg:grid-cols-[1.1fr_1fr] lg:items-start flex-1 overflow-hidden"
                          id="backpack-drive"
                        >
                          <img
                            src="/take-the-opportunity.jpg"
                            alt="Take the Opportunity backpack drive support event"
                            className="what-were-doing-image w-full rounded-xl border border-brand-light object-cover"
                          />
                          <p className="text-brand-dark text-base lg:text-lg">
                            Take the Opportunity builds community by providing
                            compassionate, practical support to people
                            experiencing homelessness, while empowering
                            volunteers to make a real and immediate impact!!
                            Always ready to Take The Opportunity!
                            <br />
                            <br />
                            ANXIOUSLOOMERS is proud to have participated in Take
                            The Opportunity's second annual backpack drive
                            2024-2025, over 200 backpacks filled with hygienic
                            resources and other essentials were donated to those
                            experiencing homelessness.
                          </p>
                        </div>
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-white/0" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <button
                    type="button"
                    onClick={() => swiperRef.current?.slideNext()}
                    className={`hidden lg:inline-flex items-center justify-center h-14 w-14 rounded-full border text-3xl cursor-pointer ${
                      isEnd
                        ? "border-gray-300 text-gray-300"
                        : "border-accent-warm text-accent-warm"
                    }`}
                    aria-label="Next slide"
                    aria-disabled={isEnd}
                    disabled={isEnd}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
