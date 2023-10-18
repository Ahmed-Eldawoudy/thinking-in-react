import FilterableProductTable from "./components/FilterableProductTable";
import PRODUCTS from "./api/result.json";

function App() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

export default App;
