import Section from "@/components/section";

export default function TryItYourself() {
  return (
    <Section>
      <h2 className="text-4xl font-test font-bold p-4 pb-2 text-brand-dark bg-brand-light">
        LEARN TO LOOM
      </h2>
      <div className="px-4 pb-8 w-full bg-brand-light">
        <div className="h-0.5 bg-accent-warm-light mb-4"></div>
        <iframe
          className="w-11/12 aspect-video mx-auto"
          src="https://www.youtube.com/embed/0rHxMFNifR4?si=FSPb4PglUtO_56y8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="h-0.5 bg-accent-warm-light mt-4"></div>
      </div>
    </Section>
  );
}
