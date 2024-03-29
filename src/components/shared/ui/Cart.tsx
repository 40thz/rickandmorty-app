import { FC } from 'react';
import notFound from '../../../assets/notfound.png';

type CartProps = {
  iamge?: string;
  title: string;
};

export const Cart: FC<CartProps> = ({ iamge, title }) => (
  <div className="flex flex-col rounded-xl overflow-hidden bg-dark cursor-pointer">
    <div>
      <img className="w-full" src={iamge ? iamge : notFound} alt={title} />
    </div>
    <div className="py-2 px-3">
      <span className="text-white/55">{title}</span>
    </div>
  </div>
);
