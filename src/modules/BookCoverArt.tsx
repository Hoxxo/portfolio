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
    <div className="group group-relative p-4 rounded-lg">
      <img
        src={imageUrl}
        alt={name}
        className="transition-transform duration-300 w-48 group-hover:scale-105"
      />
      <p className="mt-2 text-center text-semibold text-lg">{name}</p>
      <p className="text-center text-semibold text-lg">{author}</p>
    </div>
  );
}
