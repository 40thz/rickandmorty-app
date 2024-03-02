import { memo } from 'react';
import { getNested } from '@utils/getNested';
import { Leaves } from '@/types';

type CellInfo<T> = {
  origin: T;
  getValue: () => string;
};

export type TableRowType<T> = {
  header: string;
  cell?: (value: CellInfo<T>) => React.ReactNode;
  accessorKey: Leaves<T>;
  filter?: React.ReactNode;
};

type TableProps<T> = {
  columns: TableRowType<T>[];
  data: T[] | null;
};

export const TableComponent = <T,>({ columns, data }: TableProps<T>) => (
  <div className="relative overflow-x-auto h-[400px] dark:bg-gray-800">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {columns.map((colum) => (
            <th key={colum.accessorKey} scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-700 align-top">
              <div className="flex flex-col gap-2">
                <div>{colum.header}</div>
                {colum.filter && <div>{colum.filter}</div>}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="relative overflow-x-auto max-h-[300px]">
        {data &&
          data.map((item, i) => (
            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {columns.map((column) => {
                const info = {
                  origin: item,
                  getValue: () => getNested(item, column.accessorKey),
                };
                const child = column.cell && column.cell(info);

                return (
                  <td key={column.accessorKey + i} className="px-6 py-4 max-w-[200px]">
                    {child ? child : info.getValue()}
                  </td>
                );
              })}
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);

export const Table = memo(TableComponent) as typeof TableComponent;
