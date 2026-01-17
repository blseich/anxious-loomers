import Section from "@/components/section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function GetConnected() {
  return (
    <Section>
      <div className="lg:max-w-300 lg:mx-auto">
        <div className="mx-6 my-8 lg:mx-auto lg:max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="bg-brand-dark text-white px-6 py-10 lg:px-10 lg:py-12">
              <h2 className="font-test font-bold text-4xl lg:text-6xl leading-tight">
                Let's get
                <span className="block text-5xl lg:text-7xl font-black">
                  CONNECTED
                </span>
              </h2>
              <p className="mt-4 text-white/80 max-w-prose">
                Whether you’re curious, ready to collaborate, or just want to
                learn more, we’d love to hear from you.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-white/80">
                <div className="text-sm uppercase tracking-wide text-white/60">
                  Stay Connected
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/Anxiousloomers/"
                    className="flex items-center justify-center w-12 rounded-full p-2 aspect-square bg-white/10 text-white border border-white/20"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a className="flex items-center justify-center w-12 rounded-full p-2 aspect-square bg-white/10 text-white border border-white/20">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a className="flex items-center justify-center w-12 rounded-full p-2 aspect-square bg-white/10 text-white border border-white/20">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
            <form className="flex flex-col gap-5 px-6 py-10 lg:px-10 lg:py-12 border border-accent-warm-light bg-brand-light/40">
              <div className="text-brand-dark text-sm font-semibold tracking-wide uppercase">
                Contact Form
              </div>
              <label className="flex flex-col gap-2 text-brand-dark">
                <span className="text-sm font-semibold">Name</span>
                <input
                  className="border hover:border-accent-warm focus:border-accent-warm border-accent-brand p-3 bg-white text-brand-dark placeholder:text-brand-dark/60"
                  type="text"
                  placeholder="Name"
                />
              </label>
              <label className="flex flex-col gap-2 text-brand-dark">
                <span className="text-sm font-semibold">Email</span>
                <input
                  className="border hover:border-accent-warm focus:border-accent-warm border-accent-brand p-3 bg-white text-brand-dark placeholder:text-brand-dark/60"
                  type="text"
                  placeholder="Email"
                />
              </label>
              <label className="flex flex-col gap-2 text-brand-dark">
                <span className="text-sm font-semibold">Phone</span>
                <input
                  className="border hover:border-accent-warm focus:border-accent-warm border-accent-brand p-3 bg-white text-brand-dark placeholder:text-brand-dark/60"
                  type="tel"
                  placeholder="Phone Number"
                />
              </label>
              <label className="flex flex-col gap-2 text-brand-dark">
                <span className="text-sm font-semibold">Message</span>
                <textarea
                  className="border hover:border-accent-warm focus:border-accent-warm border-accent-brand p-3 bg-white text-brand-dark placeholder:text-brand-dark/60 min-h-32"
                  placeholder="Message"
                />
              </label>
              <button
                className="items-center gap-4 bg-accent-warm text-white px-4 py-3 font-bold cursor-pointer w-full text-center"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
