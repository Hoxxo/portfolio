import type { Photo } from './customTypes';

type PhotoGalleryProps = {
  photos: Photo[];
  emptyLabel: string;
};

export default function PhotoGallery({ photos, emptyLabel }: PhotoGalleryProps) {
  if (photos.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-surface2 text-subtext0 py-16 px-6 text-center font-medium">
        {emptyLabel}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <figure
          key={photo.id}
          className="group rounded-xl overflow-hidden bg-mantle border border-surface0 shadow-sm"
        >
          <div className="aspect-4/3 overflow-hidden">
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <figcaption className="p-3 text-sm text-subtext1">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
