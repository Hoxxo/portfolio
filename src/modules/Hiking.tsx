import PhotoGallery from './PhotoGallery';
import { hikingPhotos } from './data.tsx';

type HikingProps = {
  heading: string;
  subtitle: string;
  body: string;
  empty: string;
};

export default function Hiking({ heading, subtitle, body, empty }: HikingProps) {
  return (
    <section id="hiking" className="py-24 px-6 bg-slate-50 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
          {heading}
        </h2>
        <p className="text-blue-600 font-bold mt-2">{subtitle}</p>
        <p className="text-slate-600 max-w-2xl mt-4 leading-relaxed">{body}</p>

        <div className="mt-10">
          <PhotoGallery photos={hikingPhotos} emptyLabel={empty} />
        </div>
      </div>
    </section>
  );
}
