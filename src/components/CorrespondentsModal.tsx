import Icon from "@/components/ui/icon";

interface Correspondent {
  id: string;
  name: string;
  region: string;
  photo: string;
  badgeNumber: string;
  issuedDate: string;
  expiryDate: string;
  specialization: string;
}

const correspondents: Correspondent[] = [
  {
    id: "1",
    name: "Иванов Иван Иванович",
    region: "Москва и МО",
    photo: "/placeholder.svg",
    badgeNumber: "НК-2024-001",
    issuedDate: "01.01.2024",
    expiryDate: "31.12.2025",
    specialization: "ЖКХ, городская среда",
  },
  {
    id: "2",
    name: "Петрова Мария Сергеевна",
    region: "Санкт-Петербург",
    photo: "/placeholder.svg",
    badgeNumber: "НК-2024-002",
    issuedDate: "15.02.2024",
    expiryDate: "14.02.2026",
    specialization: "Экология, природа",
  },
  {
    id: "3",
    name: "Сидоров Алексей Петрович",
    region: "Краснодарский край",
    photo: "/placeholder.svg",
    badgeNumber: "НК-2024-003",
    issuedDate: "01.03.2024",
    expiryDate: "28.02.2026",
    specialization: "Происшествия, безопасность",
  },
];

function isActive(expiryDate: string): boolean {
  const [day, month, year] = expiryDate.split(".").map(Number);
  return new Date(year, month - 1, day) >= new Date();
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CorrespondentsModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-3xl mx-4 max-h-[90vh] flex flex-col shadow-2xl">

        {/* Шапка */}
        <div className="bg-brand px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-sm px-2 py-1">
              <img
                src="https://cdn.poehali.dev/projects/a34d25dc-38da-4806-9ecb-435ec42fa899/bucket/ca038e3e-8244-4246-98b5-f3e8a4e992ed.jpeg"
                alt="Народный корреспондент"
                className="h-8 w-auto object-contain"
              />
            </div>
            <span className="text-white text-sm uppercase tracking-wide">Специальные корреспонденты</span>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Список */}
        <div className="overflow-y-auto flex-1 px-6 py-6 flex flex-col gap-4">
          <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">
            Реестр аккредитованных корреспондентов · РИА «Территория права» «Н»
          </p>

          {correspondents.map((c) => {
            const active = isActive(c.expiryDate);
            return (
              <div key={c.id} className="border border-neutral-200 flex flex-col sm:flex-row overflow-hidden">
                {/* Фото */}
                <div className="sm:w-36 h-40 sm:h-auto shrink-0 bg-neutral-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={c.photo}
                    alt={c.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Данные */}
                <div className="flex-1 p-4 flex flex-col justify-between gap-3">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-neutral-900 text-base leading-tight">{c.name}</h3>
                      <span className={`shrink-0 text-[10px] uppercase tracking-wide px-2 py-0.5 font-semibold ${active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                        {active ? "Действует" : "Истёк"}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 flex items-center gap-1 mb-3">
                      <Icon name="MapPin" size={12} />
                      {c.region}
                    </p>
                    <p className="text-xs text-neutral-500 mb-1">
                      <span className="text-neutral-400">Специализация:</span> {c.specialization}
                    </p>
                  </div>

                  {/* Удостоверение */}
                  <div className="bg-brand/5 border border-brand/20 px-4 py-3 grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-neutral-400 mb-0.5">№ удостоверения</p>
                      <p className="text-sm font-bold text-brand">{c.badgeNumber}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-neutral-400 mb-0.5">Выдано</p>
                      <p className="text-sm font-semibold text-neutral-700">{c.issuedDate}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-neutral-400 mb-0.5">Действует до</p>
                      <p className={`text-sm font-semibold ${active ? "text-green-700" : "text-red-600"}`}>{c.expiryDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="shrink-0 px-6 py-4 border-t border-neutral-200 flex justify-between items-center bg-neutral-50">
          <p className="text-xs text-neutral-400">
            Свидетельство СМИ: ЭЛ ФС 77-76079
          </p>
          <button
            onClick={onClose}
            className="bg-brand text-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-brand-light transition-colors cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}