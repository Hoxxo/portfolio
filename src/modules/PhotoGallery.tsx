import type { Photo } from './customTypes';

type PhotoGalleryProps = {
  photos: Photo[];
  emptyLabel: string;
  variant?: 'light' | 'dark';
};

export default function PhotoGallery({
  photos,
  emptyLabel,
  variant = 'light',
}: PhotoGalleryProps) {
  if (photos.length === 0) {
    const emptyStyles =
      variant === 'dark'
        ? 'border-white/20 text-slate-400'
        : 'border-slate-300 text-slate-400';
    return (
      <div
        className={`rounded-2xl border-2 border-dashed py-16 px-6 text-center font-medium ${emptyStyles}`}
      >
        {emptyLabel}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <figure
          key={photo.id}
          className="group rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm"
        >
          <div className="aspect-4/3 overflow-hidden">
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <figcaption className="p-3 text-sm text-slate-600">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
