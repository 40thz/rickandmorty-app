import { memo } from 'react';
import { GridLayout } from '@@/components/shared/layouts/GridLayout';
import { Cart } from '@@/components/shared/ui/Cart';
import { useAppSelector } from '@@/store/hooks';
import { Episode } from '@@/store/slices/episodeSlice/types';
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
      {isLoading && !error && 'Loading'}
      {isLoading && error && 'error messeage'}
      {!isLoading && !error && data && renderContent()}
    </GridLayout>
  );
});
