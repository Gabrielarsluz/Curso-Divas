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

export default function HomePage() {
  const today = new Date();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#375F57_0%,_#1F433F_30%,_#12332E_60%,_#0C271F_100%)] text-[#F7F2E7]">
      <section
        className="relative flex min-h-screen w-full items-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(11, 25, 22, 0.84) 0%, rgba(11, 25, 22, 0.62) 32%, rgba(11, 25, 22, 0.28) 58%, rgba(11, 25, 22, 0.7) 100%), url('https://media.istockphoto.com/id/177357672/photo/message-in-a-bottle.jpg?s=170667a&w=0&k=20&c=afV8rXqJwbi9G0tNx08diC1tuYdU670cYRHGBK0NoSI=')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-[#B7D8C4]/60 bg-[#D9F2E4]/20 px-4 py-2 text-sm font-medium text-[#F4F8F2] shadow-lg shadow-[#96B7A7]/20">
              Cápsula do tempo online
            </span>

            <div className="space-y-5">
              <h1 className="max-w-xl text-5xl font-black tracking-tight text-[#FFFDF8] sm:text-6xl">
                Escreva uma mensagem para o seu futuro.
              </h1>
              <p className="max-w-lg text-lg leading-8 text-[#E6F1EA]">
                Guarde memórias, desejos e pensamentos em uma cápsula digital que
                só será revelada na data que você escolher.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/capsulas/criar"
                className="inline-flex items-center justify-center rounded-full bg-[#CDE8D5] px-6 py-3 text-base font-semibold text-[#12332E] shadow-lg shadow-[#CDE8D5]/30 transition hover:scale-[1.02] hover:bg-[#E0F4E7]"
              >
                Criar minha cápsula
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
            <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-[#D9F2E4]/18 blur-3xl" />
            <div className="absolute -right-6 bottom-10 h-24 w-24 rounded-full bg-[#A7D3BA]/18 blur-3xl" />

            <div
              className="relative overflow-hidden rounded-[32px] border border-[#D7C59A]/60 px-6 py-7 shadow-[0_20px_60px_rgba(77,60,31,0.18)] md:px-8"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(245,239,220,0.82), rgba(235,223,194,0.9)), url('https://tse1.mm.bing.net/th/id/OIP.SkUtgcRW0b9VeqWz579MoQHaJ9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)]" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#9E8A62]/40 pb-4">
                  <h2 className="text-2xl font-black text-[#2E3C2F]">Cápsulas</h2>
                  <span className="rounded-full border border-[#6A7F66]/40 bg-[#F7F2E4]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2E3C2F]">
                    {capsules.length}
                  </span>
                </div>

                <ul className="space-y-3">
                  {capsules.map((capsule) => {
                    const isUnlocked = new Date(capsule.opensAt) <= today;

                    return (
                      <li
                        key={capsule.id}
                        className="rounded-2xl border border-[#C9B37A]/60 bg-[#f8f3e8]/70 p-4 shadow-sm"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-lg font-bold text-[#2E3C2F]">{capsule.title}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#56695B]">
                              {capsule.theme}
                            </p>
                          </div>

                          <span
                            className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                              isUnlocked
                                ? "border border-[#4f7c69]/30 bg-[#dfeee5]/80 text-[#2d4d41]"
                                : "border border-[#b6894b]/30 bg-[#f6e8c8]/80 text-[#5e4926]"
                            }`}
                          >
                            {isUnlocked ? "Aberta" : "Bloqueada"}
                          </span>
                        </div>

                        <p className="mt-3 text-sm text-[#425548]">
                          {isUnlocked
                            ? "Disponível para abrir"
                            : `Liberará em ${formatDate(capsule.opensAt)}`}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
