import { CharacterTable } from '@/components/Character';
import { Menu } from '@/components/shared/Menu';

export const Character = () => (
  <div className="flex flex-col gap-3">
    <Menu showLabel={false} />
    <CharacterTable />
  </div>
);
