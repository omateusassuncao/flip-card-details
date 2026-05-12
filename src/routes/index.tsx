import { createFileRoute } from "@tanstack/react-router";
import { Github } from "lucide-react";
import { FlipCard } from "@/components/FlipCard";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mateus Assunção · Card Digital" },
      {
        name: "description",
        content:
          "Card digital interativo de Mateus Assunção — apresentação pessoal com gráfico de equilíbrio e trajetória profissional.",
      },
    ],
  }),
});

function Index() {
  return (
    <main
      className="flex min-h-screen items-center justify-center px-4 py-10"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, #6dbac2 0%, #4a9ba6 45%, #2d7884 100%)",
      }}
    >
      <FlipCard />
      <a
        href="https://github.com/omateusassuncao/flip-card-details"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Repositório no GitHub"
        className="fixed bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#0f4c56] shadow-lg transition hover:scale-110 hover:bg-white"
      >
        <Github className="h-5 w-5" />
      </a>
    </main>
  );
}
