import { InputColumnFilter } from '@@/components/shared/Table';
import { useAppSelector } from '@@/store/hooks';
import { setOptions } from '@@/store/slices/locationSlice';

export const LocationSidebar = () => {
  const { name, type, dimension } = useAppSelector((state) => state.location.options);

  return (
    <form className="flex flex-col gap-3 w-[80%]">
      <InputColumnFilter value={name} setOptions={setOptions} prop="name" label="Name" />
      <InputColumnFilter value={type} setOptions={setOptions} prop="type" label="Type" />
      <InputColumnFilter value={dimension} setOptions={setOptions} prop="dimension" label="Dimension" />
    </form>
  );
};
