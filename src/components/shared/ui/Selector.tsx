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
          <Listbox.Button className="text-white/55 rounded-[6px] block w py-1 px-2 bg-gray min-w-[140px]">
            {value ? value : placeholder}
          </Listbox.Button>
          <Listbox.Options className="absolute top-7 left-0 w-full z-[1] bg-gray rounded-[6px]">
            {data.map((item) => {
              return (
                <Listbox.Option key={item.id} value={item} as={Fragment}>
                  {({ active, selected }) => (
                    <li className={`text-white/55 px-2 py-1 cursor-pointer ${selected && 'bg-dark/55'}`}>
                      {active && '> '}
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
