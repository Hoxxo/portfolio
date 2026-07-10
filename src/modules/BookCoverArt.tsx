type BookCoverArtProps = {
  bookID: string;
  id: number;
  name: string;
  author: string;
};

export default function BookCoverArt({ bookID, name, author }: BookCoverArtProps) {
  const imageUrl = `https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/${bookID}.jpg`;

  return (
    <div className="group flex flex-col items-center">
      <div className="w-full aspect-3/4 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="mt-2 text-center font-semibold text-sm text-slate-800 truncate max-w-full">
        {name}
      </p>
      <p className="text-center text-xs text-slate-500 truncate max-w-full">
        {author}
      </p>
    </div>
  );
}
