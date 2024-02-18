import { Suspense } from 'react';

import TvShow from './tv-show';
import TvShowContentLoader from './tv-show-content-loader';

import { PageContainer } from '@/app/components/page-layout';

export default function TvShowPage({ params: { id } }: { params: { id: string } }) {
  return (
    <PageContainer>
      <Suspense fallback={<TvShowContentLoader />}>
        <TvShow id={id} />
      </Suspense>
    </PageContainer>
  );
}
