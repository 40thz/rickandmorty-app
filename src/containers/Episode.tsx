import { EpisodeTable } from '@/components/Episode';
import { Menu } from '@/components/shared/Menu';

export const Episode = () => (
  <div className="flex flex-col gap-3 max-w-[50%] w-full">
    <Menu showLabel={false} />
    <EpisodeTable />
  </div>
);
