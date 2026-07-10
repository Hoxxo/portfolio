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
      className="py-24 px-6 bg-gradient-to-b from-base to-mantle scroll-mt-16"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text">
          {heading}
        </h2>
        <p className="text-subtext1 mt-4 leading-relaxed">{body}</p>

        <div className="flex flex-col items-center gap-4 mt-10">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-subtext0 font-bold mb-2">
              {emailLabel}
            </span>
            {!showEmail ? (
              <button
                onClick={onReveal}
                className="px-6 py-3 bg-mauve text-base rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                {revealLabel}
              </button>
            ) : (
              <span className="font-mono text-lg text-text">{email}</span>
            )}
          </div>

          <a
            href="https://github.com/Hoxxo"
            target="_blank"
            rel="noreferrer"
            className="text-mauve hover:underline font-bold flex items-center"
          >
            GitHub <span className="ml-1 text-xs">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
