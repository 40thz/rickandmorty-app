import { CharacterModal } from '@/components/Character';
import { LocationModalProps } from './LocationModal';
import { Character } from '@/store/slices/characterSlice/types';

interface LocationIformationProps extends LocationModalProps {
  residents: Character | Character[] | null;
}

export const LocationIformation = ({ info, residents }: LocationIformationProps) => {
  if (!residents) {
    return;
  }

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-white/55 col-span-2 mb-3">{info.name}</h1>
        <section className="flex gap-4">
          <section>
            <p className="text-sm text-white/25">Type:</p>
            <p className="text-sm text-white/55">{info.type}</p>
          </section>
          <section>
            <p className="text-sm text-white/25">Dimension:</p>
            <p className="text-sm text-white/55">{info.dimension}</p>
          </section>
        </section>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold text-white/55">Residents</h1>
        <div className="flex flex-col max-h-[150px] overflow-auto bg-dark/20 rounded-lg p-3 gap-1">
          {Array.isArray(residents) &&
            residents.map((resident) => (
              <CharacterModal key={resident.id} info={resident}>
                <p className="text-sm text-white/55 cursor-pointer">{resident.name}</p>
              </CharacterModal>
            ))}

          {!Array.isArray(residents) && (
            <CharacterModal info={residents}>
              <p className="text-sm text-white/55 cursor-pointer">{residents.name}</p>
            </CharacterModal>
          )}
        </div>
      </div>
    </div>
  );
};
