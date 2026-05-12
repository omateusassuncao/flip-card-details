import saudeMental from "@/assets/details/saude-mental.jpg";
import familia from "@/assets/details/familia.jpg";
import lazer from "@/assets/details/lazer.jpg";
import conhecimento from "@/assets/details/conhecimento.jpg";
import saudeFisica from "@/assets/details/saude-fisica.jpg";
import carreira from "@/assets/details/carreira.jpg";
import itau from "@/assets/details/itau.jpg";
import areas from "@/assets/details/areas.jpg";
import prad from "@/assets/details/prad.jpg";
import powerPlatform from "@/assets/details/power-platform.jpg";
import certificacoes from "@/assets/details/certificacoes.jpg";
import engenharia from "@/assets/details/engenharia.jpg";
import postech from "@/assets/details/postech.jpg";

import {
  Brain,
  Heart,
  Palmtree,
  BookOpen,
  Dumbbell,
  Briefcase,
  Building2,
  Boxes,
  Trophy,
  Zap,
  ShieldCheck,
  GraduationCap,
  Cloud,
  type LucideIcon,
} from "lucide-react";

export type DetailKey =
  | "saude-mental"
  | "familia"
  | "lazer"
  | "conhecimento"
  | "saude-fisica"
  | "carreira"
  | "itau"
  | "areas"
  | "prad"
  | "power-platform"
  | "certificacoes"
  | "engenharia"
  | "postech";

export interface DetailItem {
  key: DetailKey;
  title: string;
  icon: LucideIcon;
  image: string;
}

export const details: Record<DetailKey, DetailItem> = {
  "saude-mental": { key: "saude-mental", title: "Saúde Mental — 80", icon: Brain, image: saudeMental },
  familia: { key: "familia", title: "Família — 85", icon: Heart, image: familia },
  lazer: { key: "lazer", title: "Lazer — 75", icon: Palmtree, image: lazer },
  conhecimento: { key: "conhecimento", title: "Conhecimento — 85", icon: BookOpen, image: conhecimento },
  "saude-fisica": { key: "saude-fisica", title: "Saúde Física — 70", icon: Dumbbell, image: saudeFisica },
  carreira: { key: "carreira", title: "10 Anos de Carreira", icon: Briefcase, image: carreira },
  itau: { key: "itau", title: "7 Anos de Itaú (2 Períodos)", icon: Building2, image: itau },
  areas: { key: "areas", title: "3 Áreas Diferentes", icon: Boxes, image: areas },
  prad: { key: "prad", title: "PRAD 2024 & 2025", icon: Trophy, image: prad },
  "power-platform": { key: "power-platform", title: "6 Anos Exp. Power Platform", icon: Zap, image: powerPlatform },
  certificacoes: { key: "certificacoes", title: "5 Certificações Microsoft + 1 AWS", icon: ShieldCheck, image: certificacoes },
  engenharia: { key: "engenharia", title: "Eng. Controle e Automação (UFLA)", icon: GraduationCap, image: engenharia },
  postech: { key: "postech", title: "PósTech Arquitetura .NET com Azure", icon: Cloud, image: postech },
};

export const radarOrder: DetailKey[] = [
  "saude-mental",
  "familia",
  "lazer",
  "conhecimento",
  "saude-fisica",
];

export const radarValues: Record<DetailKey, number> = {
  "saude-mental": 80,
  familia: 85,
  lazer: 75,
  conhecimento: 85,
  "saude-fisica": 70,
  carreira: 0,
  itau: 0,
  areas: 0,
  prad: 0,
  "power-platform": 0,
  certificacoes: 0,
  engenharia: 0,
  postech: 0,
};

export const bottomLeft: DetailKey[] = ["carreira", "itau", "areas", "prad"];
export const bottomRight: DetailKey[] = ["power-platform", "certificacoes", "engenharia", "postech"];
