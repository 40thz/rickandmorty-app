import { FC } from 'react';
import { Character } from '@@/store/slices/characterSlice/types';
import { LocationModalProps } from './LocationModal';

interface LocationIformationProps extends LocationModalProps {
  residents: Character | Character[] | null;
}

export const LocationIformation: FC<LocationIformationProps> = ({ info, residents }) => {
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

      {info.residents.length > 1 && (
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-white/55">Residents</h1>

          <div className="flex flex-col max-h-[150px] overflow-auto bg-dark/20 rounded-lg p-3 gap-1">
            {Array.isArray(residents) &&
              residents.map((resident) => (
                <p key={resident.id} className="text-sm text-white/55">
                  {resident.name}
                </p>
              ))}
            {!Array.isArray(residents) && <p className="text-sm text-white/55">{residents.name}</p>}
          </div>
        </div>
      )}
    </div>
  );
};
