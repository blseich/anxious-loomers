export default function TryItYourself() {
  return (
    <>
      <h2 className="text-4xl font-test font-black mx-4 mb-4 text-brand-dark">
        Try it yourself!
      </h2>
      <div className="p-4 w-full bg-brand-light">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/0rHxMFNifR4?si=FSPb4PglUtO_56y8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
