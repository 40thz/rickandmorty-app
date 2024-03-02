import { memo, useCallback } from 'react';
import { SelectedElement, Selector, SelectorProps } from '@/components/ui/Selector';
import { FilterProps } from './types';
import { useAppDispatch } from '@/store/hooks';

type SelectorFilterProps = SelectorProps & FilterProps;

export const SelectorColumnFilter = memo(({ value, setOptions, prop, data, ...props }: SelectorFilterProps) => {
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (elem: SelectedElement) => {
      dispatch(setOptions({ [prop]: elem.name }));
    },
    [dispatch, prop, setOptions],
  );

  return <Selector value={value} data={data} onChange={handleChange} {...props} />;
});
