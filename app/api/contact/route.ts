import { NextResponse } from "next/server";
import { ContactFormPayload, sendContactFormMail } from "@/app/services/contact-form-mail";

export const runtime = "nodejs";

const personaFieldKey: Record<ContactFormPayload["persona"], keyof ContactFormPayload> = {
  compras: "monthlyItems",
  usinagem: "machines",
  direcao: "revenue",
};

const personaFieldLabel: Record<ContactFormPayload["persona"], string> = {
  compras: "Itens comprados por mes",
  usinagem: "Maquinas",
  direcao: "Receita",
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parsePayload(body: unknown): ContactFormPayload {
  const data = typeof body === "object" && body !== null ? body : {};
  const rawPersona = (data as Record<string, unknown>).persona;
  const persona: ContactFormPayload["persona"] =
    rawPersona === "usinagem" || rawPersona === "direcao" ? rawPersona : "compras";

  const painsRaw = (data as Record<string, unknown>).pains;
  const pains = Array.isArray(painsRaw)
    ? painsRaw.map((item) => asString(item)).filter(Boolean)
    : [];

  return {
    name: asString((data as Record<string, unknown>).name),
    email: asString((data as Record<string, unknown>).email),
    phone: asString((data as Record<string, unknown>).phone),
    company: asString((data as Record<string, unknown>).company),
    message: asString((data as Record<string, unknown>).message),
    persona,
    pains,
    monthlyItems: asString((data as Record<string, unknown>).monthlyItems),
    machines: asString((data as Record<string, unknown>).machines),
    revenue: asString((data as Record<string, unknown>).revenue),
  };
}

function validatePayload(payload: ContactFormPayload): string | null {
  if (!payload.name) return "Nome obrigatorio";
  if (!payload.email) return "Email obrigatorio";
  if (!payload.phone) return "Telefone obrigatorio";
  if (!payload.company) return "Empresa obrigatoria";

  const key = personaFieldKey[payload.persona];
  if (!payload[key]) {
    return `${personaFieldLabel[payload.persona]} obrigatorio`;
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parsePayload(body);

    const error = validatePayload(payload);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    await sendContactFormMail(payload);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to handle contact form submission", err);
    return NextResponse.json(
      { error: "Nao foi possivel enviar a mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
