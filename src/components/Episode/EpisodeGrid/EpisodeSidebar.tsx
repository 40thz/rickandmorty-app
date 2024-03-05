import { InputColumnFilter } from '@@/components/shared/Table';
import { useAppSelector } from '@@/store/hooks';
import { setOptions } from '@@/store/slices/characterSlice';

export const EpisodeSidebar = () => {
  const { name, episode } = useAppSelector((state) => state.episode.options);

  return (
    <form className="flex flex-col gap-3 w-[80%]">
      <InputColumnFilter value={name} setOptions={setOptions} prop="name" label="Name" />
      <InputColumnFilter value={episode} setOptions={setOptions} prop="episode" label="Episode" />
    </form>
  );
};
