import { FC } from 'react';
import { Character } from '@@/store/slices/characterSlice/types';
import { EpisodeModalProps } from './EpisodeModal';

interface EpisodeInformationProps extends EpisodeModalProps {
  characters: Character | Character[] | null;
}

export const EpisodeInformation: FC<EpisodeInformationProps> = ({ info, characters }) => {
  if (!characters) {
    return;
  }

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-white/55 col-span-2 mb-3">{info.name}</h1>
        <section className="flex gap-4">
          <section>
            <p className="text-sm text-white/25">Episode:</p>
            <p className="text-sm text-white/55">{info.episode}</p>
          </section>
          <section>
            <p className="text-sm text-white/25">Air data:</p>
            <p className="text-sm text-white/55">{info.air_date}</p>
          </section>
        </section>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold text-white/55">Characters</h1>
        <div className="flex flex-col max-h-[150px] overflow-auto bg-dark/20 rounded-lg p-3 gap-1">
          {Array.isArray(characters) &&
            characters.map((character) => (
              <p key={character.id} className="text-sm text-white/55">
                {character.name}
              </p>
            ))}

          {!Array.isArray(characters) && <p className="text-sm text-white/55">{characters.name}</p>}
        </div>
      </div>
    </div>
  );
};
