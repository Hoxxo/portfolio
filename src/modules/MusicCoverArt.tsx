import { useState } from 'react';

type MusicCoverArtProps = {
  albumID: string,
  id: number,
  name: string,
  artist: string
};

export default function MusicCoverArt({ albumID, id, name, artist }: MusicCoverArtProps) {
  const imageUrl = `https://coverartarchive.org/release/${albumID}-500.jpg`

  return (
    <div className="group group-relative p-4 rounded-lg">
      <img
        src={imageUrl}
        alt={name}
        className="transition-transform duration-300 w-60 group-hover:scale-105"
      />
      <p className="mt-2 text-center text-semibold text-lg">{name}</p>
      <p className="text-center text-semibold text-lg">{artist}</p>
    </div>
  );
}
