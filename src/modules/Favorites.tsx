import GameCoverArt from './GameCoverArt';
import MusicCoverArt from './MusicCoverArt';
import BookCoverArt from './BookCoverArt';
import {
  gameImageData,
  albumImageData,
  bookImageData,
} from './data.tsx';

type FavoritesContent = {
  heading: string;
  intro: string;
  gamesLabel: string;
  albumsLabel: string;
  booksLabel: string;
  showsLabel: string;
  alsoLabel: string;
  games: string[];
  music: string[];
  books: string[];
  shows: string[];
  credits: string;
};

function AlsoEnjoy({ label, items }: { label: string; items: string[] }) {
  return (
    <p className="mt-4 text-sm text-subtext0">
      <span className="font-semibold text-subtext1">{label}</span>{' '}
      {items.join(' · ')}
    </p>
  );
}

export default function Favorites({ t }: { t: FavoritesContent }) {
  return (
    <section id="favorites" className="py-24 px-6 bg-base scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text">
          {t.heading}
        </h2>
        <p className="text-subtext0 mt-2 mb-12">{t.intro}</p>

        <div className="space-y-14">
          <div>
            <h3 className="text-xl font-bold text-text mb-4">
              {t.gamesLabel}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {gameImageData.map((data) => (
                <GameCoverArt
                  key={data.id}
                  gameID={data.imageId}
                  id={data.id}
                  name={data.name}
                />
              ))}
            </div>
            <AlsoEnjoy label={t.alsoLabel} items={t.games} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-text mb-4">
              {t.albumsLabel}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {albumImageData.map((data) => (
                <MusicCoverArt
                  key={data.id}
                  albumID={data.imageId}
                  id={data.id}
                  name={data.name}
                  artist={data.artist}
                />
              ))}
            </div>
            <AlsoEnjoy label={t.alsoLabel} items={t.music} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-text mb-4">
              {t.booksLabel}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {bookImageData.map((data) => (
                <BookCoverArt
                  key={data.id}
                  bookID={data.imageID}
                  id={data.id}
                  name={data.name}
                  author={data.author}
                />
              ))}
            </div>
            <AlsoEnjoy label={t.alsoLabel} items={t.books} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-text mb-4">
              {t.showsLabel}
            </h3>
            <AlsoEnjoy label={t.alsoLabel} items={t.shows} />
          </div>
        </div>

        <p className="mt-14 text-xs text-subtext0 border-t border-surface0 pt-6">
          {t.credits}
        </p>
      </div>
    </section>
  );
}
