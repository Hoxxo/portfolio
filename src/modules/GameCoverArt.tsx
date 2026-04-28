type GameCoverArtProps = {
  gameID: string;
  id: number;
  name: string;
};

export default function GameCoverArt({ gameID, _id, name }: GameCoverArtProps) {
  const imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${gameID}.webp`;

  return (
    <div className="group flex flex-col items-center p-2 rounded-lg h-full">
      <div className="flex-1 min-h-0 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={name}
          className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="flex-none text-center font-semibold text-sm truncate max-w-full">{name}</p>
    </div>
  );
}
