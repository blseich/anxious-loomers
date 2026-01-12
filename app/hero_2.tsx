export default function Hero2() {
  return (
    <>
      <div className="relative image-bottom-fade">
        <img src="/HUGGING_FULL_SIZE.webp" className="" />
        <div className="absolute flex flex-col text-4xl font-test font-black text-white top-4 left-4 z-10">
          <p>Mindfulness</p>
          <p className="pl-4">Community</p>
          <p className="pl-8">Accessibility</p>
        </div>
      </div>
      <div className="bg-gray-950 py-4 thing-here -mt-2 text-white px-4 text-lg font-bold wrap-[balance] italic flex gap-2 text-center">
        <img src="/quotes.svg" className="w-4 rotate-180 self-start" />
        Mental health is not a destination, but a process. It's about how you
        drive, not where you're going.
        <img src="/quotes.svg" className="w-4 self-end" />
      </div>
    </>
  );
}
