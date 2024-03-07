import { FC, memo, useCallback } from 'react';
import { useAppDispatch } from '@@/store/hooks';
import { SelectedElement, Selector, SelectorProps } from '@@/components/shared/ui';
import { FilterProps } from './types';

type SelectorFilterProps = SelectorProps & FilterProps;

export const SelectorColumnFilter: FC<SelectorFilterProps> = memo(({ value, setOptions, prop, data, ...props }) => {
  const dispatch = useAppDispatch();

  // Обновляет свойство фильтра
  const handleChange = useCallback(
    (elem: SelectedElement) => {
      dispatch(setOptions({ [prop]: elem.name }));
    },
    [dispatch, prop, setOptions],
  );

  return <Selector value={value} data={data} onChange={handleChange} {...props} />;
});
