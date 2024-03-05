import React, { FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, icon, ...props }) => {
  return (
    <button className="text-white/55 rounded-[6px] block w py-1 px-2 bg-gray" {...props}>
      {icon && icon} {children}
    </button>
  );
};
