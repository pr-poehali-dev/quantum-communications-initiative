import Icon from "@/components/ui/icon";

interface ConceptModalProps {
  open: boolean;
  onClose: () => void;
}

const sections = [
  {
    num: "01",
    title: "Суть проекта",
    content: "«Народный корреспондент» — это платформа гражданской журналистики, позволяющая обычным людям становиться источниками актуальной информации, делиться локальными новостями и участвовать в формировании медиа-повестки.",
  },
  {
    num: "02",
    title: "Цели и задачи",
    items: [
      "Повысить информированность общества о локальных событиях",
      "Дать голос жителям отдалённых и малоосвещаемых территорий",
      "Стимулировать гражданскую активность и ответственность",
      "Создать канал обратной связи между жителями и властью",
      "Собрать и обучить сообщество народных корреспондентов",
      "Обеспечить верификацию и оперативную публикацию материалов",
    ],
  },
  {
    num: "03",
    title: "Целевая аудитория",
    items: [
      "Жители городов и сёл, заинтересованные в освещении местных событий",
      "Активные граждане, волонтёры, представители ТОС",
      "Молодёжь, использующая смартфоны для фиксации происходящего",
      "Пенсионеры и местные старожилы с уникальными знаниями о территории",
    ],
  },
  {
    num: "04",
    title: "Формат работы",
    content: "Корреспондент может присылать: текстовые заметки (что, где, когда), фото и видео с места событий, аудиозаписи и интервью, скриншоты соцсетей с указанием источника.",
    items: [
      "Благоустройство и ЖКХ",
      "Дороги и транспорт",
      "Экология и природа",
      "Культурные и спортивные события",
      "Социальные инициативы и волонтёрство",
      "Проблемы местного сообщества",
    ],
  },
  {
    num: "05",
    title: "Принципы работы",
    principles: [
      { label: "Актуальность", desc: "Новости не старше 1–2 дней" },
      { label: "Достоверность", desc: "Проверка фактов, указание источников, отказ от слухов" },
      { label: "Объективность", desc: "Изложение без эмоциональной окраски и призывов к ненависти" },
      { label: "Локальность", desc: "Фокус на событиях конкретного района/города/села" },
      { label: "Безопасность", desc: "Соблюдение законов РФ, защита персональных данных" },
    ],
  },
  {
    num: "06",
    title: "Механизм взаимодействия",
    steps: [
      { label: "Подача материала", desc: "Через форму на сайте, бот в мессенджере или email" },
      { label: "Проверка", desc: "Редактор сверяет факты, уточняет детали, при необходимости редактирует" },
      { label: "Публикация", desc: "Материал выходит на сайте, в партнёрских СМИ и соцсетях проекта" },
      { label: "Обратная связь", desc: "Автор получает уведомление о публикации и ссылку на материал" },
    ],
  },
  {
    num: "07",
    title: "Мотивация участников",
    items: [
      "Публичная благодарность и рубрика «Лучший корреспондент месяца»",
      "Вебинары и мастер-классы по журналистике и съёмке",
      "Призы: сертификаты, подписки, партнёрские подарки",
      "Рекомендательные письма для стажировок в СМИ",
      "Закрытый чат сообщества для обмена опытом",
    ],
  },
  {
    num: "08",
    title: "Критерии успеха",
    items: [
      "100+ активных корреспондентов",
      "50+ публикаций в месяц",
      "10 000+ просмотров в месяц",
      "Наличие партнёрских публикаций",
      "Положительные отзывы жителей и властей",
    ],
  },
];

export default function ConceptModal({ open, onClose }: ConceptModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-3xl mx-4 max-h-[90vh] flex flex-col shadow-2xl">

        <div className="bg-brand px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-sm px-2 py-1">
              <img
                src="https://cdn.poehali.dev/projects/a34d25dc-38da-4806-9ecb-435ec42fa899/bucket/ca038e3e-8244-4246-98b5-f3e8a4e992ed.jpeg"
                alt="Народный корреспондент"
                className="h-8 w-auto object-contain"
              />
            </div>
            <span className="text-white text-sm uppercase tracking-wide">Концепция проекта</span>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6 py-6">
          <h2 className="text-2xl font-bold text-brand mb-1">Народный корреспондент</h2>
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-8">Концепция медиапроекта</p>

          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.num} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-brand/10 text-brand flex items-center justify-center text-xs font-bold">
                  {s.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-neutral-900 mb-2 uppercase tracking-wide text-sm">{s.title}</h3>

                  {s.content && (
                    <p className="text-sm text-neutral-600 leading-relaxed mb-3">{s.content}</p>
                  )}

                  {s.items && (
                    <ul className="space-y-1">
                      {s.items.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-neutral-600">
                          <span className="text-brand mt-1 shrink-0">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.principles && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.principles.map((p) => (
                        <div key={p.label} className="border border-neutral-200 px-3 py-2">
                          <p className="text-xs font-bold text-brand uppercase mb-0.5">{p.label}</p>
                          <p className="text-xs text-neutral-500">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {s.steps && (
                    <div className="flex flex-col gap-2">
                      {s.steps.map((step, i) => (
                        <div key={step.label} className="flex gap-3 items-start">
                          <div className="shrink-0 w-6 h-6 rounded-full bg-brand text-white text-xs flex items-center justify-center font-bold mt-0.5">
                            {i + 1}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-neutral-800">{step.label}</p>
                            <p className="text-xs text-neutral-500">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-neutral-200 pt-4 text-center">
            <p className="text-xs text-neutral-400">
              РИА «Территория права» «Н» · Свидетельство о регистрации СМИ: ЭЛ ФС 77-76079
            </p>
          </div>
        </div>

        <div className="shrink-0 px-6 py-4 border-t border-neutral-200 flex justify-end bg-neutral-50">
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