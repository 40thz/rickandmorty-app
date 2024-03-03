import { useCallback, useEffect, useMemo } from 'react';
import { InputColumnFilter, Table, TableRowType } from '@/components/shared/Table';
import { debounce } from '@/utils/debounce';
import { EpisodeModal } from './Modal/EpisodeModal';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { episodeFind, setOptions } from '@/store/slices/episodeSlice';
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
        cell: (info) => <EpisodeModal info={info.origin} />,
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
