import { useCallback, useEffect } from 'react';
import { CharacterTable } from '@@/components/Character';
import { CharacterGrid } from '@@/components/Character/CharacterGrid';
import { ContainerLayout } from '@@/components/shared/layouts';
import { Button } from '@@/components/shared/ui/Button';
import { GridIcon } from '@@/components/shared/ui/icons/GridIcon';
import { TableIcon } from '@@/components/shared/ui/icons/TableIcon';
import { useAppDispatch, useAppSelector } from '@@/store/hooks';
import { characterFind, setDataType } from '@@/store/slices/characterSlice';
import { DATA_TYPE } from '@@/store/slices/characterSlice/types';
import { debounce } from '@@/utils/debounce';

const component = {
  [DATA_TYPE.TABLE]: <CharacterTable />,
  [DATA_TYPE.GRID]: <CharacterGrid />,
};

export const Character = () => {
  const dispatch = useAppDispatch();
  const { type, options } = useAppSelector((state) => state.character);

  const debounceFind = useCallback(
    debounce(() => {
      dispatch(characterFind());
    }, 500),
    [],
  );

  useEffect(() => {
    debounceFind();
  }, [debounceFind, options]);

  const changeDataType = (type: DATA_TYPE) => {
    dispatch(setDataType(type));
  };

  return (
    <ContainerLayout>
      <div className="flex gap-3 bg-dark/85 rounded-lg w-fit p-2">
        <Button title="TABLE MODE" icon={<TableIcon />} onClick={() => changeDataType(DATA_TYPE.TABLE)} />
        <Button title="GRID MODE" icon={<GridIcon />} onClick={() => changeDataType(DATA_TYPE.GRID)} />
      </div>
      {component[type]}
    </ContainerLayout>
  );
};
