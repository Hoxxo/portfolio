type GameCoverArtProps = {
  gameID: string;
  id: number;
  name: string;
};

export default function GameCoverArt({ gameID, name }: GameCoverArtProps) {
  const imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${gameID}.webp`;

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
    </div>
  );
}
