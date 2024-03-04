import { PropsWithChildren, memo, useCallback, useEffect, useRef, useState } from 'react';
import { CellInfo } from '@@/components/shared/Table';
import { Modal } from '@@/components/shared/ui/Modal';
import { useRequest } from '@@/hooks/useRequest';
import { characterService } from '@@/services/character.service';
import { Episode } from '@@/store/slices/episodeSlice/types';
import { getIdFromUrlArray } from '@@/utils/getIdFromUrlArr';
import { EpisodeInformation } from './EpisodeInformation';

export type EpisodeModalProps = { info: CellInfo<Episode>['origin'] } & PropsWithChildren;

export const EpisodeModal = memo(({ info, children }: EpisodeModalProps) => {
  const [active, setActive] = useState(false);
  const listIdsRef = useRef<number[]>([]);
  const { data, refetch } = useRequest(() => characterService.findById(listIdsRef.current));

  useEffect(() => {
    if (!active) {
      return;
    }

    const list = getIdFromUrlArray(info.characters);
    listIdsRef.current = list;

    refetch();
  }, [active]);

  const handleModalOpen = () => {
    setActive(true);
  };

  const handleModalClose = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <>
      {children && <span onClick={handleModalOpen}>{children}</span>}
      {!children && (
        <span className="cursor-pointer font-bold" onClick={handleModalOpen}>
          {info.name}
        </span>
      )}
      <Modal open={active} onClose={handleModalClose}>
        <EpisodeInformation info={info} characters={data} />
      </Modal>
    </>
  );
});
