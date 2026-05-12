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

function ItemButton({ k, onSelect }: { k: DetailKey; onSelect: (k: DetailKey) => void }) {
  const item = details[k];
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onSelect(k);
      }}
      className="group flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left transition hover:bg-[var(--itau-orange)]/10"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--itau-orange)]/15 text-[var(--itau-orange)] transition group-hover:bg-[var(--itau-orange)] group-hover:text-white">
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-[11px] font-semibold leading-tight text-[#0f4c56] sm:text-xs">
        {item.title.replace(/ — \d+$/, "")}
      </span>
    </button>
  );
}

export function CardBack({ onSelect }: Props) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-[var(--card-teal)] p-4 text-white">
      <h3 className="text-center text-lg font-extrabold tracking-wide text-[#0f4c56] sm:text-xl">
        EQUILÍBRIO DE VIDA & SAÚDE
      </h3>

      <RadarStats onSelect={onSelect} />

      <div className="mt-2 rounded-2xl bg-white/95 p-3 shadow-lg">
        <div className="grid grid-cols-2 gap-x-3 divide-x divide-[var(--card-teal-deep)]/30">
          <div className="space-y-1 pr-2">
            {bottomLeft.map((k) => (
              <ItemButton key={k} k={k} onSelect={onSelect} />
            ))}
          </div>
          <div className="space-y-1 pl-2">
            {bottomRight.map((k) => (
              <ItemButton key={k} k={k} onSelect={onSelect} />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-3 rounded-full bg-[var(--card-teal-deep)] px-4 py-2 text-center text-[11px] font-semibold leading-tight text-white sm:text-xs">
        Disciplina é liberdade · Compaixão é fortaleza · ter Bondade é ter Coragem
      </p>
    </div>
  );
}
