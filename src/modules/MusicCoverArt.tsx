type MusicCoverArtProps = {
  albumID: string;
  id: number;
  name: string;
  artist: string;
};

export default function MusicCoverArt({
  albumID,
  _id,
  name,
  artist,
}: MusicCoverArtProps) {
  const imageUrl = `https://coverartarchive.org/release/${albumID}-500.jpg`;

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
      <p className="flex-none text-center text-sm text-slate-400">{artist}</p>
    </div>
  );
}
