import photo from "@/assets/card-front-photo.png";

export function CardFront() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-[var(--card-teal)] text-white">
      {/* Decorative background "25" */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <span className="mt-2 select-none font-black leading-none text-[var(--brasil-green)] opacity-90 [font-size:18rem]">
          25
        </span>
      </div>

      {/* Itaú logo */}
      <div className="absolute right-5 top-5 rounded-xl bg-[var(--itau-orange)] px-3 py-1.5 text-lg font-extrabold italic text-white shadow-lg">
        itaú
      </div>

      {/* TCLA + flag */}
      <div className="absolute right-4 top-1/3 flex flex-col items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs">
          🇧🇷
        </div>
        <span className="rotate-90 text-3xl font-black tracking-widest text-[var(--brasil-green)]">
          TCLA
        </span>
      </div>

      {/* Photo */}
      <div className="relative z-10 flex flex-1 items-end justify-center pt-6">
        <img
          src={photo}
          alt="Mateus Assunção"
          className="max-h-[80%] w-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Info bands */}
      <div className="relative z-10 mx-4 mb-4 space-y-1.5">
        <div className="rounded-full bg-[var(--card-teal-deep)]/90 px-5 py-2 text-center backdrop-blur">
          <h2 className="text-lg font-extrabold tracking-wide text-white sm:text-xl">
            MATEUS ASSUNÇÃO
          </h2>
        </div>
        <div className="rounded-full bg-[var(--card-teal-deep)]/80 px-5 py-1.5 text-center text-xs font-semibold tracking-wider text-white sm:text-sm">
          33 ANOS · CASADO · JACAREÍ-SP
        </div>
        <div className="rounded-full bg-[var(--card-teal-deep)]/70 px-5 py-1.5 text-center text-xs font-semibold tracking-wider text-white sm:text-sm">
          INTEGRAÇÃO DO MODELO · SEGUROS PJ
        </div>
      </div>
    </div>
  );
}
