import { useCallback, useEffect, useMemo } from 'react';
import { InputColumnFilter, Table, TableRowType } from '@/components/modules';
import { debounce } from '@/utils/debounce';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setOptions } from '@/store/slices/episodeSlice';
import { episodeFind } from '@/store/slices/episodeSlice/reducers';
import { Episode } from '@/store/slices/episodeSlice/types';

export const EpisodeTable = () => {
  const dispatch = useAppDispatch();
  const { data, options } = useAppSelector((state) => state.episode);

  const debounceFind = useCallback(
    debounce(() => {
      dispatch(episodeFind());
    }, 500),
    [],
  );

  useEffect(() => {
    debounceFind();
  }, [debounceFind, options]);

  const columns = useMemo<TableRowType<Episode>[]>(() => {
    return [
      {
        accessorKey: 'name',
        header: 'Name',
        filter: <InputColumnFilter value={options.name} setOptions={setOptions} prop="name" />,
      },
      {
        accessorKey: 'episode',
        header: 'Episode',
        filter: <InputColumnFilter value={options.episode} setOptions={setOptions} prop="episode" />,
      },
      {
        accessorKey: 'air_date',
        header: 'Air date',
      },
    ];
  }, [options]);

  return <Table<Episode> columns={columns} data={data} />;
};
