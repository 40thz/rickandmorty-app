import { PropsWithChildren, useState } from 'react';
import { Modal } from '../ui/Modal';
import { Character } from '@/store/slices/characterSlice/types';

type CharacterMoreProps = {
  data: Character;
} & PropsWithChildren;

export const CharacterMore = ({ children }: CharacterMoreProps) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div onClick={() => setActive(true)}>{children}</div>
      <Modal open={active} onClose={() => setActive(false)} />
    </>
  );
};
