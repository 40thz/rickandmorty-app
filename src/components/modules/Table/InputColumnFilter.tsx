import { memo, useCallback } from 'react';
import { Input, InputProps } from '@/components/ui/Input';
import { FilterProps } from './types';
import { useAppDispatch } from '@/store/hooks';

type InputFilterProps = FilterProps & InputProps;

export const InputColumnFilter = memo(({ setOptions, prop, value, ...props }: InputFilterProps) => {
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setOptions({ [prop]: e.target.value }));
    },
    [dispatch, setOptions, prop],
  );

  return <Input value={value} onChange={handleChange} {...props} />;
});
