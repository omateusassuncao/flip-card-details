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
    <div className="flex items-center justify-center gap-3 px-4">
      <span className="h-px flex-1 bg-white/70" />
      <h3 className="whitespace-nowrap text-center text-lg font-light tracking-wide text-white sm:text-xl">
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
    <div
      className="group flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left transition hover:bg-[var(--itau-orange)]/10"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--itau-orange)]/15 text-[var(--itau-orange)] transition group-hover:bg-[var(--itau-orange)] group-hover:text-white">
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-[11px] font-semibold leading-tight text-[#0f4c56] sm:text-xs">
        {item.title.replace(/ — \d+$/, "")}
      </span>
    </div>
  );
}

export function CardBack({ onSelect }: Props) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-[var(--card-teal)] p-4 text-white">
      <SectionTitle>Busca pelo equilíbrio</SectionTitle>

      <RadarStats onSelect={onSelect} />

      <div className="mt-2">
        <SectionTitle>Minha carreira</SectionTitle>
      </div>

      <a
        href="https://www.linkedin.com/in/mateusvassuncao/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        aria-label="Abrir LinkedIn de Mateus Assunção"
        className="mt-3 block rounded-2xl bg-white/95 p-3 shadow-lg transition hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--itau-orange)]"
      >
        <div className="grid grid-cols-2 gap-x-3 divide-x divide-[var(--card-teal-deep)]/30">
          <div className="space-y-1 pr-2">
            {bottomLeft.map((k) => (
              <ItemButton key={k} k={k} />
            ))}
          </div>
          <div className="space-y-1 pl-2">
            {bottomRight.map((k) => (
              <ItemButton key={k} k={k} />
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
