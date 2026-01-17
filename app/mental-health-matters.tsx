"use client";

import Section from "@/components/section";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import "./mental-health-matters.css";

export default function MentalHealthMatters() {
  const { isInView: statOneVisible, ref: statOneRef } =
    useInViewOnce<HTMLDivElement>({
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    });
  const { isInView: statTwoVisible, ref: statTwoRef } =
    useInViewOnce<HTMLDivElement>({
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    });
  const { isInView: statThreeVisible, ref: statThreeRef } =
    useInViewOnce<HTMLDivElement>({
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    });

  return (
    <>
      <div className="bg-brand-dark text-white p-6 lg:p-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-test font-bold text-4xl lg:text-5xl">
            Why Mental Health
            <div className="text-5xl lg:text-6xl font-black">MATTERS</div>
          </h2>
          <p className="mt-2 text-white/80 max-w-prose">
            The numbers tell a story. These statistics are why support and
            awareness are critical to improving the wellness of our communities.
          </p>
        </div>
      </div>
      <div className="section-container lg:flex lg:flex-col">
        <div className="mt-10 grid gap-6 lg:gap-8 lg:grid-cols-3 lg:max-w-285 lg:mx-auto">
          <div
            ref={statOneRef}
            className={`stat-card bg-brand-dark text-white p-6 lg:p-8 rounded-2xl text-base lg:text-lg text-center border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden ${
              statOneVisible ? "is-visible" : ""
            }`}
          >
            <div className="h-1 w-16 bg-accent-warm mx-auto mb-6" />
            <img
              src="/1-in-5.png"
              alt="1 in 5 statistic"
              className="w-31.25 lg:w-62.5 mx-auto drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]"
            />
            <p className="mt-6 max-w-prose mx-auto text-white/90">
              1 in 5 people will battle with mental illness each year.
            </p>
          </div>
          <div
            ref={statTwoRef}
            className={`stat-card bg-brand-dark text-white p-6 lg:p-8 rounded-2xl text-base lg:text-lg text-center border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden ${
              statTwoVisible ? "is-visible" : ""
            }`}
          >
            <div className="h-1 w-16 bg-accent-warm mx-auto mb-6" />
            <img
              src="/14-candles.png"
              alt="14 candles statistic"
              className="h-31.25 lg:h-62.5 mx-auto drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]"
            />
            <p className="mt-6 max-w-prose mx-auto text-white/90">
              Half of all lifetime mental illness will present by the age of 14.
            </p>
          </div>
          <div
            ref={statThreeRef}
            className={`stat-card bg-brand-dark text-white p-6 lg:p-8 rounded-2xl text-base lg:text-lg text-center border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden ${
              statThreeVisible ? "is-visible" : ""
            }`}
          >
            <div className="h-1 w-16 bg-accent-warm mx-auto mb-6" />
            <img
              src="/60-percent.png"
              alt="60 percent statistic"
              className="w-31.25 lg:w-62.5 mx-auto drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]"
            />
            <p className="mt-6 max-w-prose mx-auto text-white/90">
              60% of those with mental illness will not receive proper
              treatment.
            </p>
          </div>
          <div className="text-sm w-full text-gray-400 lg:col-span-3">
            *Source: National Alliance on Mental Illness (NAMI)
          </div>
        </div>
        <div className="lg:max-w-1/2 lg:mx-auto" id="resources">
          <div className="border-l-8 border-l-brand-dark bg-brand-light p-4 mt-8">
            <div className="text-xl font-bold text-brand-dark mb-2">
              Mental health is just as important as physical health
            </div>
            <div>
              Yet stigma, lack of awareness, and limited access to resources
              prevent millions from getting the support they need.
            </div>
          </div>
          <a
            href="#resources"
            className="flex items-center gap-4 w-fit bg-accent-warm text-white px-4 py-2 my-4 font-bold right-arrow cursor-pointer"
          >
            Find More Resources
          </a>
        </div>
      </div>
    </>
  );
}
