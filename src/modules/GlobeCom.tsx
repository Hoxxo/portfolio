import PhotoGallery from './PhotoGallery';
import { globecomPhotos } from './data.tsx';

type GlobeComProps = {
  heading: string;
  subtitle: string;
  body: string;
  empty: string;
};

export default function GlobeCom({ heading, subtitle, body, empty }: GlobeComProps) {
  return (
    <section id="globecom" className="py-24 px-6 bg-slate-950 text-white scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          {heading}
        </h2>
        <p className="text-blue-400 font-bold mt-2">{subtitle}</p>
        <p className="text-slate-300 max-w-2xl mt-4 leading-relaxed">{body}</p>

        <div className="mt-10">
          <PhotoGallery photos={globecomPhotos} emptyLabel={empty} variant="dark" />
        </div>
      </div>
    </section>
  );
}
