"use client";

import Section from "@/components/section";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import "./about.css";

export default function About() {
  const { isInView: isDiscoverVisible, ref: discoverRef } =
    useInViewOnce<HTMLDivElement>({
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    });

  return (
    <Section>
      <div id="about">
        <h2 className="sr-only">About Us</h2>
        <div
          ref={discoverRef}
          className={`discover-image ${isDiscoverVisible ? "is-visible" : ""}`}
        >
          <img
            src="/discover_lg-2.png"
            alt="discover what a little yarn can do for the sould"
            className="w-full lg:mx-auto hidden lg:block pt-8 lg:pt-6"
          />
          <img
            src="/discover.png"
            alt="discover what a little yarn can do for the sould"
            className="w-full lg:mx-auto block lg:hidden"
          />
        </div>
        <div className="section-container my-8 lg:mt-24 lg:grid lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1.4fr)] lg:items-start lg:gap-12">
          <div className="text-4xl lg:text-7xl font-bold text-brand font-test leading-tight tracking-tight">
            <div className="flex items-end gap-4">
              <span className="block">ANXIOUSLOOMERS</span>
            </div>
          </div>
          <div className="lg:text-xl border-b border-l pt-0 p-4 lg:p-8 mt-6 lg:mt-0 lg:ml-0 border-brand text-brand max-w-prose">
            We are an Ohio-based charity that uses loom knitting as a vehicle to
            promote mental health awareness and healthy coping skills. Through
            community workshops and partnerships, we give people a tangible way
            to care for their mental health while building connections in a
            stigma-free environment.
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
              <a
                href="#about"
                className="flex items-center gap-4 w-fit bg-accent-warm text-white px-5 py-3 font-bold right-arrow cursor-pointer mt-6"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
