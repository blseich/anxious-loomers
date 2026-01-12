import Section from "@/components/section";
import About from "./about";
import Hero from "./hero";
import Hero2 from "./hero_2";
import MentalHealthMatters from "./mental-health-matters";
import TryItYourself from "./try-it-yourself";
import WhatWereDoing from "./what-were-doing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
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
      <Section>
        <h2 className="font-test font-bold text-4xl pl-4 bg-brand-dark text-white mr-12 py-4">
          Let's get <div className="text-6xl font-black">CONNECTED</div>
        </h2>
        <form className="flex flex-col gap-4 m-4 my-8 p-4 bg-brand-light border-l-8 border-l-brand-dark">
          <h3 className="text-4xl font-test font-bold text-brand-dark">
            Contact Form
          </h3>
          <input
            className="border hover:border-accent-warm focus:border-accent-warm border-accent-brand p-2 bg-white"
            type="text"
            placeholder="Name"
          />
          <input
            className="border hover:border-accent-warm focus:border-accent-warm border-accent-brand p-2 bg-white"
            type="text"
            placeholder="Email"
          />
          <input
            className="border hover:border-accent-warm focus:border-accent-warm border-accent-brand p-2 bg-white"
            type="tel"
            placeholder="Phone Number"
          />
          <textarea
            className="border hover:border-accent-warm focus:border-accent-warm border-accent-brand p-2 bg-white"
            placeholder="Comment"
          />
          <button
            className="items-center gap-4 bg-accent-warm text-white px-4 py-2 font-bold cursor-pointer w-1/2 text-center mx-auto"
            type="submit"
          >
            Send
          </button>
        </form>
        <div className="flex items-center gap-8 justify-center">
          <a
            href="https://www.facebook.com/Anxiousloomers/"
            className="w-12 rounded-full p-2 aspect-square text-brand-dark"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className="w-12 rounded-full p-2 aspect-square text-brand-dark">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="w-12 rounded-full p-2 aspect-square text-brand-dark">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </Section>
    </>
  );
}
