type MusicCoverArtProps = {
  albumID: string;
  id: number;
  name: string;
  artist: string;
};

export default function MusicCoverArt({
  albumID,
  name,
  artist,
}: MusicCoverArtProps) {
  const imageUrl = `https://coverartarchive.org/release/${albumID}-500.jpg`;

  return (
    <div className="group flex flex-col items-center">
      <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
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
        {artist}
      </p>
    </div>
  );
}
