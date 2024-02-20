import { Suspense } from 'react';

import { PageContainer } from '../components/page-layout';
import FavoritesList from './components/favorites-list';

export default function Favorites() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold">Favorites</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <FavoritesList />
      </Suspense>
    </PageContainer>
  );
}
