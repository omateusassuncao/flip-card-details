import { createFileRoute } from "@tanstack/react-router";
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
    </main>
  );
}
