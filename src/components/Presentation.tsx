import { useState } from 'react';

const IMG = {
  knowledge: 'https://cdn.poehali.dev/projects/a7720617-6861-443f-adbe-79346dcc3b92/files/e9843f58-ed9f-4c8f-a07c-7b523a38a542.jpg',
  science: 'https://cdn.poehali.dev/projects/a7720617-6861-443f-adbe-79346dcc3b92/files/e468289f-f661-46ac-8968-cd6d66928976.jpg',
  network: 'https://cdn.poehali.dev/projects/a7720617-6861-443f-adbe-79346dcc3b92/files/d7949a11-9668-4510-b4e1-cbfc3b5ab4ce.jpg',
  thinkers: 'https://cdn.poehali.dev/projects/a7720617-6861-443f-adbe-79346dcc3b92/files/f89a6a69-2578-4402-a0f4-b9270847f253.jpg',
  philosophy: 'https://cdn.poehali.dev/projects/a7720617-6861-443f-adbe-79346dcc3b92/files/48d3044e-b5f5-41d3-ad61-e6630bde57df.jpg',
  lab: 'https://cdn.poehali.dev/projects/a7720617-6861-443f-adbe-79346dcc3b92/files/8ebe221c-e447-4e05-9dbb-605321888553.jpg',
  logic: 'https://cdn.poehali.dev/projects/a7720617-6861-443f-adbe-79346dcc3b92/files/229c19be-996f-4599-ac89-5c9451d35ed1.jpg',
};

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const total = 17;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1));

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ minHeight: '560px' }}>
        {current === 0 && <Slide01 />}
        {current === 1 && <Slide02 />}
        {current === 2 && <Slide03 />}
        {current === 3 && <Slide04 />}
        {current === 4 && <Slide05 />}
        {current === 5 && <Slide06 />}
        {current === 6 && <Slide07 />}
        {current === 7 && <Slide08 />}
        {current === 8 && <Slide09 />}
        {current === 9 && <Slide10 />}
        {current === 10 && <Slide11 />}
        {current === 11 && <Slide12 />}
        {current === 12 && <Slide13 />}
        {current === 13 && <Slide14 />}
        {current === 14 && <Slide15 />}
        {current === 15 && <Slide16 />}
        {current === 16 && <Slide17 />}
      </div>

      <div className="flex items-center gap-6 mt-6">
        <button onClick={prev} disabled={current === 0}
          className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition-all">
          ← Назад
        </button>
        <span className="text-white/60 text-sm">{current + 1} / {total}</span>
        <button onClick={next} disabled={current === total - 1}
          className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition-all">
          Далее →
        </button>
      </div>

      <div className="flex gap-1.5 mt-4 flex-wrap justify-center max-w-sm">
        {Array.from({ length: total }).map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-white' : 'w-2 bg-white/30'}`} />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="px-8 pb-3 flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-2 mt-auto">
      <span>АГТУ · Философия · 2026</span>
      <span>Павлов М.</span>
    </div>
  );
}

function SideImg({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-56 flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
      <img src={src} alt={alt} className="w-full h-full object-cover" style={{ minHeight: '220px' }} />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 1 — Титульник
══════════════════════════════════════════════ */
function Slide01() {
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="bg-[#1a237e] text-white px-10 py-5 flex items-center gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest opacity-70">Астраханский государственный технический университет</span>
          <p className="text-sm font-semibold mt-0.5">Кафедра философии и социологии</p>
        </div>
        <div className="ml-auto flex gap-3 items-center">
          <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-lg font-bold">А</div>
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-8 h-8 fill-white opacity-80">
              <polygon points="20,4 24,14 36,14 26,22 30,34 20,26 10,34 14,22 4,14 16,14" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-1 flex">
        <div className="flex-1 flex flex-col items-center justify-center text-center px-10 py-8 bg-gradient-to-br from-gray-50 to-white">
          <p className="text-xs uppercase tracking-widest text-[#1a237e] mb-4">Дисциплина: Философия</p>
          <div className="w-16 h-0.5 bg-[#1a237e] mb-5" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight max-w-2xl">
            Особенности научного познания
          </h1>
          <p className="mt-4 text-gray-500 text-sm max-w-xl leading-relaxed">
            Специфические черты · Строение и динамика · Философия и развитие науки · Логика и методология
          </p>
          <div className="w-16 h-0.5 bg-[#1a237e] mt-5 mb-5" />
          <div className="text-gray-700 text-sm space-y-1">
            <p className="font-semibold">Выполнил: Павлов Михаил</p>
            <p>Студент I курса · АГТУ</p>
            <p className="text-gray-400 mt-1">2026 г.</p>
          </div>
        </div>
        <div className="w-64 flex-shrink-0 relative overflow-hidden">
          <img src={IMG.knowledge} alt="Научное познание" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 2 — План
══════════════════════════════════════════════ */
function Slide02() {
  const items = [
    { num: '01', text: 'Основные понятия: познание, наука, знание, методология' },
    { num: '02', text: 'Специфические черты и критерии научного познания' },
    { num: '03', text: 'Формы научного знания: факт, гипотеза, теория, закон' },
    { num: '04', text: 'Строение научного знания: эмпирический и теоретический уровни' },
    { num: '05', text: 'Динамика научного знания: модели развития науки' },
    { num: '06', text: 'Научные революции и смена парадигм' },
    { num: '07', text: 'Философские основания науки' },
    { num: '08', text: 'Философия науки как дисциплина' },
    { num: '09', text: 'Логика, методология и методы научного познания' },
  ];
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="flex flex-1">
        <div className="flex-1 p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-1">План презентации</h2>
          <div className="w-12 h-0.5 bg-[#1a237e] mb-5" />
          <div className="grid gap-2 flex-1">
            {items.map((item) => (
              <div key={item.num} className="flex items-start gap-3 p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                <span className="text-xl font-bold text-[#1a237e]/20 leading-none mt-0.5 w-7 flex-shrink-0">{item.num}</span>
                <span className="text-gray-800 text-sm leading-snug">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-48 flex-shrink-0 relative overflow-hidden">
          <img src={IMG.science} alt="Наука" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 3 — Основные понятия
══════════════════════════════════════════════ */
function Slide03() {
  const concepts = [
    { term: 'Познание', def: 'Целенаправленный процесс отражения объективной реальности в сознании субъекта.' },
    { term: 'Наука', def: 'Форма общественного сознания; система объективных знаний, верифицируемых практикой.' },
    { term: 'Научное знание', def: 'Систематизированная совокупность достоверных и проверяемых сведений о действительности.' },
    { term: 'Методология', def: 'Учение о принципах и способах научного познания; система применяемых методов.' },
    { term: 'Гносеология', def: 'Раздел философии о природе, возможностях и границах познания.' },
    { term: 'Парадигма', def: 'По Т. Куну — признанные всеми научные достижения, задающие модели постановки проблем и их решений.' },
  ];
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="flex flex-1">
        <div className="w-44 flex-shrink-0 relative overflow-hidden">
          <img src={IMG.network} alt="Сеть знаний" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-white/50 to-transparent" />
        </div>
        <div className="flex-1 p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Основные понятия</h2>
          <div className="w-12 h-0.5 bg-[#1a237e] mb-5" />
          <div className="grid gap-3 flex-1">
            {concepts.map((c) => (
              <div key={c.term} className="flex gap-2 items-start">
                <span className="font-bold text-[#1a237e] min-w-[110px] text-sm pt-0.5">{c.term}</span>
                <span className="text-gray-400 mr-1">—</span>
                <span className="text-gray-700 text-sm leading-snug">{c.def}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 4 — Специфические черты
══════════════════════════════════════════════ */
function Slide04() {
  const features = [
    { icon: '🎯', label: 'Объективность', desc: 'Знание независимо от субъективных предпочтений исследователя' },
    { icon: '✅', label: 'Верифицируемость', desc: 'Возможность эмпирической проверки результатов' },
    { icon: '🔗', label: 'Системность', desc: 'Логически связная, непротиворечивая система знаний' },
    { icon: '📐', label: 'Точность', desc: 'Строгий язык, математика, чёткие определения' },
    { icon: '🔄', label: 'Фальсифицируемость', desc: 'Принцип К. Поппера: утверждение должно быть опровержимо' },
    { icon: '🌍', label: 'Интерсубъективность', desc: 'Результаты воспроизводимы любым компетентным исследователем' },
  ];
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="p-8 flex flex-col flex-1">
        <div className="flex gap-6 items-start mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-0.5">Специфические черты научного познания</h2>
            <p className="text-gray-400 text-sm">Критерии демаркации науки (К. Поппер, Т. Кун, И. Лакатос)</p>
          </div>
          <img src={IMG.lab} alt="Лаборатория" className="w-40 h-24 object-cover rounded-xl shadow flex-shrink-0" />
        </div>
        <div className="grid grid-cols-2 gap-3 flex-1">
          {features.map((f) => (
            <div key={f.label} className="flex gap-3 p-3 rounded-xl border border-blue-100 bg-blue-50">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <p className="font-semibold text-[#1a237e] text-sm">{f.label}</p>
                <p className="text-gray-600 text-xs mt-0.5 leading-snug">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3 italic">Источник: Popper K. The Logic of Scientific Discovery. London: Hutchinson, 1959.</p>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 5 — Наука vs другие формы познания
══════════════════════════════════════════════ */
function Slide05() {
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="p-8 flex flex-col flex-1">
        <div className="flex gap-6 items-start mb-5">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-0.5">Наука среди форм познания</h2>
            <p className="text-gray-400 text-sm">Сравнительная характеристика</p>
          </div>
          <img src={IMG.philosophy} alt="Философия и наука" className="w-40 h-24 object-cover rounded-xl shadow flex-shrink-0" />
        </div>
        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1a237e] text-white">
                <th className="px-3 py-2 text-left">Форма познания</th>
                <th className="px-3 py-2 text-left">Основа</th>
                <th className="px-3 py-2 text-left">Критерий истины</th>
                <th className="px-3 py-2 text-left">Воспроизводимость</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Наука', 'Опыт + разум', 'Верификация/фальсификация', 'Да'],
                ['Обыденное', 'Здравый смысл', 'Практическая польза', 'Частично'],
                ['Художественное', 'Интуиция, образ', 'Эстетическая ценность', 'Нет'],
                ['Религиозное', 'Вера, откровение', 'Авторитет текста', 'Нет'],
                ['Философское', 'Разум + рефлексия', 'Логическая непротиворечивость', 'Частично'],
              ].map(([form, base, crit, repr], i) => (
                <tr key={form} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className={`px-3 py-2 font-semibold border-b border-gray-100 ${form === 'Наука' ? 'text-[#1a237e]' : 'text-gray-700'}`}>{form}</td>
                  <td className="px-3 py-2 text-gray-600 border-b border-gray-100">{base}</td>
                  <td className="px-3 py-2 text-gray-600 border-b border-gray-100">{crit}</td>
                  <td className={`px-3 py-2 border-b border-gray-100 font-medium ${repr === 'Да' ? 'text-green-600' : repr === 'Нет' ? 'text-red-400' : 'text-yellow-600'}`}>{repr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 6 — Формы научного знания
══════════════════════════════════════════════ */
function Slide06() {
  const forms = [
    { name: 'Научный факт', desc: 'Зафиксированное и проверенное эмпирическое утверждение об единичном явлении', example: 'Вода кипит при 100°C (при 1 атм.)' },
    { name: 'Гипотеза', desc: 'Предположение, объясняющее явление и требующее проверки', example: 'Гипотеза атомарного строения вещества (Демокрит)' },
    { name: 'Закон', desc: 'Устойчивая, повторяющаяся связь между явлениями', example: 'Закон всемирного тяготения Ньютона' },
    { name: 'Теория', desc: 'Система понятий и законов, объясняющая класс явлений', example: 'Специальная теория относительности Эйнштейна' },
    { name: 'Концепция', desc: 'Система взглядов, определяющая подход к пониманию явлений', example: 'Концепция научных революций Т. Куна' },
  ];
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="flex flex-1">
        <div className="flex-1 p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Формы научного знания</h2>
          <div className="w-12 h-0.5 bg-[#1a237e] mb-4" />
          <div className="grid gap-2.5 flex-1">
            {forms.map((f) => (
              <div key={f.name} className="p-3 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-100">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="font-bold text-[#1a237e] text-sm">{f.name}</span>
                  <span className="text-xs text-gray-400 italic">{f.example}</span>
                </div>
                <p className="text-gray-600 text-xs leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-44 flex-shrink-0 relative overflow-hidden">
          <img src={IMG.network} alt="Структура знания" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 7 — Строение: таблица уровней
══════════════════════════════════════════════ */
function Slide07() {
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="p-8 flex flex-col flex-1">
        <div className="flex gap-6 items-start mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-0.5">Строение научного знания</h2>
            <p className="text-gray-400 text-sm">Два основных уровня по В.С. Стёпину</p>
          </div>
          <img src={IMG.science} alt="Уровни науки" className="w-40 h-24 object-cover rounded-xl shadow flex-shrink-0" />
        </div>
        <table className="w-full text-sm border-collapse flex-1">
          <thead>
            <tr className="bg-[#1a237e] text-white">
              <th className="px-3 py-2 text-left">Критерий</th>
              <th className="px-3 py-2 text-center">Эмпирический уровень</th>
              <th className="px-3 py-2 text-center">Теоретический уровень</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Объект', 'Явления и факты', 'Сущности и закономерности'],
              ['Методы', 'Наблюдение, эксперимент, измерение', 'Абстрагирование, идеализация, моделирование'],
              ['Форма знания', 'Факт, протокол, закон', 'Гипотеза, теория, концепция'],
              ['Язык', 'Описательный, наглядный', 'Абстрактный, математизированный'],
              ['Критерий истины', 'Опытная проверка', 'Логическая непротиворечивость'],
            ].map(([c, e, t], i) => (
              <tr key={c} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-3 py-2 font-medium text-gray-700 border-b border-gray-100">{c}</td>
                <td className="px-3 py-2 text-center text-gray-600 border-b border-gray-100">{e}</td>
                <td className="px-3 py-2 text-center text-gray-600 border-b border-gray-100">{t}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex items-center justify-center gap-3 text-sm">
          <div className="px-4 py-2 bg-blue-100 rounded-lg text-[#1a237e] font-semibold">Эмпирический</div>
          <div className="flex flex-col items-center text-gray-400 text-xs gap-0.5">
            <span>↑ индукция</span>
            <span>↓ дедукция</span>
          </div>
          <div className="px-4 py-2 bg-[#1a237e] rounded-lg text-white font-semibold">Теоретический</div>
        </div>
        <p className="text-xs text-gray-400 mt-2 italic">Источник: Степин В.С. Теоретическое знание. М.: Прогресс-Традиция, 2000.</p>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 8 — Эмпирический уровень
══════════════════════════════════════════════ */
function Slide08() {
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="flex flex-1">
        <div className="w-44 flex-shrink-0 relative overflow-hidden">
          <img src={IMG.lab} alt="Лаборатория" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-white/30 to-transparent" />
        </div>
        <div className="flex-1 p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Эмпирический уровень познания</h2>
          <div className="w-12 h-0.5 bg-[#1a237e] mb-4" />
          <div className="grid gap-3 flex-1">
            {[
              { title: 'Наблюдение', desc: 'Целенаправленное восприятие объекта без вмешательства в его состояние. Пример: астрономические наблюдения Галилея.' },
              { title: 'Эксперимент', desc: 'Активное воздействие на объект в контролируемых условиях. Пример: опыты Майкельсона–Морли (1887) о скорости света.' },
              { title: 'Измерение', desc: 'Количественное определение характеристик объекта с помощью эталонов и приборов.' },
              { title: 'Описание', desc: 'Фиксация результатов наблюдения и эксперимента на языке науки (таблицы, протоколы, графики).' },
              { title: 'Сравнение', desc: 'Установление сходства и различия объектов по одному или нескольким признакам.' },
            ].map((m) => (
              <div key={m.title} className="flex gap-3 p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                <span className="w-2 flex-shrink-0 bg-[#1a237e] rounded-full mt-1.5 self-start" style={{ minHeight: '8px' }} />
                <div>
                  <span className="font-semibold text-[#1a237e] text-sm">{m.title}: </span>
                  <span className="text-gray-600 text-sm">{m.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 9 — Теоретический уровень
══════════════════════════════════════════════ */
function Slide09() {
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="p-8 flex flex-col flex-1">
        <div className="flex gap-6 items-start mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-0.5">Теоретический уровень познания</h2>
            <p className="text-gray-400 text-sm">Методы работы с абстрактными объектами</p>
          </div>
          <img src={IMG.logic} alt="Логика" className="w-40 h-24 object-cover rounded-xl shadow flex-shrink-0" />
        </div>
        <div className="grid grid-cols-2 gap-3 flex-1">
          {[
            { title: 'Абстрагирование', desc: 'Мысленное выделение существенных свойств объекта при отвлечении от несущественных. Пример: понятие «идеального газа».' },
            { title: 'Идеализация', desc: 'Создание объектов, не существующих в реальности. Пример: абсолютно чёрное тело, материальная точка.' },
            { title: 'Формализация', desc: 'Отображение знания в знаково-символической форме (математика, логика).' },
            { title: 'Мысленный эксперимент', desc: 'Моделирование ситуации в уме. Пример: «лифт Эйнштейна» при создании ОТО.' },
            { title: 'Гипотетико-дедуктивный метод', desc: 'Построение системы гипотез, из которых выводятся проверяемые следствия.' },
            { title: 'Аксиоматический метод', desc: 'Построение теории на основе аксиом. Пример: геометрия Евклида.' },
          ].map((m) => (
            <div key={m.title} className="p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100">
              <p className="font-semibold text-[#1a237e] text-sm mb-0.5">{m.title}</p>
              <p className="text-gray-600 text-xs leading-snug">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 10 — Динамика: Поппер, Кун, Лакатос
══════════════════════════════════════════════ */
function Slide10() {
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="p-8 flex flex-col flex-1">
        <div className="flex gap-6 items-start mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-0.5">Динамика научного знания</h2>
            <p className="text-gray-400 text-sm">Основные концепции развития науки</p>
          </div>
          <img src={IMG.thinkers} alt="Мыслители" className="w-40 h-24 object-cover rounded-xl shadow flex-shrink-0" />
        </div>
        <div className="grid grid-cols-3 gap-4 flex-1">
          {[
            { author: 'К. Поппер', years: '(1902–1994)', model: 'Фальсификационизм', desc: 'Наука развивается через выдвижение гипотез и их опровержение. Знание растёт путём устранения ошибок (метод проб и ошибок).', color: 'bg-indigo-50 border-indigo-200', accent: 'text-indigo-700' },
            { author: 'Т. Кун', years: '(1922–1996)', model: 'Научные революции', desc: 'Чередование «нормальной науки» в рамках парадигмы и революций — смен парадигм при накоплении аномалий.', color: 'bg-blue-50 border-blue-200', accent: 'text-blue-700' },
            { author: 'И. Лакатос', years: '(1922–1974)', model: 'Исслед. программы', desc: 'Конкуренция научно-исследовательских программ с «жёстким ядром» и «защитным поясом» вспомогательных гипотез.', color: 'bg-cyan-50 border-cyan-200', accent: 'text-cyan-700' },
          ].map((m) => (
            <div key={m.author} className={`p-4 rounded-xl border ${m.color} flex flex-col gap-2`}>
              <div>
                <p className={`font-bold ${m.accent}`}>{m.author}</p>
                <p className="text-xs text-gray-400">{m.years}</p>
              </div>
              <p className={`text-sm font-semibold ${m.accent}`}>{m.model}</p>
              <p className="text-xs text-gray-600 leading-snug">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
          {['Накопление фактов', '→', 'Аномалии', '→', 'Кризис парадигмы', '→', 'Научная революция', '→', 'Новая парадигма'].map((s, i) => (
            <span key={i} className={s === '→' ? 'text-gray-400' : 'px-2.5 py-1 rounded bg-blue-100 text-[#1a237e] font-medium'}>{s}</span>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2 italic">Источник: Kuhn T. The Structure of Scientific Revolutions. Chicago: Univ. of Chicago Press, 1962.</p>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 11 — Научные революции подробнее
══════════════════════════════════════════════ */
function Slide11() {
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="flex flex-1">
        <div className="flex-1 p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Научные революции в истории</h2>
          <p className="text-gray-400 text-sm mb-4">Примеры смен парадигм по Т. Куну</p>
          <div className="flex-1 overflow-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1a237e] text-white">
                  <th className="px-3 py-2 text-left">Революция</th>
                  <th className="px-3 py-2 text-left">Старая парадигма</th>
                  <th className="px-3 py-2 text-left">Новая парадигма</th>
                  <th className="px-3 py-2 text-left">Период</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Коперниканская', 'Геоцентризм (Птолемей)', 'Гелиоцентризм (Коперник)', 'XVI в.'],
                  ['Ньютоновская', 'Механика Аристотеля', 'Классическая механика', 'XVII в.'],
                  ['Химическая', 'Теория флогистона', 'Кислородная теория (Лавуазье)', 'XVIII в.'],
                  ['Эйнштейновская', 'Абсолютное пространство-время', 'Теория относительности', 'XX в.'],
                  ['Квантовая', 'Классическая физика', 'Квантовая механика (Бор, Гейзенберг)', 'XX в.'],
                ].map(([rev, old, newp, per], i) => (
                  <tr key={rev} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-3 py-2 font-semibold text-[#1a237e] border-b border-gray-100 text-xs">{rev}</td>
                    <td className="px-3 py-2 text-gray-500 border-b border-gray-100 text-xs">{old}</td>
                    <td className="px-3 py-2 text-gray-700 border-b border-gray-100 text-xs">{newp}</td>
                    <td className="px-3 py-2 text-gray-500 border-b border-gray-100 text-xs">{per}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 italic">Источник: Kuhn T. The Structure of Scientific Revolutions. Chicago, 1962.</p>
        </div>
        <div className="w-44 flex-shrink-0 relative overflow-hidden">
          <img src={IMG.thinkers} alt="Учёные" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 12 — Философские основания науки
══════════════════════════════════════════════ */
function Slide12() {
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="p-8 flex flex-col flex-1">
        <div className="flex gap-6 items-start mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-0.5">Философские основания науки</h2>
            <p className="text-gray-400 text-sm">Четыре типа оснований (по В.С. Стёпину)</p>
          </div>
          <img src={IMG.philosophy} alt="Философия" className="w-40 h-24 object-cover rounded-xl shadow flex-shrink-0" />
        </div>
        <div className="grid grid-cols-2 gap-4 flex-1">
          {[
            { type: 'Онтологические', color: 'bg-purple-50 border-purple-200 text-purple-700', desc: 'Представления о природе реальности, причинности и детерминизме, лежащие в основе научных теорий', example: 'Атомизм Демокрита → химия; детерминизм Лапласа → классическая физика' },
            { type: 'Гносеологические', color: 'bg-blue-50 border-blue-200 text-blue-700', desc: 'Принципы познаваемости мира, соотношения опыта и разума, истины и заблуждения', example: 'Эмпиризм Бэкона → индуктивная наука; рационализм Декарта → математизация' },
            { type: 'Методологические', color: 'bg-indigo-50 border-indigo-200 text-indigo-700', desc: 'Нормы научного исследования: объективность, воспроизводимость, доказательность', example: 'Принцип фальсифицируемости Поппера; принцип дополнительности Бора' },
            { type: 'Ценностные', color: 'bg-cyan-50 border-cyan-200 text-cyan-700', desc: 'Этика науки, критерии выбора теорий, понятие научной рациональности', example: 'Стандарты научного этоса (Р. Мертон): универсализм, организованный скептицизм' },
          ].map((f) => (
            <div key={f.type} className={`p-4 rounded-xl border ${f.color.split(' ').slice(0, 2).join(' ')}`}>
              <p className={`font-bold text-sm mb-1 ${f.color.split(' ')[2]}`}>{f.type} основания</p>
              <p className="text-gray-600 text-xs leading-snug mb-1.5">{f.desc}</p>
              <p className="text-gray-400 text-xs italic leading-snug">Пример: {f.example}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3 italic">Источник: Степин В.С. Философия науки. М.: Гардарики, 2006.</p>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 13 — Философия науки как дисциплина
══════════════════════════════════════════════ */
function Slide13() {
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="flex flex-1">
        <div className="w-44 flex-shrink-0 relative overflow-hidden">
          <img src={IMG.knowledge} alt="Философия науки" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-white/40 to-transparent" />
        </div>
        <div className="flex-1 p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Философия науки</h2>
          <p className="text-gray-400 text-sm mb-4">Дисциплина, изучающая природу и структуру научного знания</p>
          <div className="grid gap-3 flex-1">
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="font-semibold text-[#1a237e] text-sm mb-1">Предмет философии науки</p>
              <p className="text-gray-600 text-xs">Структура и рост научного знания, природа научных теорий, методы и критерии рациональности, социальные аспекты науки.</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="font-semibold text-[#1a237e] text-sm mb-1">Ключевые проблемы</p>
              <ul className="text-gray-600 text-xs space-y-0.5 list-disc list-inside">
                <li>Проблема демаркации: что считать наукой?</li>
                <li>Проблема роста знания: как развивается наука?</li>
                <li>Проблема теоретической нагруженности наблюдений</li>
                <li>Проблема редукции: можно ли свести одну науку к другой?</li>
              </ul>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="font-semibold text-[#1a237e] text-sm mb-1">Основные направления</p>
              <div className="grid grid-cols-3 gap-2 mt-1">
                {['Позитивизм (О. Конт)', 'Неопозитивизм (Венский кружок)', 'Постпозитивизм (Поппер, Кун)'].map((d) => (
                  <div key={d} className="text-xs text-center p-1.5 bg-white border border-blue-200 rounded-lg text-gray-600">{d}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 14 — Методология науки
══════════════════════════════════════════════ */
function Slide14() {
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="p-8 flex flex-col flex-1">
        <div className="flex gap-6 items-start mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-0.5">Методология научного познания</h2>
            <p className="text-gray-400 text-sm">Иерархическая структура методологического знания</p>
          </div>
          <img src={IMG.logic} alt="Методология" className="w-40 h-24 object-cover rounded-xl shadow flex-shrink-0" />
        </div>
        <div className="flex gap-4 flex-1 items-stretch">
          {[
            { level: 'I уровень', title: 'Философская методология', desc: 'Всеобщие принципы: диалектика, системность, детерминизм, принцип единства теории и практики', color: '#1a237e', textColor: 'text-white' },
            { level: 'II уровень', title: 'Общенаучная методология', desc: 'Методы, применяемые во всех науках: системный анализ, кибернетика, синергетика', color: '#283593', textColor: 'text-white' },
            { level: 'III уровень', title: 'Конкретно-научная', desc: 'Методы отдельных наук: масс-спектрометрия в химии, МРТ в медицине', color: '#3949ab', textColor: 'text-white' },
            { level: 'IV уровень', title: 'Технический уровень', desc: 'Конкретные методики и процедуры: анкетирование, хроматография, математическое моделирование', color: '#5c6bc0', textColor: 'text-white' },
          ].map((l) => (
            <div key={l.level} className="flex-1 rounded-xl p-4 flex flex-col" style={{ background: l.color }}>
              <p className="text-white/60 text-xs font-medium mb-1">{l.level}</p>
              <p className={`font-bold text-sm mb-2 ${l.textColor}`}>{l.title}</p>
              <p className="text-white/80 text-xs leading-snug">{l.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3 italic">Источник: Bunge M. Scientific Research. Vol. I–II. Berlin: Springer, 1967.</p>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 15 — Таблица методов
══════════════════════════════════════════════ */
function Slide15() {
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="p-8 flex flex-col flex-1">
        <div className="flex gap-6 items-start mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-0.5">Методы научного познания</h2>
            <p className="text-gray-400 text-sm">Классификация по уровням исследования</p>
          </div>
          <img src={IMG.lab} alt="Методы" className="w-40 h-24 object-cover rounded-xl shadow flex-shrink-0" />
        </div>
        <table className="w-full text-sm border-collapse flex-1">
          <thead>
            <tr className="bg-[#1a237e] text-white">
              <th className="px-3 py-2 text-left">Уровень</th>
              <th className="px-3 py-2 text-left">Метод</th>
              <th className="px-3 py-2 text-left">Характеристика</th>
              <th className="px-3 py-2 text-left">Пример</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Эмпирический', 'Наблюдение', 'Пассивное восприятие объекта', 'Наблюдение Галилея за маятником'],
              ['Эмпирический', 'Эксперимент', 'Активное воздействие на объект', 'Опыт Резерфорда с α-частицами'],
              ['Теоретический', 'Абстрагирование', 'Выделение существенного', 'Понятие «идеального газа»'],
              ['Теоретический', 'Дедукция', 'Вывод частного из общего', 'Вывод законов Кеплера из ОТО'],
              ['Теоретический', 'Индукция', 'Обобщение частных фактов', 'Открытие закона Ома'],
              ['Общенаучный', 'Моделирование', 'Изучение через модель', 'Модель ДНК Уотсона–Крика'],
              ['Общенаучный', 'Системный анализ', 'Объект как система элементов', 'Экосистемный подход в биологии'],
            ].map(([lev, met, char, ex], i) => (
              <tr key={`${lev}-${met}`} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className={`px-3 py-1.5 font-semibold text-xs border-b border-gray-100 ${lev === 'Эмпирический' ? 'text-blue-600' : lev === 'Теоретический' ? 'text-[#1a237e]' : 'text-cyan-600'}`}>{lev}</td>
                <td className="px-3 py-1.5 font-medium text-gray-700 border-b border-gray-100 text-xs">{met}</td>
                <td className="px-3 py-1.5 text-gray-500 border-b border-gray-100 text-xs">{char}</td>
                <td className="px-3 py-1.5 text-gray-400 border-b border-gray-100 text-xs italic">{ex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 16 — Логика науки
══════════════════════════════════════════════ */
function Slide16() {
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="flex flex-1">
        <div className="w-44 flex-shrink-0 relative overflow-hidden">
          <img src={IMG.logic} alt="Логика" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-white/40 to-transparent" />
        </div>
        <div className="flex-1 p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Логика в научном познании</h2>
          <p className="text-gray-400 text-sm mb-4">Роль логики как инструмента научного мышления</p>
          <div className="grid gap-3 flex-1">
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="font-semibold text-[#1a237e] text-sm mb-1">Формальная логика</p>
              <p className="text-gray-600 text-xs">Законы тождества, противоречия, исключённого третьего, достаточного основания. Обеспечивает непротиворечивость рассуждений в науке.</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="font-semibold text-[#1a237e] text-sm mb-1">Математическая логика</p>
              <p className="text-gray-600 text-xs">Логика предикатов, модальная и темпоральная логика. Применяется в формализации научных теорий, программировании, доказательстве теорем.</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="font-semibold text-[#1a237e] text-sm mb-1">Индуктивная логика</p>
              <p className="text-gray-600 text-xs">Изучает правила вывода вероятностных заключений из эмпирических данных. Ключевой инструмент обобщения в естественных науках.</p>
            </div>
            <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl">
              <p className="font-semibold text-indigo-700 text-sm mb-1">Схема научного вывода</p>
              <div className="flex items-center gap-2 text-xs flex-wrap mt-1">
                {['Проблема', '→', 'Гипотеза', '→', 'Дедуктивные следствия', '→', 'Проверка', '→', 'Подтверждение / Фальсификация'].map((s, i) => (
                  <span key={i} className={s === '→' ? 'text-gray-400' : 'px-2 py-0.5 rounded bg-white border border-indigo-200 text-indigo-700 font-medium'}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════
   СЛАЙД 17 — Выводы
══════════════════════════════════════════════ */
function Slide17() {
  return (
    <div className="flex flex-col" style={{ minHeight: '560px' }}>
      <div className="h-1.5 bg-[#1a237e]" />
      <div className="flex flex-1">
        <div className="flex-1 p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Выводы</h2>
          <div className="w-12 h-0.5 bg-[#1a237e] mb-5" />
          <div className="grid gap-3 flex-1">
            {[
              'Научное познание отличается объективностью, системностью, верифицируемостью и фальсифицируемостью — в отличие от других форм познания.',
              'Научное знание имеет двухуровневую структуру: эмпирический и теоретический уровни взаимосвязаны через индукцию и дедукцию.',
              'Формы научного знания — факт, гипотеза, закон и теория — образуют иерархию нарастающей объяснительной силы.',
              'Динамика науки нелинейна: концепции Поппера, Куна и Лакатоса фиксируют революционный и накопительный характер развития знания.',
              'Философия обеспечивает науку онтологическими, гносеологическими, методологическими и ценностными основаниями.',
              'Методология науки иерархична: от всеобщих философских принципов до конкретных методических процедур.',
              'Логика является формальным инструментом обеспечения строгости и непротиворечивости научного мышления.',
            ].map((text, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1a237e] text-white text-xs flex items-center justify-center font-bold mt-0.5">{i + 1}</span>
                <p className="text-gray-700 text-sm leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-44 flex-shrink-0 relative overflow-hidden">
          <img src={IMG.knowledge} alt="Выводы" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
