import { FC } from 'react';
import { CHARACTER_STATUS } from '@@/store/slices/characterSlice/types';
import { Episode } from '@@/store/slices/episodeSlice/types';
import classNames from 'classnames';
import { CharacterInfoProps } from './CharacterModal';

interface CharacterModalProps extends CharacterInfoProps {
  episodes: Episode[] | Episode | null;
}

export const CharacterInformation: FC<CharacterModalProps> = ({ info, episodes }) => {
  const styles = {
    ['bg-red']: info.status === CHARACTER_STATUS.DEAD,
    ['bg-green']: info.status === CHARACTER_STATUS.ALIVE,
    ['bg-white']: info.status === CHARACTER_STATUS.UNKNOWN,
  };

  if (!episodes) {
    return;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <img src={info.image} alt={info.name} className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-2">
          <section>
            <h1 className="text-xl font-bold text-white/55">{info.name}</h1>
            <div className="flex gap-1 items-center text-sm text-white/55">
              <div className={classNames('w-2 h-2 rounded-full', { ...styles })} />
              <p>
                {info.status} - {info.gender}
              </p>
            </div>
          </section>
          {info.type && (
            <section>
              <p className="text-sm text-white/25">Type:</p>
              <p className="text-sm text-white/55">{info.type}</p>
            </section>
          )}
          <section>
            <p className="text-sm text-white/25">Species:</p>
            <p className="text-sm text-white/55">{info.species}</p>
          </section>
          <section>
            <p className="text-sm text-white/25">Last known location:</p>
            <p className="text-sm text-white/55">{info.location.name}</p>
          </section>
          <section>
            <p className="text-sm text-white/25">Origin location:</p>
            <p className="text-sm text-white/55">{info.origin.name}</p>
          </section>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold text-white/55">Episodes</h1>
        <div className="flex flex-col max-h-[200px] overflow-auto bg-dark/20 rounded-lg p-3 gap-">
          {Array.isArray(episodes) &&
            episodes.map((episode) => (
              <p key={episode.id} className="text-sm text-white/55">
                {episode.name}
              </p>
            ))}

          {!Array.isArray(episodes) && <p className="text-sm text-white/55">{episodes.name}</p>}
        </div>
      </div>
    </div>
  );
};
