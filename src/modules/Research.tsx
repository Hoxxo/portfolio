type ResearchProps = {
  heading: string;
  intro: string;
  tags: string[];
};

export default function Research({ heading, intro, tags }: ResearchProps) {
  return (
    <section id="research" className="py-24 px-6 bg-slate-950 text-white scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-8">
          {heading}
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
          {intro}
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full bg-white/10 text-sm font-semibold text-blue-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
