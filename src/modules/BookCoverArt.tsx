type BookCoverArtProps = {
  bookID: string;
  id: number;
  name: string;
  author: string;
};

export default function BookCoverArt({
  bookID,
  _,
  name,
  author,
}: BookCoverArtProps) {
  const imageUrl = `https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/${bookID}.jpg`;

  return (
    <div className="group flex flex-col items-center p-2 rounded-lg h-full">
      <div className="flex-1 min-h-0 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={name}
          className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="flex-none text-center font-semibold text-sm">{name}</p>
      <p className="flex-none text-center text-sm text-slate-400">{author}</p>
    </div>
  );
}
