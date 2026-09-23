export type Case = {
  slug: string;
  title: string;
  client?: string;
  region: {
    city: string;
    state: string;
  };
  sector: string;
  gainType: string;
  metricHighlight: string;
  summary: string;
  bullets: string[];
  image: string;
  solutions: string[];
  results: {
    label: string;
    value: string;
    icon: "save" | "shield" | "clock" | "trend" | "accuracy" | "lead";
  }[];
  baseline: { label: string; value: string }[];
  timeline: { step: string; detail: string }[];
  quote?: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
};

export const cases: Case[] = [
  {
    slug: "montadora-pr",
    title: "Montadora nacional",
    client: "Confidencial - PR",
    region: { city: "Curitiba", state: "PR" },
    sector: "Automotivo",
    gainType: "Redução de custo",
    metricHighlight: "-27% compras em 90 dias",
    summary:
      "Padronização de kits por linha, armários conectados e integração SAP reduziram compras emergenciais.",
    bullets: [
      "FIFO real com lote e validade",
      "Armários inteligentes com badge",
      "Dashboards diários para compras",
    ],
    image: "/assets/cases/case-automotivo.png",
    solutions: ["Gestão de Ferramentas", "Armários Inteligentes", "Dashboards", "Integração ERP"],
    results: [
      { label: "Compras", value: "-27%", icon: "save" },
      { label: "Quebras", value: "-18%", icon: "shield" },
      { label: "Acuracia estoque", value: "+100%", icon: "accuracy" },
      { label: "Lead time interno", value: "-35%", icon: "lead" },
    ],
    baseline: [
      { label: "Linhas", value: "12" },
      { label: "Operadores", value: "420" },
      { label: "Itens ativos", value: "2.400" },
    ],
    timeline: [
      { step: "Diagnóstico", detail: "5 semanas com squads mistos" },
      { step: "Piloto", detail: "3 linhas + compras" },
      { step: "Rollout", detail: "12 linhas e 4 almoxarifados" },
    ],
    quote: {
      text: "Em 3 meses conseguimos comprovar o payback para a diretoria.",
      author: "Coordenador de Manutenção",
      role: "Coordenador de Manutenção",
      company: "Montadora PR",
    },
  },
  {
    slug: "petroquimica-ba",
    title: "Petroquímica Bahia",
    region: { city: "Camaçari", state: "BA" },
    sector: "Petroquímico",
    gainType: "Confiabilidade",
    metricHighlight: "+100% rastreio em 60 dias",
    summary: "Integração com SAP PM e lockers explosion-proof liberaram dados confiáveis.",
    bullets: ["Lockers especiais", "Checklist digital", "Alertas de ruptura"],
    image: "/assets/cases/case-petroquimico.png",
    solutions: ["Armários Inteligentes", "Dashboards", "Integração ERP"],
    results: [
      { label: "Acuracia", value: "+100%", icon: "accuracy" },
      { label: "Quebras", value: "-22%", icon: "shield" },
      { label: "Lead time de requisição", value: "-40%", icon: "lead" },
    ],
    baseline: [
      { label: "Turnos", value: "4" },
      { label: "Itens monitorados", value: "1.350" },
    ],
    timeline: [
      { step: "Piloto", detail: "2 áreas críticas" },
      { step: "Expansão", detail: "8 armários conectados" },
      { step: "ERP", detail: "Integra SAP PM" },
    ],
  },
  {
    slug: "laticinios-mg",
    title: "Grupo de Laticínios",
    region: { city: "Uberlândia", state: "MG" },
    sector: "Alimentos",
    gainType: "Produtividade",
    metricHighlight: "-15% paradas por falta",
    summary: "Revisão de políticas de kits e dashboards diários para o PCP.",
    bullets: ["Kits por linha", "Alerta de validade", "Reposição automática"],
    image: "/assets/cases/case-alimentos.png",
    solutions: ["Gestão de Ferramentas", "Dashboards"],
    results: [
      { label: "Compras emergenciais", value: "-32%", icon: "save" },
      { label: "Paradas", value: "-15%", icon: "trend" },
      { label: "Acuracia", value: "+95%", icon: "accuracy" },
    ],
    baseline: [
      { label: "Plantas", value: "3" },
      { label: "Operadores", value: "180" },
    ],
    timeline: [
      { step: "Diagnóstico", detail: "Mapeamento de kits" },
      { step: "Piloto", detail: "Linha principal" },
      { step: "Rollout", detail: "Demais plantas" },
    ],
    quote: {
      text: "O time enxergou rapidamente onde estavam os gargalos.",
      author: "Gerente de PCP",
      role: "Gerente de PCP",
      company: "Grupo Alimentício",
    },
  },
  {
    slug: "mineracao-mg",
    title: "Mineradora MG",
    region: { city: "Itabira", state: "MG" },
    sector: "Mineração",
    gainType: "Segurança",
    metricHighlight: "-35% ocorrências em 6 meses",
    summary: "Controle de EPIs e ferramentas críticas com trilha completa para auditorias.",
    bullets: ["Check-in por badge", "Logs tamper-proof", "Relatórios de auditoria"],
    image: "/assets/cases/case-mineracao.png",
    solutions: ["Armários Inteligentes", "Compliance"],
    results: [
      { label: "Ocorrências EPI", value: "-35%", icon: "shield" },
      { label: "Tempo auditoria", value: "-50%", icon: "clock" },
    ],
    baseline: [
      { label: "Operadores", value: "950" },
      { label: "Itens auditados", value: "3.800" },
    ],
    timeline: [
      { step: "Piloto", detail: "2 frentes subterrâneas" },
      { step: "Expansão", detail: "10 armários" },
    ],
  },
  {
    slug: "logistica-sp",
    title: "Operador Logístico",
    region: { city: "Campinas", state: "SP" },
    sector: "Logística",
    gainType: "Agilidade",
    metricHighlight: "-20% tempo de ciclo",
    summary: "Integramos WMS + Log Z para liberar ferramentas e scanners sem espera.",
    bullets: ["API WMS", "Alertas de ruptura", "Kits móveis"],
    image: "/assets/cases/case-logistica.png",
    solutions: ["Gestão de Ferramentas", "Integração ERP"],
    results: [
      { label: "Tempo ciclo", value: "-20%", icon: "clock" },
      { label: "Chamados suporte", value: "-30%", icon: "trend" },
    ],
    baseline: [
      { label: "Centros", value: "5" },
      { label: "Operadores", value: "600" },
    ],
    timeline: [
      { step: "Integração", detail: "API WMS + ERP" },
      { step: "Treinamento", detail: "Workshops em cada centro" },
    ],
  },
  {
    slug: "energia-pe",
    title: "Usina Renovável",
    region: { city: "Petrolina", state: "PE" },
    sector: "Energia",
    gainType: "Disponibilidade",
    metricHighlight: "+12% disponibilidade ativos",
    summary: "Sensores IoT + armários conectados reduziram ociosidade no canavial.",
    bullets: ["Lockers solares", "Checklist digital", "Dash KPI"],
    image: "/assets/cases/case-energia.png",
    solutions: ["Armários Inteligentes", "Dashboards"],
    results: [
      { label: "Disponibilidade", value: "+12%", icon: "trend" },
      { label: "Quebras", value: "-10%", icon: "shield" },
    ],
    baseline: [
      { label: "Frentes", value: "7" },
      { label: "Equipamentos", value: "520" },
    ],
    timeline: [
      { step: "Piloto", detail: "3 frentes" },
      { step: "Rollout", detail: "7 frentes + ERP" },
    ],
  },
  {
    slug: "farmaceutica-rj",
    title: "Farmacêutica RJ",
    region: { city: "Resende", state: "RJ" },
    sector: "Farmacêutico",
    gainType: "Compliance",
    metricHighlight: "+100% aderência GMP",
    summary: "Log Z garante trilhas para GMP e reduz desvios durante auditorias.",
    bullets: ["Perfis e políticas", "Logs imutáveis", "Relatórios automáticos"],
    image: "/assets/cases/case-farmaceutico.png",
    solutions: ["Compliance", "Dashboards"],
    results: [
      { label: "Auditoria", value: "100% aprovação", icon: "shield" },
      { label: "Tempo auditoria", value: "-45%", icon: "clock" },
    ],
    baseline: [
      { label: "Linhas", value: "8" },
      { label: "Operadores", value: "260" },
    ],
    timeline: [
      { step: "Diagnóstico", detail: "GMP" },
      { step: "Implementação", detail: "Políticas + dashboards" },
    ],
    quote: {
      text: "Auditorias pararam de ser terror, agora temos tudo em segundos.",
      author: "Diretora de Qualidade",
      role: "Diretora de Qualidade",
      company: "Farmacêutica RJ",
    },
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}

export const filters = {
  sectors: Array.from(new Set(cases.map((item) => item.sector))).sort(),
  states: Array.from(new Set(cases.map((item) => item.region.state))).sort(),
  gainTypes: Array.from(new Set(cases.map((item) => item.gainType))).sort(),
};
