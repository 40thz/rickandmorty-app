import { useCallback, useEffect, useMemo } from 'react';
import { InputColumnFilter, Table, TableRowType } from '@@/components/shared/Table';
import { useAppDispatch, useAppSelector } from '@@/store/hooks';
import { locationFind, setOptions } from '@@/store/slices/locationSlice';
import { Location } from '@@/store/slices/locationSlice/types';
import { debounce } from '@@/utils/debounce';
import { LocationModal } from './Modal/LocationModal';

export const LocationTable = () => {
  const dispatch = useAppDispatch();
  const { data, options } = useAppSelector((state) => state.location);

  const debounceFind = useCallback(
    debounce(() => {
      dispatch(locationFind());
    }, 500),
    [],
  );

  useEffect(() => {
    debounceFind();
  }, [debounceFind, options]);

  const columns = useMemo<TableRowType<Location>[]>(() => {
    return [
      {
        accessorKey: 'name',
        header: 'Name',
        cell: (info) => <LocationModal info={info.origin} />,
        filter: <InputColumnFilter value={options.name} setOptions={setOptions} prop="name" />,
      },
      {
        accessorKey: 'type',
        header: 'Type',
        filter: <InputColumnFilter value={options.type} setOptions={setOptions} prop="type" />,
      },
      {
        accessorKey: 'dimension',
        header: 'Dimension',
        filter: <InputColumnFilter value={options.dimension} setOptions={setOptions} prop="dimension" />,
      },
    ];
  }, [options]);

  return <Table<Location> columns={columns} data={data} />;
};
