import type { ReactNode } from 'react';

type AboutProps = {
  heading: string;
  aboutMe: ReactNode;
  quote: string;
  quoteBy: string;
};

export default function About({ heading, aboutMe, quote, quoteBy }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 bg-base scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text mb-10">
          {heading}
        </h2>
        {aboutMe}
        <blockquote className="mt-10 border-l-4 border-mauve pl-6 py-1">
          <p className="text-xl italic text-text leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>
          <cite className="block mt-2 text-sm font-semibold text-subtext0 not-italic">
            — {quoteBy}
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
