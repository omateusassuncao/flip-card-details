import { Github } from "lucide-react";
import photo from "@/assets/card-front-photo.png";

export function CardFront() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl">
      <img
        src={photo}
        alt="Mateus Assunção"
        className="h-full w-full object-cover"
      />
      <a
        href="https://github.com/omateusassuncao/flip-card-details"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Repositório no GitHub"
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#0f4c56] shadow-md transition hover:scale-110 hover:bg-white"
      >
        <Github className="h-4 w-4" />
      </a>
    </div>
  );
}
