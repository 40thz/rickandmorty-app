import { memo } from 'react';
import { useAppSelector } from '@@/store/hooks';
import { Episode } from '@@/store/slices/episodeSlice/types';
import { GridLayout } from '@@/components/shared/layouts/GridLayout';
import { Loader, Cart, ErrorMessage } from '@@/components/shared/ui';
import { EpisodeModal } from '../Modal/EpisodeModal';
import { EpisodeSidebar } from './EpisodeSidebar';

export const EpisodeGrid = memo(() => {
  const data = useAppSelector((state) => state.episode.data);
  const { isLoading, error } = useAppSelector((state) => state.episode.status);

  const renderContent = () =>
    (data as Episode[]).map((cart) => (
      <EpisodeModal key={cart.id} info={cart}>
        <Cart title={cart.name} />
      </EpisodeModal>
    ));

  return (
    <GridLayout sidebar={<EpisodeSidebar />}>
      {isLoading && !error && <Loader className="flex justify-center col-span-4" />}
      {isLoading && error && (
        <ErrorMessage subTitle="It looks like nothing was found matching these parameters." className="col-span-4" />
      )}
      {!isLoading && !error && data && renderContent()}
    </GridLayout>
  );
});
