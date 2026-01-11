import About from "./about";
import MentalHealthMatters from "./mental-health-matters";
import WhatWereDoing from "./what-were-doing";
export default function Home() {
  return (
    <>
      <div className="flex min-h-[calc(100lvh-7rem)] justify-center bg-zinc-50 font-sans">
        <div className="w-lvw relative overflow-hidden bg-[url('/hero_bg.png')] bg-no-repeat bg-cover items-center bg-center mask-[linear-gradient(to_bottom,#fff_90%,transparent)] mask-no-repeat">
          <h1 className="sr-only">ANXIOUSLOOMERS</h1>
          <img
            src="/hero_hat.png"
            className="w-full lg:w-auto lg:h-full absolute top-1/4 lg:top-1/2 left-1/2 -translate-y-1/4 lg:-translate-y-1/2 -translate-x-1/2 scale-200 lg:scale-100 origin-center"
          />
          <img
            src="/hero_slogan.png"
            className="w-full top-2 left-2 lg:h-full lg:w-auto absolute lg:top-1/2 lg:left-8 lg:-translate-y-1/2"
          />
          <img
            src="/hero_logo-flat.png"
            className="absolute bottom-1/4 w-11/12 left-1/2 -translate-x-1/2 lg:w-5/12 lg:bottom-8 lg:right-8 lg:translate-0 lg:left-auto"
          />
        </div>
      </div>
      {/* <div className="w-full bg-brand-dark text-white flex flex-col lg:flex-row p-4 gap-2 items-baseline lg:justify-center">
        <h2 className="text-2xl font-black text-accent-warm">Please Note:</h2>
        <p>Donations are not currently tax exempt.</p>
        <p>
          ANXIOUSLOOMERS is currently in the process of submitting and obtaining
          tax exempt status with the IRS and State of Ohio.
        </p>
      </div> */}
      <About />
      <MentalHealthMatters />
      <WhatWereDoing />
      <div className="h-90" />
    </>
  );
}
