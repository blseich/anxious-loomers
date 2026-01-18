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
      <About />
      <TryItYourself />
      <MentalHealthMatters />
      <WhatWereDoing />
      <Hero2 />
      <GetConnected />
    </>
  );
}
