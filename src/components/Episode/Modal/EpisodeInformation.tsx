import { CharacterModal } from '@/components/Character';
import { EpisodeModalProps } from './EpisodeModal';
import { Character } from '@/store/slices/characterSlice/types';

interface EpisodeInformationProps extends EpisodeModalProps {
  characters: Character | Character[] | null;
}

export const EpisodeInformation = ({ info, characters }: EpisodeInformationProps) => {
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
              <CharacterModal key={character.id} info={character}>
                <p className="text-sm text-white/55 cursor-pointer">{character.name}</p>
              </CharacterModal>
            ))}

          {!Array.isArray(characters) && (
            <CharacterModal info={characters}>
              <p className="text-sm text-white/55 cursor-pointer">{characters.name}</p>
            </CharacterModal>
          )}
        </div>
      </div>
    </div>
  );
};
