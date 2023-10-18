/* eslint-disable react/prop-types */
export default function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <>
      <tr className="font-semibold">
        <td className=" pr-10">{name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}
