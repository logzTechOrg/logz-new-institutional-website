import { ContactFormPayload } from "@/app/services/contact-form-mail";

const personaLabels: Record<ContactFormPayload["persona"], string> = {
  compras: "Compras",
  usinagem: "Usinagem",
  direcao: "Direcao",
};

const personaFieldLabels: Record<ContactFormPayload["persona"], string> = {
  compras: "Itens comprados por mes",
  usinagem: "Maquinas",
  direcao: "Receita",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeValue(value: string) {
  return value?.trim() ? escapeHtml(value.trim()) : "Nao informado";
}

function getPersonaDetail(data: ContactFormPayload) {
  switch (data.persona) {
    case "compras":
      return { label: personaFieldLabels.compras, value: safeValue(data.monthlyItems) };
    case "usinagem":
      return { label: personaFieldLabels.usinagem, value: safeValue(data.machines) };
    case "direcao":
    default:
      return { label: personaFieldLabels.direcao, value: safeValue(data.revenue) };
  }
}

function infoCard(label: string, value: string) {
  return `
    <div style="padding:12px;border:1px solid #e2e8f0;border-radius:10px;">
      <div style="font-size:12px;color:#64748b;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:6px;">${label}</div>
      <div style="font-size:15px;color:#0f172a;font-weight:600;">${value}</div>
    </div>
  `;
}

export function renderContactEmailHtml(data: ContactFormPayload) {
  const pains = data.pains.length
    ? data.pains.map((pain) => escapeHtml(pain)).join(", ")
    : "Nao informado";
  const message = data.message?.trim() ? escapeHtml(data.message.trim()) : "Nao informado";
  const personaDetail = getPersonaDetail(data);

  return `
    <!doctype html>
    <html lang="pt-BR">
      <body style="font-family:Arial, sans-serif; background-color:#f8fafc; padding:24px; color:#0f172a;">
        <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:24px;">
          <h2 style="margin:0 0 8px;font-size:22px;">Novo contato recebido</h2>
          <p style="margin:0 0 20px;color:#475569;">Dados enviados pelo formulario de contato do site.</p>

          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:16px;">
            ${infoCard("Nome", safeValue(data.name))}
            ${infoCard("Email", safeValue(data.email))}
            ${infoCard("Telefone", safeValue(data.phone))}
            ${infoCard("Empresa", safeValue(data.company))}
            ${infoCard("Persona", personaLabels[data.persona])}
            ${infoCard(personaDetail.label, personaDetail.value)}
            ${infoCard("Principais dores", pains)}
          </div>

          <div style="margin-top:16px;padding:16px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc;">
            <div style="font-size:12px;color:#64748b;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;">Mensagem</div>
            <div style="font-size:15px;color:#0f172a;white-space:pre-line;line-height:1.5;">${message}</div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function renderContactEmailText(data: ContactFormPayload) {
  const pains = data.pains.length ? data.pains.join(", ") : "Nao informado";
  const personaDetail = getPersonaDetail(data);

  return [
    "Novo contato recebido pelo site:",
    `Nome: ${data.name || "Nao informado"}`,
    `Email: ${data.email || "Nao informado"}`,
    `Telefone: ${data.phone || "Nao informado"}`,
    `Empresa: ${data.company || "Nao informado"}`,
    `Persona: ${personaLabels[data.persona]}`,
    `${personaDetail.label}: ${personaDetail.value}`,
    `Principais dores: ${pains}`,
    "",
    `Mensagem: ${data.message?.trim() || "Nao informado"}`,
  ].join("\n");
}
