import { LocationTable } from '@/components/Location';
import { Menu } from '@/components/shared/Menu';

export const Location = () => (
  <div className="flex flex-col gap-3 max-w-[50%] w-full">
    <Menu showLabel={false} />
    <LocationTable />
  </div>
);
