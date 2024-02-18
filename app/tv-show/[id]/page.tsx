import { PageContainer } from '@/app/components/page-layout';
import TvShow from './tv-show';
import { Suspense } from 'react';
import TvShowContentLoader from './tv-show-content-loader';

export default function TvShowPage({ params: { id } }: { params: { id: string } }) {
  return (
    <PageContainer>
      <Suspense fallback={<TvShowContentLoader />}>
        <TvShow id={id} />
      </Suspense>
    </PageContainer>
  );
}
