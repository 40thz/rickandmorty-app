import { memo } from 'react';

export const ModeLayout = memo((props: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="flex gap-3 bg-dark/85 rounded-lg w-fit p-2" {...props}>
    {props.children}
  </div>
));
