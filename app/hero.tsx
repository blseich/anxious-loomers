export default function Hero() {
  return (
    <div className="flex min-h-[calc(100lvh-7rem)] justify-center bg-zinc-50 font-sans">
      <div className="w-lvw relative overflow-hidden bg-[url('/hero_bg.png')] bg-no-repeat bg-cover items-center bg-center mask-[linear-gradient(to_bottom,#fff_90%,transparent)] mask-no-repeat">
        <h1 className="sr-only">ANXIOUSLOOMERS</h1>
        <img
          src="/hero_hat.png"
          className="w-full lg:w-auto lg:h-full absolute top-1/4 lg:top-1/2 left-1/2 -translate-y-1/4 lg:-translate-y-1/2 -translate-x-1/2 scale-200 lg:scale-100 origin-center"
        />
        <img
          src="/hero_slogan.png"
          className="w-full top-2 left-2 lg:h-full lg:w-auto absolute lg:top-1/2 lg:left-8 lg:-translate-y-1/2"
        />
        <img
          src="/hero_logo-flat.png"
          className="absolute bottom-1/4 w-11/12 left-1/2 -translate-x-1/2 lg:w-5/12 lg:bottom-8 lg:right-8 lg:translate-0 lg:left-auto"
        />
      </div>
    </div>
  );
}
