import Section from "@/components/section";

export default function TryItYourself() {
  return (
    <>
      <div className="bg-brand-light py-12 lg:py-16 lg:pb-24">
        <div className="section-container">
          <h2 className="text-4xl lg:text-6xl font-test font-bold text-brand-dark">
            LEARN TO LOOM
          </h2>
          <p className="text-brand-dark mt-2 lg:text-lg">
            A quick starter lesson to help you make your first loom knit.
          </p>
          <div className="mt-6 rounded-lg border border-accent-warm-light bg-white/70 p-4 lg:p-6 shadow-sm">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/0rHxMFNifR4?si=FSPb4PglUtO_56y8"
              title="Learn to loom knitting basics"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
