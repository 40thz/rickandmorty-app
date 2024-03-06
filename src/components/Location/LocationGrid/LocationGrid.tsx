import { memo } from 'react';
import { useAppSelector } from '@@/store/hooks';
import { Location } from '@@/store/slices/locationSlice/types';
import { GridLayout } from '@@/components/shared/layouts/GridLayout';
import { Cart } from '@@/components/shared/ui/Cart';
import { ErrorMessage } from '@@/components/shared/ui/ErrorMessage';
import { Loader } from '@@/components/shared/ui/Loader';
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
      {isLoading && !error && <Loader className="flex justify-center col-span-4" />}
      {isLoading && error && (
        <ErrorMessage subTitle="It looks like nothing was found matching these parameters." className="col-span-4" />
      )}
      {!isLoading && !error && data && renderContent()}
    </GridLayout>
  );
});
