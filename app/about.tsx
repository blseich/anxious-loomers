import Section from "@/components/section";
import "./about.css";

export default function About() {
  return (
    <Section>
      <h2 className="sr-only">About Us</h2>
      <img
        src="/discover.png"
        alt="discover what a little yarn can do for the sould"
        className="w-full"
      />
      <div className="mx-4 mt-4">
        <div className="text-4xl font-bold text-brand-dark mb-2">
          ANXIOUSLOOMERS
        </div>
        <div className="text-wrap-[balanced]">
          is an Ohio-based charity that uses loom knitting as a vehicle to
          promote mental health awareness and healthy coping skills. Through
          community workshops and partnerships, we give people a tangible way to
          care for their mental health while building connections in a
          stigma-free environment.
        </div>
        <a className="flex items-center gap-4 w-fit bg-accent-warm text-white px-4 py-2 my-4 font-bold right-arrow cursor-pointer">
          Learn More
        </a>
      </div>
    </Section>
  );
}
