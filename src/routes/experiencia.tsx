import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Briefcase, Linkedin } from "lucide-react";

export const Route = createFileRoute("/experiencia")({
  component: ExperienciaPage,
  head: () => ({
    meta: [
      { title: "Experiência Profissional · Mateus Assunção" },
      {
        name: "description",
        content:
          "Trajetória profissional de Mateus Assunção: Itaú, Ambev Tech e retorno ao Itaú.",
      },
    ],
  }),
});

type Role = {
  label: string;
  detail?: string;
};

type Section = {
  title: string;
  period: string;
  roles: Role[];
  skills: string[];
};

const sections: Section[] = [
  {
    title: "Itaú Unibanco",
    period: "2016 à 2021",
    roles: [
      { label: "Estagiário PMO - Projetos Varejo" },
      { label: "Analista de Projetos e Riscos Jr - Franquias" },
      { label: "Analista de Planejamento Estratégico Pl" },
      {
        label: "Analista Sr. / Desenvolvedor Power Apps",
        detail: "Início da transição profissional",
      },
      { label: "Analista Sr. / Scrum Master - GPS" },
    ],
  },
  {
    title: "Ambev Global Tech",
    period: "2021 à 2023",
    roles: [
      { label: "Desenvolvedor COE Power Platform (Terceiro)" },
      { label: "Tech Lead e Consultor" },
      {
        label: "Coordenador de Operação",
        detail:
          "2 Squads de Operação e Desenvolvimento com clientes externos",
      },
    ],
  },
  {
    title: "Itaú Unibanco",
    period: "desde 2024",
    roles: [
      { label: "Analista Sr. / Desenvolvedor Dynamics" },
      {
        label: "Analista Sr. Tech Lead",
        detail: "Squad com foco em integrações AWS e Dynamics",
      },
    ],
  },
];

function ExperienciaPage() {
  return (
    <main
      className="min-h-screen px-4 py-8 sm:py-12"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, #6dbac2 0%, #4a9ba6 45%, #2d7884 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-[#0f4c56] shadow-md transition hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </div>

        <header className="mb-8 text-center text-white">
          <h1 className="text-2xl font-bold tracking-wide sm:text-4xl">
            Experiência Profissional
          </h1>
          <p className="mt-2 text-sm opacity-90 sm:text-base">
            Uma trajetória entre tecnologia, gestão de projetos e liderança.
          </p>
        </header>

        <div className="grid gap-4 sm:gap-6">
          {sections.map((s, idx) => (
            <article
              key={idx}
              className="rounded-2xl bg-white/95 p-5 shadow-lg sm:p-6"
            >
              <div className="mb-3 flex items-center gap-3 border-b border-[#0f4c56]/15 pb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--itau-orange)]/15 text-[var(--itau-orange)]">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-lg font-bold leading-tight text-[#0f4c56] sm:text-xl">
                    {s.title}
                  </h2>
                  <p className="text-xs font-medium text-[#0f4c56]/70 sm:text-sm">
                    {s.period}
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {s.roles.map((role, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#0f4c56] sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--itau-orange)]" />
                    <span>
                      <span className={role.detail ? "font-bold" : undefined}>
                        {role.label}
                      </span>
                      {role.detail && (
                        <span className="block text-xs font-semibold italic text-[#0f4c56]/80 sm:text-sm">
                          {role.detail}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://www.linkedin.com/in/mateusvassuncao/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir LinkedIn de Mateus Assunção"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0f4c56] shadow-md transition hover:scale-110 hover:bg-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </main>
  );
}
