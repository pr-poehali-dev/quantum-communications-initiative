import { useState } from "react";
import Icon from "@/components/ui/icon";

interface SubmitNewsModalProps {
  open: boolean;
  onClose: () => void;
}

const CATEGORIES = [
  "Происшествия",
  "Экология",
  "ЖКХ",
  "Культура",
  "Спорт",
  "Политика",
  "Другое",
];

export default function SubmitNewsModal({ open, onClose }: SubmitNewsModalProps) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    location: "",
    text: "",
    author: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ title: "", category: "", location: "", text: "", author: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="bg-brand px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/projects/a34d25dc-38da-4806-9ecb-435ec42fa899/bucket/d3d8ebcc-0d18-4590-8033-82d417118abb.jpeg"
              alt="Народный корреспондент"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </div>
          <button onClick={handleClose} className="text-white/80 hover:text-white transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Новость отправлена!</h3>
            <p className="text-neutral-500 text-sm mb-6">
              Ваш материал принят на модерацию. Мы уведомим вас о статусе публикации.
            </p>
            <button
              onClick={handleClose}
              className="bg-brand text-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-brand-light transition-colors cursor-pointer"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">
                Заголовок <span className="text-red-500">*</span>
              </label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder="Кратко опишите событие"
                className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-brand transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">
                  Категория <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-brand transition-colors bg-white"
                >
                  <option value="">Выберите...</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">
                  Место события
                </label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Город, район, адрес"
                  className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-brand transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">
                Описание <span className="text-red-500">*</span>
              </label>
              <textarea
                name="text"
                value={form.text}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Подробно опишите произошедшее. Укажите время, участников, детали."
                className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-brand transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">
                Ваше имя (необязательно)
              </label>
              <input
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Анонимная публикация — без заполнения"
                className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-brand transition-colors"
              />
            </div>

            <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 px-3 py-2">
              <Icon name="AlertTriangle" size={16} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-700 leading-relaxed">
                Срочные новости (ЧП, стихийные бедствия) публикуются сразу с пометкой «Требуется проверка».
              </p>
            </div>

            <button
              type="submit"
              className="bg-brand text-white py-3 text-sm uppercase tracking-wide font-semibold hover:bg-brand-light transition-colors cursor-pointer w-full mt-2"
            >
              Отправить новость
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
