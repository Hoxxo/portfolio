type ContactProps = {
  heading: string;
  body: string;
  emailLabel: string;
  revealLabel: string;
  showEmail: boolean;
  onReveal: () => void;
  email: string;
};

export default function Contact({
  heading,
  body,
  emailLabel,
  revealLabel,
  showEmail,
  onReveal,
  email,
}: ContactProps) {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50 scroll-mt-16"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
          {heading}
        </h2>
        <p className="text-slate-600 mt-4 leading-relaxed">{body}</p>

        <div className="flex flex-col items-center gap-4 mt-10">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">
              {emailLabel}
            </span>
            {!showEmail ? (
              <button
                onClick={onReveal}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-colors"
              >
                {revealLabel}
              </button>
            ) : (
              <span className="font-mono text-lg text-slate-800">{email}</span>
            )}
          </div>

          <a
            href="https://github.com/Hoxxo"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline font-bold flex items-center"
          >
            GitHub <span className="ml-1 text-xs">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
