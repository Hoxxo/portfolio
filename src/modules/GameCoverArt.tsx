type GameCoverArtProps = {
  gameID: string;
  id: number;
  name: string;
};

export default function GameCoverArt({ gameID, _id, name }: GameCoverArtProps) {
  const imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${gameID}.webp`;

  return (
    <div className="group group-relative p-4 rounded-lg">
      <img
        src={imageUrl}
        alt={name}
        className="transition-transform duration-300 group-hover:scale-105"
      />
      <p className="text-center text-semibold text-lg truncate">{`${name}`}</p>
    </div>
  );
}
