import React, { FC } from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, icon, className, ...props }) => {
  return (
    <button className={classNames('text-white/55 rounded-[6px] block w py-1 px-2 bg-gray', className)} {...props}>
      {icon && icon} {children}
    </button>
  );
};
