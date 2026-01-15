import Section from "@/components/section";
import "./about.css";

export default function About() {
  return (
    <Section>
      <h2 className="sr-only">About Us</h2>
      <img
        src="/discover_lg-2.png"
        alt="discover what a little yarn can do for the sould"
        className="w-full lg:mx-auto hidden lg:block pt-16"
      />
      <img
        src="/discover.png"
        alt="discover what a little yarn can do for the sould"
        className="w-full lg:mx-auto block lg:hidden"
      />
      <div className="mx-4 my-8 lg:max-w-300 lg:mx-auto lg:mt-32">
        <div className="text-4xl lg:text-8xl font-bold text-brand font-test flex items-end">
          <div className="pr-4 pb-2">ANXIOUSLOOMERS</div>
          <div className="h-7 lg:h-10 w-full border-t border-r" />
        </div>
        <div className="lg:text-xl border-r border-b border-l pt-0 p-4 lg:p-8 ml-4 lg:ml-8 border-brand">
          is an Ohio-based charity that uses loom knitting as a vehicle to
          promote mental health awareness and healthy coping skills. Through
          community workshops and partnerships, we give people a tangible way to
          care for their mental health while building connections in a
          stigma-free environment.
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
            <a className="flex items-center gap-4 w-fit bg-accent-warm text-white px-4 py-2 font-bold right-arrow cursor-pointer mt-8">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
