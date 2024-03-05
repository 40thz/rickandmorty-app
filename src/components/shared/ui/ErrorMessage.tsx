import { FC } from 'react';
import classNames from 'classnames';

interface ErrorMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subTitle?: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ title, subTitle, className, ...props }) => {
  return (
    <div
      className={classNames(
        'bg-red/5 border border-red px-4 py-3 rounded relative w-fit h-fit flex flex-col',
        className,
      )}
      role="alert"
      {...props}
    >
      {title && <strong className="text-white font-bold ">{title}</strong>}
      {subTitle && <span className="text-white block sm:inline">{subTitle}</span>}
    </div>
  );
};
