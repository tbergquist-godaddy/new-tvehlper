export default function SearchForm() {
  return (
    <form>
      <input
        type="text"
        placeholder="Search for a tv show"
        className="border"
      />
      <button className="bg-blue-600 text-white">Search</button>
    </form>
  );
}
