import Link from "next/link";

type Capsule = {
  id: number;
  title: string;
  theme: string;
  opensAt: string;
};

const capsules: Capsule[] = [
  {
    id: 1,
    title: "Mensagem para o meu eu de 2035",
    theme: "Metas e sonhos",
    opensAt: "2035-12-20",
  },
  {
    id: 2,
    title: "Como eu me sentia no início da jornada",
    theme: "Memórias",
    opensAt: "2027-06-10",
  },
  {
    id: 3,
    title: "Carta para o aniversário de 36 anos",
    theme: "Reflexões",
    opensAt: "2030-01-15",
  },
].sort((a, b) => a.title.localeCompare(b.title));

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export default function CreateCapsulePage() {
  const today = new Date();

  return (
    <main className="min-h-screen bg-[#F6F1E8] px-6 py-10 text-[#12332E]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-[#CFE6D6] bg-white/80 px-4 py-2 text-sm font-semibold text-[#12332E] shadow-sm transition hover:border-[#9DB7AB]"
          >
            ← Voltar
          </Link>

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4C7A68]">
            Minhas cápsulas
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[32px] border border-[#CFE6D6] bg-white/80 p-8 shadow-[0_25px_60px_rgba(18,51,46,0.08)] backdrop-blur-sm">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-[#4C7A68]">
              Nova cápsula
            </p>
            <h1 className="text-4xl font-black text-[#12332E]">Criar minha cápsula</h1>

            <form className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#12332E]">
                  Título da cápsula
                </label>
                <input
                  type="text"
                  placeholder="Ex: Mensagem para o meu eu de 2035"
                  className="w-full rounded-2xl border border-[#D4E1D9] bg-[#F9F7F3] px-4 py-3 text-base outline-none ring-0 transition focus:border-[#6FAE93]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#12332E]">
                  Sua mensagem
                </label>
                <textarea
                  rows={8}
                  placeholder="Escreva para o seu futuro..."
                  className="w-full rounded-2xl border border-[#D4E1D9] bg-[#F9F7F3] px-4 py-3 text-base outline-none transition focus:border-[#6FAE93]"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#12332E]">
                    Data de abertura
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-2xl border border-[#D4E1D9] bg-[#F9F7F3] px-4 py-3 text-base outline-none transition focus:border-[#6FAE93]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#12332E]">
                    Tema
                  </label>
                  <select className="w-full rounded-2xl border border-[#D4E1D9] bg-[#F9F7F3] px-4 py-3 text-base outline-none transition focus:border-[#6FAE93]">
                    <option>Metas e sonhos</option>
                    <option>Memórias</option>
                    <option>Cartas de amor</option>
                    <option>Reflexões</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#12332E] px-6 py-3 text-base font-semibold text-[#F7F2E7] transition hover:bg-[#1D4E48]"
              >
                Salvar cápsula
              </button>
            </form>
          </div>

          <aside className="rounded-[32px] border border-[#CFE6D6] bg-[#12332E] p-6 text-[#F7F2E7] shadow-[0_25px_60px_rgba(18,51,46,0.12)]">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">Cápsulas</h2>
              <span className="rounded-full border border-[#D9F2E4]/30 bg-[#D9F2E4]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#EAF8F1]">
                {capsules.length}
              </span>
            </div>

            <ul className="space-y-3">
              {capsules.map((capsule) => {
                const isUnlocked = new Date(capsule.opensAt) <= today;

                return (
                  <li
                    key={capsule.id}
                    className="rounded-2xl border border-[#D9F2E4]/15 bg-[#1B4640]/80 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-base font-semibold text-[#FFFDF8]">
                          {capsule.title}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#B9CFC6]">
                          {capsule.theme}
                        </p>
                      </div>

                      <span
                        className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                          isUnlocked
                            ? "border border-[#B7D8C4]/40 bg-[#B7D8C4]/15 text-[#EAF8F1]"
                            : "border border-[#F4D6A1]/40 bg-[#F4D6A1]/10 text-[#FCE7B2]"
                        }`}
                      >
                        {isUnlocked ? "Aberta" : "Bloqueada"}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-[#DCE7E1]">
                      {isUnlocked ? "Disponível para abrir" : `Liberará em ${formatDate(capsule.opensAt)}`}
                    </p>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
}
