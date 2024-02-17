import { Suspense } from "react";
import SearchResults from "./search/search-results";
import { PageContainer } from "./components/layout";

export default function Home({
  searchParams: { query },
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const parsedQuery = Array.isArray(query) ? query[0] : query;
  return (
    <main>
      <PageContainer>
        <h1 className="text-3xl font-bold">Search tv shows</h1>
        <Suspense fallback="loading...">
          <SearchResults query={parsedQuery} />
        </Suspense>
      </PageContainer>
    </main>
  );
}
