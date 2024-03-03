import React from 'react';

export const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="text-white/55 rounded-[6px] block w py-1 px-2 bg-gray" {...props}>
      {children}
    </button>
  );
};
