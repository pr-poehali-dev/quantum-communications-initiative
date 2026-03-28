import { useRef } from "react";
import Icon from "@/components/ui/icon";

interface ApplicationModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ open, onClose }: ApplicationModalProps) {
  const printRef = useRef<HTMLDivElement>(null);

  if (!open) return null;

  const today = new Date().toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handlePrint = () => {
    const content = printRef.current?.innerHTML;
    const win = window.open("", "_blank");
    if (!win || !content) return;
    win.document.write(`
      <html><head><title>Заявление — Народный корреспондент</title>
      <style>
        body { font-family: 'Times New Roman', serif; font-size: 14px; margin: 40px; color: #000; line-height: 1.8; }
        h2 { text-align: center; font-size: 16px; margin: 24px 0 16px; }
        .header-block { text-align: right; margin-bottom: 32px; line-height: 2; }
        ul { margin: 8px 0 16px 24px; }
        li { margin-bottom: 4px; }
        .footer { margin-top: 40px; }
        .placeholder { border-bottom: 1px solid #000; display: inline-block; min-width: 200px; }
      </style></head>
      <body>${content}</body></html>
    `);
    win.document.close();
    win.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-2xl mx-4 max-h-[90vh] flex flex-col shadow-2xl">
        <div className="bg-brand px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/projects/a34d25dc-38da-4806-9ecb-435ec42fa899/bucket/d3d8ebcc-0d18-4590-8033-82d417118abb.jpeg"
              alt="Народный корреспондент"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <span className="text-white text-sm uppercase tracking-wide">Заявление корреспондента</span>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-8 py-6">
          <div ref={printRef}>
            <div className="text-right text-sm leading-loose mb-8 text-neutral-700">
              <p>Руководителю проекта</p>
              <p>«Народный корреспондент»</p>
              <br />
              <p>От: <span className="border-b border-neutral-400 inline-block min-w-[180px]">&nbsp;</span></p>
              <p>Адрес: <span className="border-b border-neutral-400 inline-block min-w-[160px]">&nbsp;</span></p>
              <p>Телефон: <span className="border-b border-neutral-400 inline-block min-w-[140px]">&nbsp;</span></p>
              <p>E-mail: <span className="border-b border-neutral-400 inline-block min-w-[160px]">&nbsp;</span></p>
            </div>

            <h2 className="text-center text-base font-bold uppercase tracking-wide mb-6">Заявление</h2>

            <p className="text-sm leading-relaxed mb-4">
              Прошу принять меня в проект «Народный корреспондент».
            </p>

            <p className="text-sm leading-relaxed mb-3">
              Я ознакомлен(а) с целями, задачами и правилами участия в проекте и обязуюсь их соблюдать. Готов(а):
            </p>
            <ul className="text-sm leading-relaxed mb-4 list-disc pl-6 space-y-1">
              <li>предоставлять актуальные и достоверные материалы на темы, соответствующие тематике проекта;</li>
              <li>соблюдать установленные сроки подачи материалов;</li>
              <li>следовать редакционным требованиям к оформлению и содержанию публикаций;</li>
              <li>взаимодействовать с координаторами проекта для оперативного решения возникающих вопросов.</li>
            </ul>

            <p className="text-sm leading-relaxed mb-3">
              Считаю, что мой опыт и навыки позволят внести вклад в развитие проекта. В частности, я обладаю следующими компетенциями:
            </p>
            <ul className="text-sm leading-relaxed mb-4 list-disc pl-6 space-y-1">
              <li><span className="border-b border-neutral-400 inline-block w-full max-w-md">&nbsp;</span></li>
              <li><span className="border-b border-neutral-400 inline-block w-full max-w-md">&nbsp;</span></li>
            </ul>

            <p className="text-sm leading-relaxed mb-3">Прилагаю к заявлению:</p>
            <ul className="text-sm leading-relaxed mb-6 list-decimal pl-6 space-y-1">
              <li>Резюме с указанием опыта работы и достижений.</li>
              <li>Портфолио (примеры публикаций, текстов, фоторепортажей) — <span className="border-b border-neutral-400 inline-block min-w-[160px]">&nbsp;</span>.</li>
            </ul>

            <p className="text-sm leading-relaxed mb-8">
              Готов(а) пройти необходимое обучение и выполнять поставленные задачи в рамках проекта.
            </p>

            <div className="flex justify-between items-end mt-10 text-sm">
              <p>Дата: <span className="text-neutral-500">{today}</span></p>
              <p>Подпись: <span className="border-b border-neutral-800 inline-block min-w-[200px]">&nbsp;</span></p>
            </div>
          </div>
        </div>

        <div className="shrink-0 px-6 py-4 border-t border-neutral-200 flex gap-3 justify-end bg-neutral-50">
          <button
            onClick={onClose}
            className="border border-neutral-300 text-neutral-700 px-5 py-2 text-sm uppercase tracking-wide hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            Закрыть
          </button>
          <button
            onClick={handlePrint}
            className="bg-brand text-white px-5 py-2 text-sm uppercase tracking-wide hover:bg-brand-light transition-colors cursor-pointer flex items-center gap-2"
          >
            <Icon name="Printer" size={16} />
            Распечатать
          </button>
        </div>
      </div>
    </div>
  );
}
