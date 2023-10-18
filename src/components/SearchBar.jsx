/* eslint-disable react/prop-types */
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form action="" className="w-full space-y-2">
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="w-full rounded-md p-2 text-lg font-semibold"
      />
      <fieldset className="space-x-2 text-base font-semibold">
        <input
          type="checkbox"
          checked={inStockOnly}
          name="in-stock"
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          id="in-stock"
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="in-stock">Only show products in stock</label>
      </fieldset>
    </form>
  );
}

export default SearchBar;
