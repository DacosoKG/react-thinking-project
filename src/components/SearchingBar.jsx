import { useEffect, useState } from "react";
import products from "../assets/data";

export default function SearchingBar({ setSearchData }) {
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filterProducts = () => {
    const filteredData = products.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchText);
      const matchesStock = !inStockOnly || item.stocked;
      return matchesSearch && matchesStock;
    });
    setSearchData(filteredData);
  };

  useEffect(() => {
    filterProducts();
  }, [inStockOnly, searchText]);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setSearchText(value);
  };

  const handleStockChange = (e) => {
    const checked = e.target.checked;
    setInStockOnly(checked);
  };

  return (
    <>
      <form>
        <input
          onChange={handleSearchChange}
          type="text"
          placeholder="Search..."
        />
        <label>
          <input type="checkbox" onChange={handleStockChange} /> Only show
          products in stock
        </label>
      </form>
    </>
  );
}
