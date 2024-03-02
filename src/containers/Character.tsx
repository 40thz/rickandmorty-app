import { useEffect, useMemo } from 'react';
import { CharacterMore } from '@/components/Character/CharacterMore';
import { InputColumnFilter, SelectorColumnFilter, Table, TableRowType } from '@/components/modules/Table';
import { genderOptionData, statusOptionData } from '@/constants/CharactersConstants/characterOptionsData';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setOptions } from '@/store/slices/characterSlice';
import { characterFind } from '@/store/slices/characterSlice/reducers';
import { Character as CharacterType } from '@/store/slices/characterSlice/types';

export const Character = () => {
  const dispatch = useAppDispatch();
  const { data, options } = useAppSelector((state) => state.character);

  useEffect(() => {
    dispatch(characterFind());
  }, [dispatch, options]);

  const columns: TableRowType<CharacterType>[] = useMemo(() => {
    return [
      {
        accessorKey: 'image',
        header: 'Изображение',
        cell: (info) => <img src={info.getValue()} className="w-20" />,
      },
      {
        accessorKey: 'name',
        header: 'Имя',
        cell: (info) => <CharacterMore data={info.origin}>{info.getValue()}</CharacterMore>,
        filter: <InputColumnFilter value={options.name} setOptions={setOptions} prop="name" />,
      },
      {
        accessorKey: 'gender',
        header: 'Пол',
        filter: (
          <SelectorColumnFilter
            value={options.gender}
            setOptions={setOptions}
            prop="gender"
            data={genderOptionData}
            placeholder="Пол не выбран"
          />
        ),
      },
      {
        accessorKey: 'status',
        header: 'Статус',
        filter: (
          <SelectorColumnFilter
            value={options.status}
            setOptions={setOptions}
            prop="status"
            data={statusOptionData}
            placeholder="Статус не выбран"
          />
        ),
      },
      {
        accessorKey: 'species',
        header: 'Разновидность',
        filter: <InputColumnFilter value={options.species} setOptions={setOptions} prop="species" />,
      },
      {
        accessorKey: 'type',
        header: 'Тип',
        filter: <InputColumnFilter value={options.type} setOptions={setOptions} prop="type" />,
      },
      {
        accessorKey: 'location.name',
        header: 'Локации',
        cell: (info) => info.origin.location.url && <CharacterMore data={info.origin}>{info.getValue()}</CharacterMore>,
      },
    ];
  }, [options]);

  return <Table<CharacterType> columns={columns} data={data} />;
};
