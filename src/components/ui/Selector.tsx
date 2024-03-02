import { Fragment, memo, useState } from 'react';
import { Listbox } from '@headlessui/react';

export type SelectedElement = { id: number; name: string };

export type SelectorProps = {
  label?: string;
  placeholder?: string;
  data: SelectedElement[];
  value: string | null;
  onChange?: (value: SelectedElement) => void;
};

export const Selector = memo(({ label, placeholder, data, value, onChange }: SelectorProps) => {
  const [active, setActive] = useState(data.find((item) => item.name === value));

  const handleChange = (elem: SelectedElement) => {
    const emptyObj = { id: 1000, name: '' };

    if (!onChange) {
      return;
    }

    if (active === elem) {
      setActive(emptyObj);
      onChange(emptyObj);
      return;
    }

    onChange(elem);
    setActive(elem);
  };

  return (
    <>
      <label>{label && label}</label>
      <Listbox value={active} onChange={handleChange}>
        <div className="relative">
          <Listbox.Button className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block min-w-[200px] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {value ? value : placeholder}
          </Listbox.Button>
          <Listbox.Options className="absolute top-9 left-0 min-w-[200px] z-[1] dark:bg-gray-700 dark:border-gray-600 rounded-lg">
            {data.map((item) => {
              return (
                <Listbox.Option key={item.id} value={item} as={Fragment}>
                  {({ active, selected }) => (
                    <li className={`text-white px-2 py-1 ${selected && 'bg-red-800'}`}>
                      {active && '>'}
                      {item.name}
                    </li>
                  )}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </div>
      </Listbox>
    </>
  );
});
