import { useState } from "react";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";
import { DetailDialog } from "./DetailDialog";
import type { DetailKey } from "@/data/card-details";

export function FlipCard() {
  const [flipped, setFlipped] = useState(false);
  const [openDetail, setOpenDetail] = useState<DetailKey | null>(null);

  const flip = () => setFlipped((f) => !f);

  return (
    <>
      <div
        className="relative aspect-[2/3] w-full max-w-[480px] cursor-pointer sm:aspect-[3/4]"
        style={{ perspective: "1200px" }}
        onClick={flip}
        role="button"
        aria-label="Virar card"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            flip();
          }
        }}
      >
        <div
          className="relative h-full w-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          >
            <CardFront />
          </div>
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <CardBack onSelect={setOpenDetail} />
          </div>
        </div>
      </div>

      <DetailDialog detailKey={openDetail} onClose={() => setOpenDetail(null)} />
    </>
  );
}
