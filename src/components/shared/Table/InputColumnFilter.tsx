import { FC, memo, useCallback } from 'react';
import { Input, InputProps } from '@@/components/shared/ui/Input';
import { useAppDispatch } from '@@/store/hooks';
import { FilterProps } from './types';

type InputFilterProps = FilterProps & InputProps;

export const InputColumnFilter: FC<InputFilterProps> = memo(({ setOptions, prop, value, ...props }) => {
  const dispatch = useAppDispatch();

  // Обновляет свойство фильтра
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setOptions({ [prop]: e.target.value }));
    },
    [dispatch, setOptions, prop],
  );

  return <Input value={value} onChange={handleChange} {...props} />;
});
