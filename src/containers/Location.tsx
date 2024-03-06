import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@@/store/hooks';
import { locationFind, setDataMode } from '@@/store/slices/locationSlice';
import { DATA_MODE } from '@@/store/slices/types';
import { LocationTable, LocationGrid } from '@@/components/Location';
import { ContainerLayout, ModeLayout } from '@@/components/shared/layouts';
import { Button } from '@@/components/shared/ui/Button';
import { GridIcon } from '@@/components/shared/ui/icons/GridIcon';
import { TableIcon } from '@@/components/shared/ui/icons/TableIcon';
import { debounce } from '@@/utils/debounce';

const component = {
  [DATA_MODE.TABLE]: <LocationTable />,
  [DATA_MODE.GRID]: <LocationGrid />,
};

export const Location = () => {
  const dispatch = useAppDispatch();
  const { options, mode } = useAppSelector((state) => state.location);

  // Дебаунс фетчинг
  const debounceFind = useCallback(
    debounce(() => {
      dispatch(locationFind());
    }, 500),
    [],
  );

  // Отслеживает изменение фильтров
  // Фетчит при изменении
  useEffect(() => {
    debounceFind();
  }, [debounceFind, options]);

  const changeDataMode = (mode: DATA_MODE) => {
    dispatch(setDataMode(mode));
  };

  return (
    <ContainerLayout>
      <ModeLayout>
        <Button title="TABLE MODE" icon={<TableIcon />} onClick={() => changeDataMode(DATA_MODE.TABLE)} />
        <Button title="GRID MODE" icon={<GridIcon />} onClick={() => changeDataMode(DATA_MODE.GRID)} />
      </ModeLayout>

      {component[mode]}
    </ContainerLayout>
  );
};
