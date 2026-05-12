import { useState } from "react";
import { RotateCw } from "lucide-react";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";
import { DetailDialog } from "./DetailDialog";
import type { DetailKey } from "@/data/card-details";

const cornerPositions = [
  "top-2 left-2",
  "top-2 right-2",
  "bottom-2 left-2",
  "bottom-2 right-2",
] as const;

export function FlipCard() {
  const [flipped, setFlipped] = useState(false);
  const [openDetail, setOpenDetail] = useState<DetailKey | null>(null);

  const flip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFlipped((f) => !f);
  };

  const corners = (
    <>
      {cornerPositions.map((pos) => (
        <button
          key={pos}
          type="button"
          aria-label="Virar card"
          onClick={flip}
          className={`absolute ${pos} z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[var(--card-teal-deep)] shadow-md backdrop-blur transition hover:scale-110 hover:bg-white hover:text-[var(--itau-orange)]`}
        >
          <RotateCw className="h-4 w-4" />
        </button>
      ))}
    </>
  );

  return (
    <>
      <div
        className="perspective-1200 relative aspect-[4/5] w-full max-w-[480px]"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative h-full w-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          >
            <CardFront />
            {corners}
          </div>
          {/* Back */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <CardBack onSelect={setOpenDetail} />
            {corners}
          </div>
        </div>
      </div>

      <DetailDialog detailKey={openDetail} onClose={() => setOpenDetail(null)} />
    </>
  );
}
