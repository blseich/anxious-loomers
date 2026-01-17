import About from "./about";
import GetConnected from "./get-connected";
import Hero from "./hero";
import Hero2 from "./hero_2";
import MentalHealthMatters from "./mental-health-matters";
import TryItYourself from "./try-it-yourself";
import WhatWereDoing from "./what-were-doing";
export default function Home() {
  return (
    <>
      <Hero />
      {/* <div className="w-full bg-brand-dark text-white flex flex-col lg:flex-row p-4 gap-2 items-baseline lg:justify-center">
        <h2 className="text-2xl font-black text-accent-warm">Please Note:</h2>
        <p>Donations are not currently tax exempt.</p>
        <p>
          ANXIOUSLOOMERS is currently in the process of submitting and obtaining
          tax exempt status with the IRS and State of Ohio.
        </p>
      </div> */}
      <About />
      <TryItYourself />
      <MentalHealthMatters />
      <WhatWereDoing />
      <Hero2 />
      <GetConnected />
    </>
  );
}
