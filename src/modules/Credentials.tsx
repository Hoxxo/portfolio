type CredentialsProps = {
  heading: string;
  licences: string[];
};

export default function Credentials({ heading, licences }: CredentialsProps) {
  return (
    <section id="credentials" className="py-24 px-6 bg-mantle scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text mb-10">
          {heading}
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {licences.map((licence) => (
            <li
              key={licence}
              className="flex items-start gap-3 p-4 rounded-xl bg-base border border-surface0 shadow-sm"
            >
              <span className="flex-none w-6 h-6 rounded-full bg-green text-base text-xs font-bold flex items-center justify-center mt-0.5">
                ✓
              </span>
              <span className="font-semibold text-text">{licence}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
