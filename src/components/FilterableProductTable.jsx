import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setOnStockOnly] = useState(false);
  return (
    <>
      <div className="flex min-h-screen min-w-full items-center justify-center">
        <div className="w-80 space-y-4 rounded-lg bg-slate-400 p-8">
          <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setOnStockOnly}
          />
          <ProductTable
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
          />
        </div>
      </div>
    </>
  );
}

export default FilterableProductTable;
