import { useMemo } from 'react';
import { InputColumnFilter, Table, TableRowType } from '@@/components/shared/Table';
import { useAppSelector } from '@@/store/hooks';
import { setOptions } from '@@/store/slices/episodeSlice';
import { Episode } from '@@/store/slices/episodeSlice/types';

import { EpisodeModal } from './Modal/EpisodeModal';

export const EpisodeTable = () => {
  const { data, options, status } = useAppSelector((state) => state.episode);

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

  return <Table<Episode> columns={columns} data={data} status={status} />;
};
