import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "CheckCircle",
    title: "Фактчекинг сообщества",
    desc: "Каждая новость проходит проверку — голосование читателей и экспертные заключения журналистов, юристов и экологов.",
  },
  {
    icon: "MapPin",
    title: "Карта событий",
    desc: "Интерактивная карта с метками инцидентов по вашему городу и региону. Фильтрация по категориям: ЖКХ, экология, происшествия.",
  },
  {
    icon: "Star",
    title: "Рейтинг корреспондентов",
    desc: "Баллы за достоверные публикации, проверки и комментарии. Высокий рейтинг открывает расширенные права на платформе.",
  },
  {
    icon: "Zap",
    title: "Срочные новости",
    desc: "ЧП и стихийные бедствия выходят мгновенно с пометкой «Требуется проверка» — оперативность без потери ответственности.",
  },
];

interface FeaturedProps {
  onSubmitNews: () => void;
}

export default function Featured({ onSubmitNews }: FeaturedProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/a34d25dc-38da-4806-9ecb-435ec42fa899/files/c1f5cd21-6ecb-453c-bf69-e897640d5cf2.jpg"
          alt="Сеть проверки фактов"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Платформа нового поколения</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Не просто новостной сайт — живая экосистема гражданской журналистики с прозрачной верификацией.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {features.map((f) => (
            <div key={f.title} className="flex gap-3">
              <div className="shrink-0 mt-1">
                <Icon name={f.icon} size={20} className="text-brand" />
              </div>
              <div>
                <p className="font-semibold text-sm text-neutral-900 mb-1">{f.title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={onSubmitNews} className="bg-brand text-white border border-brand px-4 py-2 text-sm transition-all duration-300 hover:bg-brand-light cursor-pointer w-fit uppercase tracking-wide">
          Стать корреспондентом
        </button>
      </div>
    </div>
  );
}