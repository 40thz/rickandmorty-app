import { memo } from 'react';
import { getNested } from '@@/utils/getNested';
import { ErrorMessage } from '../ui/ErrorMessage';
import { Loader } from '../ui/Loader';
import { TableProps } from './types';

export const TableComponent = <T,>({ columns, data, status: { isLoading, error } }: TableProps<T>) => {
  // Генерирует строки
  const renderRows = () => {
    if (!data) {
      return;
    }

    return data.map((item, i) => (
      <tr data-testid="row" key={i} className="border-b-[1px] border-gray text-white/55">
        {/* Генерирует ячекйки  */}

        {columns.map((column) => {
          const info = {
            origin: item,
            getValue: () => getNested(item, column.accessorKey),
          };

          const child = column.cell && column.cell(info);

          return (
            <td data-testid="cell" key={column.accessorKey + i} className="px-6 py-[13px]">
              {child ? child : info.getValue()}
            </td>
          );
        })}
      </tr>
    ));
  };

  return (
    <div className="rounded-2xl overflow-hidden">
      <div className="relative overflow-x-auto h-[400px] bg-dark/95">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <thead className="text-xs uppercase text-white/55">
            <tr>
              {columns.map((colum) => (
                <th data-testid="col" key={colum.accessorKey} scope="col" className="px-6 py-3 pt-5 bg-dark align-top">
                  <div className="flex flex-col gap-2">
                    <div>{colum.header}</div>
                    {colum.filter && <div className="max-w-[150px]">{colum.filter}</div>}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="relative overflow-x-auto max-h-[300px]">
            {isLoading && !error && <Loader className="flex justify-center" />}
            {isLoading && error && (
              <ErrorMessage subTitle="It looks like nothing was found matching these parameters." />
            )}
            {!isLoading && !error && renderRows()}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end bg-dark px-9 py-4" />
    </div>
  );
};

export const Table = memo(TableComponent) as typeof TableComponent;
