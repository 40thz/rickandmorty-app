import { FC, PropsWithChildren } from 'react';
import { Menu } from '../Menu';

export const ContainerLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col gap-3 max-w-[70%] w-full">
    <Menu showLabel={false} />
    {children}
  </div>
);
