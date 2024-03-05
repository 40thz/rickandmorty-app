import { useMemo } from 'react';
import { CharacterModal } from '@@/components/Character';
import { InputColumnFilter, SelectorColumnFilter, Table, TableRowType } from '@@/components/shared/Table';
import { genderOptionData, statusOptionData } from '@@/constants/character';
import { useAppSelector } from '@@/store/hooks';
import { setOptions } from '@@/store/slices/characterSlice';
import { Character } from '@@/store/slices/characterSlice/types';

export const CharacterTable = () => {
  const { data, options, status } = useAppSelector((state) => state.character);

  const columns = useMemo<TableRowType<Character>[]>(() => {
    return [
      {
        accessorKey: 'image',
        header: 'Image',
        cell: (info) => <img src={info.getValue()} className="w-20 rounded-2xl" />,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        cell: (info) => <CharacterModal info={info.origin} />,
        filter: <InputColumnFilter value={options.name} setOptions={setOptions} prop="name" />,
      },
      {
        accessorKey: 'gender',
        header: 'Gender',
        filter: (
          <SelectorColumnFilter
            value={options.gender}
            setOptions={setOptions}
            data={genderOptionData}
            prop="gender"
            placeholder="Gender not selected"
          />
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        filter: (
          <SelectorColumnFilter
            value={options.status}
            setOptions={setOptions}
            data={statusOptionData}
            prop="status"
            placeholder="Status not selected"
          />
        ),
      },
      {
        accessorKey: 'species',
        header: 'Species',
        filter: <InputColumnFilter value={options.species} setOptions={setOptions} prop="species" />,
      },
      {
        accessorKey: 'type',
        header: 'Type',
        filter: <InputColumnFilter value={options.type} setOptions={setOptions} prop="type" />,
      },
      {
        accessorKey: 'location.name',
        header: 'Location',
      },
    ];
  }, [options]);

  return <Table<Character> columns={columns} data={data} status={status} />;
};
