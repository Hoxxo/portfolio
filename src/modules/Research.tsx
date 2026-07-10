import type { ReactNode } from 'react';

type ResearchProps = {
  heading: string;
  intro: string;
  paperLink: ReactNode;
  tags: string[];
};

export default function Research({ heading, intro, paperLink, tags }: ResearchProps) {
  return (
    <section id="research" className="py-24 px-6 bg-crust text-text scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-8">
          {heading}
        </h2>
        <p className="text-lg text-subtext1 leading-relaxed max-w-3xl">
          {intro}
          {paperLink}
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full bg-surface0 text-sm font-semibold text-blue border border-surface1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
