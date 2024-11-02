import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable(props) {
  const { searchData } = props;

  let showProducts = (products) => {
    let lastCategory = null;

    return products.map((item) => {
      if (lastCategory === item.category) {
        return <ProductRow item={item} />;
      } else {
        lastCategory = item.category;
        return (
          <>
            <tr style={{ backgroundColor: "lightgrey" }}>
              <ProductCategoryRow name={item.category} />
            </tr>
            <ProductRow item={item} />
          </>
        );
      }
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stocked</th>
        </tr>
      </thead>
      <tbody>{showProducts(searchData)}</tbody>
    </table>
  );
}
