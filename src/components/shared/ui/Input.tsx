import { memo } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = memo(({ label, ...props }: InputProps) => (
  <label>
    {label && <div className="text-white/55 mb-2 uppercase font-bold">{label}</div>}
    <input
      type="text"
      id="default-input"
      className="text-white/55 rounded-[6px] block w py-1 px-2 bg-gray w-full"
      {...props}
    />
  </label>
));
