import Section from "@/components/section";
import "./hero_2.css";

export default function Hero2() {
  return (
    <>
      <div className="lg:flex">
        <div className="relative hero-2-fade">
          <img
            src="/HUGGING_FULL_SIZE.webp"
            alt="Two people hugging in a moment of support"
            className="w-full"
          />
          <div className="hero-2-overlay" aria-hidden="true" />
          <div className="hero-2-title absolute flex flex-col text-5xl lg:text-7xl font-test font-black text-white top-6 left-6 z-10 leading-tight">
            <p>Mindfulness</p>
            <p>Community</p>
            <p>Accessibility</p>
          </div>
        </div>
        <div className="bg-gray-950 py-8 lg:py-12 -mt-2 lg:mt-0 text-white px-6 lg:px-12 text-lg lg:text-2xl font-bold wrap-[balance] italic flex flex-col items-center text-center lg:justify-center leading-relaxed border-t border-white/10 lg:border-t-0">
          <div className="w-full max-w-prose mx-auto">
            <img
              src="/quotes.svg"
              alt="Opening quotation mark"
              className="w-6 rotate-180 lg:w-8"
            />
            <div className="mt-4">
              Mental health is not a destination, but a process. It's about how
              you drive, not where you're going.
            </div>
            <img
              src="/quotes.svg"
              alt="Closing quotation mark"
              className="w-6 lg:w-8 ml-auto mt-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
