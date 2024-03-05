import { FC, PropsWithChildren } from 'react';
import { Menu } from '../Menu';

export const ContainerLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col gap-3 w-full h-full">
    <Menu showLabel={false} />
    {children}
  </div>
);
