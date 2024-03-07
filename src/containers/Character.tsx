import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@@/store/hooks';
import { characterFind, setDataMode } from '@@/store/slices/characterSlice';
import { DATA_MODE } from '@@/store/slices/types';
import { debounce } from '@@/utils';
import { CharacterGrid, CharacterTable } from '@@/components/Character';
import { ContainerLayout, ModeLayout } from '@@/components/shared/layouts';
import { Button } from '@@/components/shared/ui';
import { TableIcon, GridIcon } from '@@/components/shared/ui/icons';

const component = {
  [DATA_MODE.TABLE]: <CharacterTable />,
  [DATA_MODE.GRID]: <CharacterGrid />,
};

export const Character = () => {
  const dispatch = useAppDispatch();
  const { mode, options } = useAppSelector((state) => state.character);

  // Дебаунс фетчинг
  const debounceFind = useCallback(
    debounce(() => {
      dispatch(characterFind());
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
