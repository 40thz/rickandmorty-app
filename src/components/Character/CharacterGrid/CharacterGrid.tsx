import { memo } from 'react';
import { GridLayout } from '@@/components/shared/layouts/GridLayout';
import { Cart } from '@@/components/shared/ui/Cart';
import { useAppSelector } from '@@/store/hooks';
import { Character } from '@@/store/slices/characterSlice/types';
import { CharacterModal } from '../';
import { CharacterSidebar } from './CharacterSidebar';

export const CharacterGrid = memo(() => {
  const data = useAppSelector((state) => state.character.data);
  const { isLoading, error } = useAppSelector((state) => state.character.status);

  const renderContent = () =>
    (data as Character[]).map((cart) => (
      <CharacterModal key={cart.id} info={cart}>
        <Cart iamge={cart.image} title={cart.name} />
      </CharacterModal>
    ));

  return (
    <GridLayout sidebar={<CharacterSidebar />}>
      {isLoading && !error && 'Loading'}
      {isLoading && error && 'error messeage'}
      {!isLoading && !error && data && renderContent()}
    </GridLayout>
  );
});
