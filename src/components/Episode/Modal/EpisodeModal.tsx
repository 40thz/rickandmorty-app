import { FC, PropsWithChildren, memo, useCallback, useEffect, useRef, useState } from 'react';
import { CellInfo } from '@@/components/shared/Table';
import { ErrorMessage } from '@@/components/shared/ui/ErrorMessage';
import { Loader } from '@@/components/shared/ui/Loader';
import { Modal } from '@@/components/shared/ui/Modal';
import { useRequest } from '@@/hooks/useRequest';
import { characterService } from '@@/services/character.service';
import { Episode } from '@@/store/slices/episodeSlice/types';
import { getIdFromUrlArray } from '@@/utils/getIdFromUrlArr';
import { EpisodeInformation } from './EpisodeInformation';

export type EpisodeModalProps = { info: CellInfo<Episode>['origin'] } & PropsWithChildren;

export const EpisodeModal: FC<EpisodeModalProps> = memo(({ info, children }) => {
  const [active, setActive] = useState(false);
  const listIdsRef = useRef<number[]>([]);
  const { data, refetch, isLoading, error } = useRequest(() => characterService.findById(listIdsRef.current));

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
      {children && (
        <div className="h-fit" onClick={handleModalOpen}>
          {children}
        </div>
      )}

      {!children && (
        <span className="cursor-pointer font-bold hover:text-white" onClick={handleModalOpen}>
          {info.name}
        </span>
      )}

      <Modal open={active} onClose={handleModalClose}>
        {isLoading && !error && <Loader className="flex justify-center" />}
        {isLoading && error && (
          <ErrorMessage title="Error" subTitle="Looks like something went wrong..." className="col-span-4" />
        )}

        {!isLoading && <EpisodeInformation info={info} characters={data} />}
      </Modal>
    </>
  );
});
