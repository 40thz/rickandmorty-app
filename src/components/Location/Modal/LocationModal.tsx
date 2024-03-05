import { PropsWithChildren, memo, useCallback, useEffect, useRef, useState } from 'react';
import { CellInfo } from '@@/components/shared/Table';
import { Modal } from '@@/components/shared/ui/Modal';
import { useRequest } from '@@/hooks/useRequest';
import { characterService } from '@@/services/character.service';
import { Location } from '@@/store/slices/locationSlice/types';
import { getIdFromUrlArray } from '@@/utils/getIdFromUrlArr';
import { LocationIformation } from './LocationIformation';

export type LocationModalProps = { info: CellInfo<Location>['origin'] } & PropsWithChildren;

export const LocationModal = memo(({ info, children }: LocationModalProps) => {
  const [active, setActive] = useState(false);
  const listIdsRef = useRef<number[]>([]);
  const { data, refetch } = useRequest(() => characterService.findById(listIdsRef.current));

  useEffect(() => {
    if (!active) {
      return;
    }

    const list = getIdFromUrlArray(info.residents);
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
      {children && <span onClick={handleModalOpen}>{children}</span>}
      {!children && (
        <span className="cursor-pointer font-bold hover:text-white" onClick={handleModalOpen}>
          {info.name}
        </span>
      )}
      <Modal open={active} onClose={handleModalClose}>
        <LocationIformation info={info} residents={data} />
      </Modal>
    </>
  );
});
