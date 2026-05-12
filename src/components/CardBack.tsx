import { RadarStats } from "./RadarStats";
import {
  bottomLeft,
  bottomRight,
  details,
  type DetailKey,
} from "@/data/card-details";

interface Props {
  onSelect: (key: DetailKey) => void;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2 px-2 sm:gap-3 sm:px-4">
      <span className="h-px flex-1 bg-white/70" />
      <h3 className="whitespace-nowrap text-center text-base font-bold tracking-wide text-white sm:text-2xl">
        {children}
      </h3>
      <span className="h-px flex-1 bg-white/70" />
    </div>
  );
}

function ItemButton({ k }: { k: DetailKey }) {
  const item = details[k];
  const Icon = item.icon;
  return (
    <div className="group flex w-full items-center gap-1.5 rounded-lg px-1.5 py-1 text-left transition hover:bg-[var(--itau-orange)]/10 sm:gap-2 sm:px-2 sm:py-1.5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--itau-orange)]/15 text-[var(--itau-orange)] transition group-hover:bg-[var(--itau-orange)] group-hover:text-white sm:h-9 sm:w-9">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </span>
      <span className="text-[11px] font-semibold leading-tight text-[#0f4c56] sm:text-sm">
        {item.title.replace(/ — \d+$/, "")}
      </span>
    </div>
  );
}

export function CardBack({ onSelect }: Props) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-[var(--card-teal)] p-3 text-white sm:p-4">
      <SectionTitle>Busca pelo equilíbrio</SectionTitle>

      <div className="min-h-0 flex-1">
        <RadarStats onSelect={onSelect} />
      </div>

      <SectionTitle>Minha carreira</SectionTitle>

      <a
        href="https://linkedin.com/in/mateusvassuncao/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        aria-label="Abrir LinkedIn de Mateus Assunção"
        className="mt-2 block rounded-2xl bg-white/95 p-2 shadow-lg transition hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--itau-orange)] sm:mt-3 sm:p-3"
      >
        <div className="grid grid-cols-2 gap-x-2 divide-x divide-[var(--card-teal-deep)]/30 sm:gap-x-3">
          <div className="space-y-0.5 pr-1.5 sm:space-y-1 sm:pr-2">
            {bottomLeft.map((k) => (
              <ItemButton key={k} k={k} />
            ))}
          </div>
          <div className="space-y-0.5 pl-1.5 sm:space-y-1 sm:pl-2">
            {bottomRight.map((k) => (
              <ItemButton key={k} k={k} />
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
