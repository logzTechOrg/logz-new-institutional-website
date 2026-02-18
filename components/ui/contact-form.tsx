"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CheckCircle2, Mail, Phone, Timer } from "lucide-react";
import ContactHero from "@/components/ui/contact-hero";

const states = [
  "AC",
  "AL",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MG",
  "MS",
  "MT",
  "PA",
  "PE",
  "PR",
  "RJ",
  "RN",
  "RS",
  "SC",
  "SP",
  "TO",
];

const cities = [
  "Sao Paulo",
  "Campinas",
  "Curitiba",
  "Joinville",
  "Belo Horizonte",
  "Uberlandia",
  "Recife",
  "Caxias do Sul",
  "Manaus",
  "Criciuma",
  "Goiania",
  "Fortaleza",
];

const pains = [
  "Visibilidade em tempo real",
  "Estoque fantasma",
  "Compras duplicadas",
  "Paradas por falta",
];

const personaSpecificFields = {
  compras: {
    key: "monthlyItems",
  },
  usinagem: {
    key: "machines",
  },
  direcao: {
    key: "revenue",
  },
};

const personaFieldLabels: Record<keyof typeof personaSpecificFields, string> = {
  compras: "Itens comprados por mês",
  usinagem: "Máquinas (modelos ou quantidade)",
  direcao: "Receita anual",
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  pains: string[];
  message: string;
  persona: keyof typeof personaSpecificFields;
  monthlyItems: string;
  machines: string;
  revenue: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  pains: [],
  message: "",
  persona: "compras",
  monthlyItems: "",
  machines: "",
  revenue: "",
};

type Errors = Partial<Record<keyof FormData, string>>;

const sidebarInfo = [
  {
    icon: Phone,
    title: "WhatsApp",
    description: "Fale direto com especialistas",
    action: {
      label: "+55 (48) 99195-5797",
      href: "https://wa.me/message/3DJHQZ4B6KDYJ1",
    },
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Contate-nos via email",
    action: {
      label: "contato@logztech.com.br",
      href: "mailto:contato@logz.com.br",
    },
  },
  {
    icon: Timer,
    title: "Horário de atendimento",
    description: "Seg a Sex, 8h - 17h30 (BRT)",
  },
];

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function SuccessCard() {
  const links: Array<{ href: string; label: string }> = [
  //  { href: "/cases", label: "Ver cases" },
   // { href: "/solutions", label: "Explorar soluções" },
   // { href: "/faq", label: "FAQ" },
  ];

  return (
    <div className="rounded-[32px] border border-green-200 bg-green-50/70 p-10 text-center shadow-sm">
      <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
      <h3 className="mt-4 text-3xl font-bold text-slate-900">Recebemos sua mensagem!</h3>
      <p className="mt-2 text-base text-slate-700">
        Em até 1 dia útil retornamos com um plano inicial.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const errors = useMemo<Errors>(() => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Informe seu nome.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "E-mail corporativo invalido.";
    if (!formData.phone || formData.phone.replace(/\D/g, "").length < 10)
      newErrors.phone = "Telefone incompleto.";
    if (!formData.company) newErrors.company = "Informe o nome da empresa.";

    const personaField = personaSpecificFields[formData.persona].key as keyof FormData;
    if (!formData[personaField]) {
      newErrors[personaField] = `Campo obrigatorio: ${personaFieldLabels[formData.persona]}.`;
    }

    return newErrors;
  }, [formData]);

  const showError = (field: keyof FormData) => touched[field] && errors[field];

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    if (type === "checkbox" && name === "lgpd") {
      setFormData((prev) => ({ ...prev, lgpd: (event.target as HTMLInputElement).checked } as FormData));
      return;
    }

    if (name === "phone") {
      setFormData((prev) => ({ ...prev, phone: formatPhone(value) }));
      return;
    }

    if (name === "persona") {
      const nextPersona = value as FormData["persona"];
      setFormData((prev) => ({
        ...prev,
        persona: nextPersona,
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePainToggle = (pain: string) => {
    setFormData((prev) => {
      const exists = prev.pains.includes(pain);
      return {
        ...prev,
        pains: exists ? prev.pains.filter((item) => item !== pain) : [...prev.pains, pain],
      };
    });
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const allFields = [
      "name",
      "email",
      "phone",
      "company",
      "monthlyItems",
      "machines",
      "revenue",
    ] as (keyof FormData)[];
    const nextTouched: Record<string, boolean> = {};
    allFields.forEach((field) => {
      nextTouched[field] = true;
    });
    setTouched((prev) => ({ ...prev, ...nextTouched }));

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const result = await response.json().catch(() => ({}));
          const message =
            result && typeof result.error === "string"
              ? result.error
              : "Nao foi possivel enviar. Tente novamente.";
          throw new Error(message);
        }

        setSubmitted(true);
        setFormData(initialData);
        setTouched({});
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Nao foi possivel enviar. Tente novamente.";
        setSubmitError(message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const personaField = personaSpecificFields[formData.persona];
  const personaFieldKey = personaField.key as keyof FormData;
  const personaFieldLabel = personaFieldLabels[formData.persona];

  return (
    <section className="bg-slate-50 pt-6 pb-16 md:pt-10 md:pb-24">
      <Container className="space-y-10 md:space-y-12">
        <ContactHero />
        {submitted ? (
          <SuccessCard />
        ) : (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-slate-700">
                  Nome completo *
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    aria-invalid={!!showError("name")}
                    aria-describedby={showError("name") ? "error-name" : undefined}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                  />
                  {showError("name") && (
                    <span id="error-name" className="text-xs text-red-600">
                      {errors.name}
                    </span>
                  )}
                </label>

                <label className="space-y-2 text-sm font-semibold text-slate-700">
                  E-mail corporativo *
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    aria-invalid={!!showError("email")}
                    aria-describedby={showError("email") ? "error-email" : undefined}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                  />
                  {showError("email") && (
                    <span id="error-email" className="text-xs text-red-600">
                      {errors.email}
                    </span>
                  )}
                </label>
              </div>
 
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-slate-700">
                  Telefone *
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur("phone")}
                    aria-invalid={!!showError("phone")}
                    aria-describedby={showError("phone") ? "error-phone" : undefined}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                  />
                  {showError("phone") && (
                    <span id="error-phone" className="text-xs text-red-600">
                      {errors.phone}
                    </span>
                  )}
                </label>

                <label className="space-y-2 text-sm font-semibold text-slate-700">
                  Empresa *
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={() => handleBlur("company")}
                    aria-invalid={!!showError("company")}
                    aria-describedby={showError("company") ? "error-company" : undefined}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                  />
                  {showError("company") && (
                    <span id="error-company" className="text-xs text-red-600">
                      {errors.company}
                    </span>
                  )}
                </label>
              </div>

              <fieldset className="space-y-3">
                <legend className="text-sm font-semibold text-slate-700">
                  Funcao / Setor *
                </legend>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(personaSpecificFields).map(([key]) => (
                    <label
                      key={key}
                      className={`cursor-pointer rounded-2xl border px-4 py-2 text-sm font-semibold ${
                        formData.persona === key
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-slate-200 bg-white text-slate-600"
                      }`}
                    >
                      <input
                        type="radio"
                        name="persona"
                        value={key}
                        checked={formData.persona === key}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {key === "compras" && "Compras"}
                      {key === "usinagem" && "Usinagem"}
                      {key === "direcao" && "Direcao"}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="space-y-2 text-sm font-semibold text-slate-700">
                {personaFieldLabel} *
                <input
                  type="text"
                  name={personaFieldKey}
                  value={(formData[personaFieldKey] as string) || ""}
                  onChange={handleChange}
                  onBlur={() => handleBlur(personaFieldKey)}
                  aria-invalid={!!showError(personaFieldKey)}
                  aria-describedby={showError(personaFieldKey) ? "error-persona-field" : undefined}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                />
                {showError(personaFieldKey) && (
                  <span id="error-persona-field" className="text-xs text-red-600">
                    {errors[personaFieldKey]}
                  </span>
                )}
              </label>

              <fieldset className="space-y-3">
                <legend className="text-sm font-semibold text-slate-700">Principais desafios</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {pains.map((pain) => (
                    <label
                      key={pain}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-700"
                    >
                      <input
                        type="checkbox"
                        checked={formData.pains.includes(pain)}
                        onChange={() => handlePainToggle(pain)}
                        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      {pain}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="space-y-2 text-sm font-semibold text-slate-700">
                Mensagem (Opcional)
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                />
              </label>

              <div className="flex flex-wrap gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
                <Link
                  href="https://wa.me/message/3DJHQZ4B6KDYJ1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-8 py-4 text-sm font-semibold text-slate-700 transition hover:border-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Falar no WhatsApp
                </Link>
              </div>
              {submitError && (
                <p className="text-sm font-semibold text-red-600">{submitError}</p>
              )}
            </form>

            <aside className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
                Atendimento
              </p>
              <p className="text-base text-slate-600">
                Retornamos em ate 1 dia util com um plano inicial e horarios para aprofundar o cenario.
              </p>
              <div className="space-y-5">
                {sidebarInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                      <div className="flex items-center gap-3">
                        <span className="rounded-xl bg-blue-50 p-2 text-blue-600">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                          <p className="text-xs text-slate-500">{item.description}</p>
                        </div>
                      </div>
                      {item.action && (
                        <Link
                          href={item.action.href}
                          target={item.title === "E-mail" ? undefined : "_blank"}
                          rel="noreferrer"
                          className="mt-3 inline-flex text-sm font-semibold text-blue-600"
                        >
                          {item.action.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>
        )}
      </Container>
    </section>
  );
}
