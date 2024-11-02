import SearchingBar from "./SearchingBar";
import ProductTable from "./ProductTable";
import products from "../assets/data";
import { useState } from "react";

export default function FilterableProductTable() {
  const [searchData, setSearchData] = useState(products);

  return (
    <div className="App">
      <div>
        <SearchingBar setSearchData={setSearchData} />
        <ProductTable searchData={searchData} />
      </div>
    </div>
  );
}
