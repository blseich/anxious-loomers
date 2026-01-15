import Section from "@/components/section";

export default function MentalHealthMatters() {
  return (
    <Section>
      <div className="lg:flex lg:flex-col">
        <h2 className="font-test font-bold text-4xl pl-4 bg-brand-dark text-white mr-12 py-4">
          Why Mental Health <div className="text-6xl font-black">MATTERS</div>
        </h2>

        <div className="mt-12 mx-4 grid grid-cols-[125px_1fr] lg:grid-cols-[1fr_2px_1fr_2px_1fr] lg:grid-rows-[250px_1fr] gap-4 lg:gap-12 place-items-center text-lg lg:max-w-285 lg:mx-auto lg:text-center">
          <img src="/1-in-5.png" className="w-31.25 lg:w-62.5" />
          <div className="lg:row-start-2">
            1 in 5 people will battle with mental illness each year
          </div>
          <div className="h-0.5 bg-brand-light col-span-2 w-full lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-2 lg:h-full" />
          <img
            src="/14-candles.png"
            className="h-31.25 lg:h-62.5 lg:col-start-3"
          />
          <div className="lg:row-start-2 lg:col-start-3">
            Half of all lifetime mental illness will present by the age of 14
          </div>
          <div className="h-0.5 bg-brand-light col-span-2 w-full lg:row-span-2 lg:col-start-4 lg:col-span-1 lg:row-start-1 lg:h-full" />
          <img src="/60-percent.png" className="w-31.25 lg:w-62.5" />
          60% of those with mental illness will not receive proper treatment
          <div className="h-0.5 bg-brand-light col-span-2 w-full lg:row-span-2 lg:hidden" />
          <div className="col-span-2 text-sm w-full -mt-4 text-gray-400">
            *Source: National Alliance on Mental Illness (NAMI)
          </div>
        </div>

        <div className="border-l-8 border-l-brand-dark bg-brand-light p-4 mt-8 mx-4">
          <div className="text-xl font-bold text-brand-dark mb-2">
            Mental health is just as important as physical health
          </div>
          <div>
            Yet stigma, lack of awareness, and limited access to resources
            prevent millions from getting the support they need.
          </div>
        </div>

        <a className="flex items-center gap-4 w-fit bg-accent-warm text-white px-4 py-2 my-4 mx-4 font-bold right-arrow cursor-pointer">
          Find More Resources
        </a>
      </div>
    </Section>
  );
}
