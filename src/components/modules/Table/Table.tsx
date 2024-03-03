import { memo } from 'react';
import { getNested } from '@utils/getNested';
import { Leaves } from '@/types';

export type CellInfo<T> = {
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
  <div className="rounded-3xl overflow-hidden">
    <div className="relative overflow-x-auto h-[400px] bg-dark/95">
      <table className="w-full text-sm text-left rtl:text-right text-white">
        <thead className="text-xs uppercase text-white/55">
          <tr>
            {columns.map((colum) => (
              <th key={colum.accessorKey} scope="col" className="px-6 py-3 pt-5 bg-dark align-top">
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
              <tr key={i} className="border-b-[1px] border-gray text-white/55">
                {columns.map((column) => {
                  const info = {
                    origin: item,
                    getValue: () => getNested(item, column.accessorKey),
                  };
                  const child = column.cell && column.cell(info);

                  return (
                    <td key={column.accessorKey + i} className="px-6 py-[13px] max-w-[200px]">
                      {child ? child : info.getValue()}
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const Table = memo(TableComponent) as typeof TableComponent;
