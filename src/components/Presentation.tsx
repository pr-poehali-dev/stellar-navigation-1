import { useState } from 'react';

const slides = [
  // Слайд 1 — Титульник
  {
    id: 1,
    type: 'title',
  },
  // Слайд 2 — План
  {
    id: 2,
    type: 'plan',
  },
  // Слайд 3 — Основные понятия
  {
    id: 3,
    type: 'concepts',
  },
  // Слайд 4 — Специфические черты научного познания
  {
    id: 4,
    type: 'content',
    title: 'Специфические черты научного познания',
    subtitle: 'Критерии отличия науки от других форм познания',
  },
  // Слайд 5 — Строение научного знания
  {
    id: 5,
    type: 'content',
    title: 'Строение научного знания',
    subtitle: 'Уровни и структурные элементы',
  },
  // Слайд 6 — Динамика научного знания
  {
    id: 6,
    type: 'content',
    title: 'Динамика научного знания',
    subtitle: 'Модели развития науки',
  },
  // Слайд 7 — Философия и развитие науки
  {
    id: 7,
    type: 'content',
    title: 'Философия и развитие науки',
    subtitle: 'Взаимосвязь философии и научного прогресса',
  },
  // Слайд 8 — Методология и методы
  {
    id: 8,
    type: 'content',
    title: 'Логика, методология и методы научного познания',
    subtitle: 'Классификация методов по уровням познания',
  },
  // Слайд 9 — Заключение
  {
    id: 9,
    type: 'conclusion',
  },
];

export default function Presentation() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
      {/* Слайд */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ minHeight: '560px' }}>
        {slide.type === 'title' && <TitleSlide />}
        {slide.type === 'plan' && <PlanSlide />}
        {slide.type === 'concepts' && <ConceptsSlide />}
        {slide.id === 4 && <FeaturesSlide />}
        {slide.id === 5 && <StructureSlide />}
        {slide.id === 6 && <DynamicsSlide />}
        {slide.id === 7 && <PhilosophySlide />}
        {slide.id === 8 && <MethodsSlide />}
        {slide.type === 'conclusion' && <ConclusionSlide />}
      </div>

      {/* Навигация */}
      <div className="flex items-center gap-6 mt-6">
        <button
          onClick={prev}
          disabled={current === 0}
          className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition-all"
        >
          ← Назад
        </button>
        <span className="text-white/60 text-sm">
          {current + 1} / {slides.length}
        </span>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition-all"
        >
          Далее →
        </button>
      </div>

      {/* Точки */}
      <div className="flex gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
}

function SlideShell({ children, accent = '#1a237e' }: { children: React.ReactNode; accent?: string }) {
  return (
    <div className="flex flex-col h-full" style={{ minHeight: '560px' }}>
      <div className="h-2 w-full" style={{ background: accent }} />
      <div className="flex-1 p-10 flex flex-col">{children}</div>
      <div className="px-10 pb-4 flex items-center justify-between text-xs text-gray-400">
        <span>АГТУ · Философия · 2026</span>
        <span>Павлов М.</span>
      </div>
    </div>
  );
}

function TitleSlide() {
  return (
    <div className="flex flex-col h-full" style={{ minHeight: '560px' }}>
      {/* Шапка АГТУ */}
      <div className="bg-[#1a237e] text-white px-10 py-5 flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-widest opacity-70">Астраханский государственный технический университет</span>
          <span className="text-sm font-semibold mt-0.5">Кафедра философии и социологии</span>
        </div>
        <div className="ml-auto flex gap-3 items-center">
          {/* Знаки качества АГТУ — геральдика */}
          <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-lg font-bold">А</div>
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-8 h-8 fill-white opacity-80">
              <polygon points="20,4 24,14 36,14 26,22 30,34 20,26 10,34 14,22 4,14 16,14" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-10 py-8 bg-gradient-to-b from-gray-50 to-white">
        <p className="text-xs uppercase tracking-widest text-[#1a237e] mb-6">Дисциплина: Философия</p>
        <div className="w-16 h-0.5 bg-[#1a237e] mb-6" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight max-w-2xl">
          Особенности научного познания
        </h1>
        <p className="mt-4 text-gray-500 text-sm max-w-xl leading-relaxed">
          Специфические черты научного познания · Строение и динамика научного знания · Философия и развитие науки · Логика, методология и методы научного познания
        </p>
        <div className="w-16 h-0.5 bg-[#1a237e] mt-6 mb-6" />
        <div className="text-gray-700 text-sm space-y-1">
          <p className="font-semibold">Выполнил: Павлов Михаил</p>
          <p>Студент I курса · АГТУ</p>
          <p className="text-gray-400 mt-2">2026 г.</p>
        </div>
      </div>
    </div>
  );
}

function PlanSlide() {
  const items = [
    { num: '01', text: 'Основные понятия: познание, наука, знание' },
    { num: '02', text: 'Специфические черты и критерии научного познания' },
    { num: '03', text: 'Строение научного знания: эмпирический и теоретический уровни' },
    { num: '04', text: 'Динамика научного знания: модели развития науки' },
    { num: '05', text: 'Философия и развитие науки: роль философских оснований' },
    { num: '06', text: 'Логика, методология и методы научного познания' },
  ];
  return (
    <SlideShell>
      <h2 className="text-2xl font-bold text-[#1a237e] mb-2">План</h2>
      <div className="w-12 h-0.5 bg-[#1a237e] mb-8" />
      <div className="grid gap-3 flex-1">
        {items.map((item) => (
          <div key={item.num} className="flex items-start gap-4 p-3 rounded-lg bg-blue-50 border border-blue-100">
            <span className="text-2xl font-bold text-[#1a237e]/20 leading-none mt-0.5">{item.num}</span>
            <span className="text-gray-800 text-sm leading-snug pt-1">{item.text}</span>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}

function ConceptsSlide() {
  const concepts = [
    {
      term: 'Познание',
      def: 'Процесс получения знания о мире; целенаправленное отражение объективной реальности в сознании субъекта.',
    },
    {
      term: 'Наука',
      def: 'Форма общественного сознания; система объективных знаний о мире, получаемых методами исследования и верифицируемых практикой.',
    },
    {
      term: 'Научное знание',
      def: 'Систематизированная совокупность достоверных, обоснованных и проверяемых сведений об объектах и явлениях действительности.',
    },
    {
      term: 'Методология',
      def: 'Учение о принципах, формах и способах научного познания; система методов, применяемых в исследовательской деятельности.',
    },
    {
      term: 'Гносеология',
      def: 'Раздел философии, изучающий природу, возможности и границы познания, а также отношение знания к действительности.',
    },
  ];
  return (
    <SlideShell>
      <h2 className="text-2xl font-bold text-[#1a237e] mb-2">Основные понятия</h2>
      <div className="w-12 h-0.5 bg-[#1a237e] mb-6" />
      <div className="grid gap-3 flex-1">
        {concepts.map((c) => (
          <div key={c.term} className="flex gap-3 items-start">
            <span className="font-bold text-[#1a237e] min-w-[130px] text-sm pt-0.5">{c.term}</span>
            <span className="text-gray-400 mr-2 pt-0.5">—</span>
            <span className="text-gray-700 text-sm leading-snug">{c.def}</span>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}

function FeaturesSlide() {
  const features = [
    { icon: '🎯', label: 'Объективность', desc: 'Стремление к знанию, независимому от субъективных предпочтений исследователя' },
    { icon: '✅', label: 'Верифицируемость', desc: 'Возможность эмпирической проверки и воспроизведения результатов' },
    { icon: '🔗', label: 'Системность', desc: 'Знания организованы в логически связную, непротиворечивую систему' },
    { icon: '📐', label: 'Точность', desc: 'Использование строгого языка, математики, чётких определений' },
    { icon: '🔄', label: 'Фальсифицируемость', desc: 'Принцип К. Поппера: научное утверждение должно быть опровержимо' },
    { icon: '🌍', label: 'Интерсубъективность', desc: 'Результаты воспроизводимы и проверяемы любым компетентным исследователем' },
  ];
  return (
    <SlideShell>
      <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Специфические черты научного познания</h2>
      <p className="text-gray-400 text-sm mb-6">Критерии демаркации науки (К. Поппер, Т. Кун, И. Лакатос)</p>
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
      <p className="text-xs text-gray-400 mt-4 italic">Источник: Popper K. The Logic of Scientific Discovery. London, 1959.</p>
    </SlideShell>
  );
}

function StructureSlide() {
  return (
    <SlideShell>
      <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Строение научного знания</h2>
      <p className="text-gray-400 text-sm mb-6">Два основных уровня по В. Штеффу и М. Бунге</p>
      <div className="flex gap-6 flex-1">
        {/* Таблица сравнения уровней */}
        <div className="flex-1">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1a237e] text-white">
                <th className="px-3 py-2 text-left font-semibold">Критерий</th>
                <th className="px-3 py-2 text-center font-semibold">Эмпирический уровень</th>
                <th className="px-3 py-2 text-center font-semibold">Теоретический уровень</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Объект', 'Явления и факты', 'Сущности и закономерности'],
                ['Методы', 'Наблюдение, эксперимент, измерение', 'Абстрагирование, идеализация, моделирование'],
                ['Форма знания', 'Факт, протокол, закон', 'Гипотеза, теория, концепция'],
                ['Язык', 'Описательный, наглядный', 'Абстрактный, математизированный'],
                ['Критерий', 'Опытная проверка', 'Логическая непротиворечивость'],
              ].map(([crit, emp, theo], i) => (
                <tr key={crit} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-3 py-2 font-medium text-gray-700 border-b border-gray-100">{crit}</td>
                  <td className="px-3 py-2 text-center text-gray-600 border-b border-gray-100">{emp}</td>
                  <td className="px-3 py-2 text-center text-gray-600 border-b border-gray-100">{theo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Схема связи */}
      <div className="mt-4 flex items-center justify-center gap-3 text-sm">
        <div className="px-4 py-2 bg-blue-100 rounded-lg text-[#1a237e] font-semibold">Эмпирический</div>
        <div className="flex flex-col items-center text-gray-400 text-xs gap-0.5">
          <span>↑ индукция</span>
          <span>↓ дедукция</span>
        </div>
        <div className="px-4 py-2 bg-[#1a237e] rounded-lg text-white font-semibold">Теоретический</div>
      </div>
      <p className="text-xs text-gray-400 mt-3 italic">Источник: Степин В.С. Теоретическое знание. М.: Прогресс-Традиция, 2000.</p>
    </SlideShell>
  );
}

function DynamicsSlide() {
  return (
    <SlideShell>
      <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Динамика научного знания</h2>
      <p className="text-gray-400 text-sm mb-5">Основные концепции развития науки</p>
      <div className="grid grid-cols-3 gap-4 flex-1">
        {[
          {
            author: 'К. Поппер',
            years: '(1902–1994)',
            model: 'Фальсификационизм',
            desc: 'Наука развивается через выдвижение гипотез и их опровержение. Знание растёт путём устранения ошибок.',
            color: 'bg-indigo-50 border-indigo-200',
            accent: 'text-indigo-700',
          },
          {
            author: 'Т. Кун',
            years: '(1922–1996)',
            model: 'Научные революции',
            desc: 'Чередование периодов «нормальной науки» в рамках парадигмы и революций — смены парадигм.',
            color: 'bg-blue-50 border-blue-200',
            accent: 'text-blue-700',
          },
          {
            author: 'И. Лакатос',
            years: '(1922–1974)',
            model: 'Исследовательские программы',
            desc: 'Развитие науки — конкуренция научно-исследовательских программ, каждая из которых имеет «жёсткое ядро» и «защитный пояс».',
            color: 'bg-cyan-50 border-cyan-200',
            accent: 'text-cyan-700',
          },
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
      {/* Схема-стрелка динамики */}
      <div className="mt-5 flex items-center gap-2 text-xs text-gray-500">
        <div className="px-3 py-1 bg-gray-100 rounded">Накопление фактов</div>
        <span>→</span>
        <div className="px-3 py-1 bg-gray-100 rounded">Аномалии</div>
        <span>→</span>
        <div className="px-3 py-1 bg-blue-100 rounded text-[#1a237e] font-semibold">Кризис парадигмы</div>
        <span>→</span>
        <div className="px-3 py-1 bg-[#1a237e] rounded text-white font-semibold">Научная революция</div>
        <span>→</span>
        <div className="px-3 py-1 bg-gray-100 rounded">Новая парадигма</div>
      </div>
      <p className="text-xs text-gray-400 mt-2 italic">Источник: Kuhn T. The Structure of Scientific Revolutions. Chicago, 1962.</p>
    </SlideShell>
  );
}

function PhilosophySlide() {
  return (
    <SlideShell>
      <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Философия и развитие науки</h2>
      <p className="text-gray-400 text-sm mb-5">Роль философских оснований в научном познании</p>

      {/* Схема взаимосвязи */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 flex flex-col gap-3">
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-sm">
              <p className="font-semibold text-purple-700 mb-1">Онтологические основания</p>
              <p className="text-xs text-gray-600">Представления о природе реальности, причинности и детерминизме, лежащие в основе научных теорий</p>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-sm">
              <p className="font-semibold text-purple-700 mb-1">Гносеологические основания</p>
              <p className="text-xs text-gray-600">Принципы познаваемости мира, соотношения опыта и разума, истины и заблуждения</p>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <div className="p-4 bg-[#1a237e] rounded-2xl text-white text-center shadow-lg">
              <p className="text-3xl mb-1">⚗️</p>
              <p className="font-bold text-sm">Наука</p>
              <p className="text-xs opacity-70 mt-1">Опирается на философские основания</p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-sm">
              <p className="font-semibold text-indigo-700 mb-1">Методологические основания</p>
              <p className="text-xs text-gray-600">Принципы и нормы научного исследования: объективность, воспроизводимость, доказательность</p>
            </div>
            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-sm">
              <p className="font-semibold text-indigo-700 mb-1">Ценностные основания</p>
              <p className="text-xs text-gray-600">Этика науки, критерии выбора теорий, понятие научной рациональности</p>
            </div>
          </div>
        </div>

        <div className="p-3 border-l-4 border-[#1a237e] bg-blue-50 rounded-r-xl">
          <p className="text-sm text-gray-700 italic">
            «Без теории эксперимент слеп, без эксперимента теория пуста»
          </p>
          <p className="text-xs text-gray-400 mt-1">— перефразировано из И. Канта. Критика чистого разума. 1781.</p>
        </div>
      </div>
    </SlideShell>
  );
}

function MethodsSlide() {
  return (
    <SlideShell>
      <h2 className="text-2xl font-bold text-[#1a237e] mb-1">Методы научного познания</h2>
      <p className="text-gray-400 text-sm mb-4">Классификация по уровням исследования</p>
      <div className="flex-1 flex flex-col gap-3">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1a237e] text-white">
              <th className="px-3 py-2 text-left">Уровень</th>
              <th className="px-3 py-2 text-left">Методы</th>
              <th className="px-3 py-2 text-left">Характеристика</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-50">
              <td className="px-3 py-2 font-semibold text-[#1a237e] border-b border-blue-100" rowSpan={2}>Эмпирический</td>
              <td className="px-3 py-2 border-b border-blue-100">Наблюдение, эксперимент</td>
              <td className="px-3 py-2 border-b border-blue-100 text-gray-600">Прямой контакт с объектом; сбор фактического материала</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="px-3 py-2 border-b border-blue-100">Измерение, описание</td>
              <td className="px-3 py-2 border-b border-blue-100 text-gray-600">Фиксация количественных и качественных характеристик</td>
            </tr>
            <tr className="bg-white">
              <td className="px-3 py-2 font-semibold text-[#1a237e] border-b border-gray-100" rowSpan={2}>Теоретический</td>
              <td className="px-3 py-2 border-b border-gray-100">Абстрагирование, идеализация</td>
              <td className="px-3 py-2 border-b border-gray-100 text-gray-600">Мысленное выделение существенных свойств объекта</td>
            </tr>
            <tr className="bg-white">
              <td className="px-3 py-2 border-b border-gray-100">Индукция, дедукция, аналогия</td>
              <td className="px-3 py-2 border-b border-gray-100 text-gray-600">Логические процедуры получения нового знания</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="px-3 py-2 font-semibold text-[#1a237e]">Общенаучный</td>
              <td className="px-3 py-2">Системный анализ, моделирование</td>
              <td className="px-3 py-2 text-gray-600">Применяются на всех уровнях и во всех дисциплинах</td>
            </tr>
          </tbody>
        </table>

        {/* Схема логики научного исследования */}
        <div className="mt-2 flex items-center gap-2 text-xs justify-center flex-wrap">
          {['Проблема', '→', 'Гипотеза', '→', 'Эксперимент', '→', 'Анализ', '→', 'Теория', '→', 'Практика'].map((s, i) => (
            <span
              key={i}
              className={
                s === '→'
                  ? 'text-gray-400'
                  : 'px-3 py-1 rounded bg-blue-100 text-[#1a237e] font-medium'
              }
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2 italic">Источник: Bunge M. Scientific Research. Berlin: Springer, 1967.</p>
    </SlideShell>
  );
}

function ConclusionSlide() {
  return (
    <SlideShell>
      <h2 className="text-2xl font-bold text-[#1a237e] mb-2">Выводы</h2>
      <div className="w-12 h-0.5 bg-[#1a237e] mb-6" />
      <div className="flex-1 grid gap-4">
        {[
          'Научное познание отличается от других форм познания объективностью, системностью, верифицируемостью и фальсифицируемостью.',
          'Научное знание имеет двухуровневую структуру (эмпирический и теоретический), которые взаимообусловлены через индукцию и дедукцию.',
          'Динамика науки описывается через конкурирующие модели Поппера, Куна и Лакатоса — все они фиксируют нелинейный характер развития знания.',
          'Философия обеспечивает науку онтологическими, гносеологическими и методологическими основаниями, определяя тип рациональности эпохи.',
          'Методология науки — иерархичная система: от логики рассуждений до конкретных методов сбора и обработки данных.',
        ].map((text, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a237e] text-white text-xs flex items-center justify-center font-bold mt-0.5">
              {i + 1}
            </span>
            <p className="text-gray-700 text-sm leading-snug">{text}</p>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
