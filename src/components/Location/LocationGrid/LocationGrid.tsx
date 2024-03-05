import { memo } from 'react';
import { GridLayout } from '@@/components/shared/layouts/GridLayout';
import { Cart } from '@@/components/shared/ui/Cart';
import { useAppSelector } from '@@/store/hooks';
import { Location } from '@@/store/slices/locationSlice/types';
import { LocationModal } from '../Modal/LocationModal';
import { LocationSidebar } from './LocationSidebar';

export const LocationGrid = memo(() => {
  const data = useAppSelector((state) => state.location.data);
  const { isLoading, error } = useAppSelector((state) => state.location.status);

  const renderContent = () =>
    (data as Location[]).map((cart) => (
      <LocationModal key={cart.id} info={cart}>
        <Cart title={cart.name} />
      </LocationModal>
    ));

  return (
    <GridLayout sidebar={<LocationSidebar />}>
      {isLoading && !error && 'Loading'}
      {isLoading && error && 'error messeage'}
      {!isLoading && !error && data && renderContent()}
    </GridLayout>
  );
});
