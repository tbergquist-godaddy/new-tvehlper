import { Suspense } from 'react';

import SearchResults from './search/search-results';
import { PageContainer } from './components/page-layout';
import SearchForm from './search/search-form';
import SearchContentLoader from './search/search-content-loader';

export default function Home({
  searchParams: { query },
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const parsedQuery = Array.isArray(query) ? query[0] : query;
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold">Search tv shows</h1>
      <SearchForm query={parsedQuery} />
      <Suspense fallback={<SearchContentLoader />}>
        <SearchResults query={parsedQuery} />
      </Suspense>
    </PageContainer>
  );
}
