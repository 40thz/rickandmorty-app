import { memo, useEffect, useRef, useState } from 'react';
import { useRequest } from '@/hooks/useRequest';
import { getIdFromUrlArray } from '@/utils/getIdFromUrlArr';
import { characterService } from '@/services/character.service';
import { CellInfo } from '../modules';
import { Modal } from '../shared/ui/Modal';
import { Character } from '@/store/slices/characterSlice/types';

export const CharacterModal = memo(({ info }: { info: CellInfo<Character>['origin'] }) => {
  const [active, setActive] = useState(false);
  const episodeListId = useRef<number[]>([]);
  const { refetch } = useRequest(() => characterService.find(episodeListId.current));

  useEffect(() => {
    if (!active) {
      return;
    }

    const arr = getIdFromUrlArray(info.episode);
    episodeListId.current = arr;

    refetch();
  }, [active]);

  return (
    <>
      <th className="cursor-pointer" onClick={() => setActive(true)}>
        {info.name}
      </th>
      <Modal open={active} onClose={() => setActive(false)}>
        {info.name}
        {info.gender}
      </Modal>
    </>
  );
});
