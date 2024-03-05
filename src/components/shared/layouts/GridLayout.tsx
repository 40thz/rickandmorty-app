import { FC, PropsWithChildren } from 'react';

interface GridLayoutProps extends PropsWithChildren {
  sidebar: React.ReactNode;
}

export const GridLayout: FC<GridLayoutProps> = ({ sidebar, children }) => (
  <div className="grid grid-cols-[0.3fr_1fr] rounded-xl overflow-hidden h-full">
    <div className="bg-dark px-4 py-8">{sidebar}</div>

    <div className="grid grid-cols-4 h-full overflow-scroll gap-6 p-12 bg-dark/95">{children}</div>
  </div>
);
