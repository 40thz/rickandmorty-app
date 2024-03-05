import { PropsWithChildren, memo, useCallback, useEffect, useRef, useState } from 'react';
import { CellInfo } from '@@/components/shared/Table';
import { Modal } from '@@/components/shared/ui/Modal';
import { useRequest } from '@@/hooks/useRequest';
import { episodeService } from '@@/services/episode.service';
import { Character } from '@@/store/slices/characterSlice/types';
import { getIdFromUrlArray } from '@@/utils/getIdFromUrlArr';
import { CharacterInformation } from './CharacterInformation';

export type CharacterInfoProps = { info: CellInfo<Character>['origin'] } & PropsWithChildren;

export const CharacterModal = memo(({ info, children }: CharacterInfoProps) => {
  const [active, setActive] = useState(false);
  const listIdsRef = useRef<number[]>([]);
  const { isLoading, data, refetch } = useRequest(() => episodeService.findById(listIdsRef.current));

  useEffect(() => {
    if (!active) {
      return;
    }

    const list = getIdFromUrlArray(info.episode);
    listIdsRef.current = list;

    refetch();
  }, [active]);

  const handleModalOpen = useCallback(() => {
    setActive(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <>
      {children && <div onClick={handleModalOpen}>{children}</div>}
      {!children && (
        <span className="cursor-pointer font-bold hover:text-white" onClick={handleModalOpen}>
          {info.name}
        </span>
      )}
      <Modal open={active} onClose={handleModalClose}>
        {isLoading && <div className="text-xl text-white">Loading</div>}
        {!isLoading && <CharacterInformation info={info} episodes={data} />}
      </Modal>
    </>
  );
});
