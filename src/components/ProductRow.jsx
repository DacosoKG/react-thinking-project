export default function ProductRow(props) {
  const { name, price, stocked } = props.item;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td style={{ backgroundColor: stocked ? "lightgreen" : "red" }}>
        {stocked ? "Yes" : "No"}
      </td>
    </tr>
  );
}
