import Button from "../components/button";
import { Section } from "../components/page-layout";
import TextInput from "../components/text-input";

export default function SearchForm({ query }: { query: Maybe<string> }) {
  return (
    <form method="GET" action="/">
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <TextInput
            name="query"
            label="Search for a tv show"
            defaultValue={query ?? ""}
          />
        </div>
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
