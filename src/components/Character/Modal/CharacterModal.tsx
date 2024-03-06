import { FC, PropsWithChildren, memo, useCallback, useEffect, useRef, useState } from 'react';
import { Character } from '@@/store/slices/characterSlice/types';
import { CellInfo } from '@@/components/shared/Table';
import { ErrorMessage } from '@@/components/shared/ui/ErrorMessage';
import { Loader } from '@@/components/shared/ui/Loader';
import { Modal } from '@@/components/shared/ui/Modal';
import { useRequest } from '@@/hooks/useRequest';
import { getIdFromUrlArray } from '@@/utils/getIdFromUrlArr';
import { episodeService } from '@@/services/episode.service';
import { CharacterInformation } from './CharacterInformation';

export type CharacterInfoProps = { info: CellInfo<Character>['origin'] } & PropsWithChildren;

export const CharacterModal: FC<CharacterInfoProps> = memo(({ info, children }) => {
  const [active, setActive] = useState(false);
  const listIdsRef = useRef<number[]>([]);
  const { isLoading, data, refetch, error } = useRequest(() => episodeService.findById(listIdsRef.current));

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

        {!isLoading && <CharacterInformation info={info} episodes={data} />}
      </Modal>
    </>
  );
});
