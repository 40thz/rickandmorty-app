import { useCallback, useEffect } from 'react';
import { EpisodeTable } from '@@/components/Episode';
import { EpisodeGrid } from '@@/components/Episode/EpisodeGrid';
import { ContainerLayout, ModeLayout } from '@@/components/shared/layouts';
import { Button } from '@@/components/shared/ui/Button';
import { GridIcon } from '@@/components/shared/ui/icons/GridIcon';
import { TableIcon } from '@@/components/shared/ui/icons/TableIcon';
import { useAppDispatch, useAppSelector } from '@@/store/hooks';
import { episodeFind, setDataMode } from '@@/store/slices/episodeSlice';
import { DATA_MODE } from '@@/store/slices/types';
import { debounce } from '@@/utils/debounce';

const component = {
  [DATA_MODE.TABLE]: <EpisodeTable />,
  [DATA_MODE.GRID]: <EpisodeGrid />,
};

export const Episode = () => {
  const dispatch = useAppDispatch();
  const { options, mode } = useAppSelector((state) => state.episode);

  // Дебаунс фетчинг
  const debounceFind = useCallback(
    debounce(() => {
      dispatch(episodeFind());
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
