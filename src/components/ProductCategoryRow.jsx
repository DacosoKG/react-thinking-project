export default function ProductCategoryRow(props) {
  const { name } = props;
  return <th colSpan={3}>{name}</th>;
}
