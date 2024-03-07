import { memo } from 'react';
import { useAppSelector } from '@@/store/hooks';
import { Character } from '@@/store/slices/characterSlice/types';
import { GridLayout } from '@@/components/shared/layouts/GridLayout';
import { Loader, Cart, ErrorMessage } from '@@/components/shared/ui';
import { CharacterModal } from '../Modal/CharacterModal';
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
      {isLoading && !error && <Loader className="flex justify-center col-span-4" />}
      {isLoading && error && (
        <ErrorMessage subTitle="It looks like nothing was found matching these parameters." className="col-span-4" />
      )}

      {!isLoading && !error && data && renderContent()}
    </GridLayout>
  );
});
