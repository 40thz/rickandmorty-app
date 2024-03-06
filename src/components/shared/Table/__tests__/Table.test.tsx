import { CHARACTER_GENDER, CHARACTER_STATUS, Character } from '@@/store/slices/characterSlice/types';
import { render, screen } from '@testing-library/react';
import { Table, TableRowType } from '../';

describe('Table component', () => {
  const MOCK_COLUMNS: TableRowType<Character>[] = [
    {
      accessorKey: 'image',
      header: 'ImageHeader',
    },
    {
      accessorKey: 'name',
      header: 'NameHeader',
      cell: (info) => <h4 data-testid="reassigned_cell">reassigned_cell - {info.getValue()}</h4>,
    },
  ];

  const MOCK_DATA: Character[] = [
    {
      id: 3,
      name: 'Summer Smith',
      status: CHARACTER_STATUS.ALIVE,
      species: 'Human',
      type: '',
      gender: CHARACTER_GENDER.FEMALE,
      origin: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/6'],
      url: 'https://rickandmortyapi.com/api/character/3',
      created: '2017-11-04T19:09:56.428Z',
    },
    {
      id: 4,
      name: 'Beth Smith',
      status: CHARACTER_STATUS.ALIVE,
      species: 'Human',
      type: '',
      gender: CHARACTER_GENDER.FEMALE,
      origin: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/6'],
      url: 'https://rickandmortyapi.com/api/character/4',
      created: '2017-11-04T19:22:43.665Z',
    },
  ];

  const MOCK_STATUS = {
    isLoading: false,
    error: null,
  };

  it('Table render', () => {
    render(<Table columns={MOCK_COLUMNS} data={MOCK_DATA} status={MOCK_STATUS} />);

    expect(screen.getByRole('table')).not.toEqual(null);
  });

  it('Should render columns', () => {
    render(<Table columns={MOCK_COLUMNS} data={MOCK_DATA} status={MOCK_STATUS} />);

    expect(screen.getAllByTestId(/col/i)).not.toEqual(null);
  });

  it('Should render row', () => {
    render(<Table columns={[] as TableRowType<Character>[]} data={MOCK_DATA} status={MOCK_STATUS} />);

    expect(screen.getAllByTestId(/row/i)).not.toEqual(null);
  });

  it('Should render cell', () => {
    render(<Table columns={MOCK_COLUMNS} data={MOCK_DATA} status={MOCK_STATUS} />);

    expect(screen.getAllByTestId(/cell/i)).not.toEqual(null);
  });

  it('Should cell must be reassigned', () => {
    render(<Table columns={MOCK_COLUMNS} data={MOCK_DATA} status={MOCK_STATUS} />);

    expect(screen.getAllByTestId(/reassigned_cell/i)).not.toEqual(null);
  });

  it('Should show loading status', () => {
    render(
      <Table
        columns={MOCK_COLUMNS}
        data={MOCK_DATA}
        status={{
          isLoading: true,
          error: null,
        }}
      />,
    );

    expect(screen.getByText('Loading...')).not.toEqual(null);
  });

  it('Should show error message', () => {
    render(
      <Table
        columns={MOCK_COLUMNS}
        data={MOCK_DATA}
        status={{
          isLoading: true,
          error: 'Bad request 400',
        }}
      />,
    );

    expect(screen.getByText('It looks like nothing was found matching these parameters.')).not.toEqual(null);
  });
});
