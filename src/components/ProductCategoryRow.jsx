/* eslint-disable react/prop-types */
export default function ProductCategoryRow({ category }) {
  return (
    <>
      <tr className=" text-left text-lg italic text-slate-950">
        <th>{category}</th>
      </tr>
    </>
  );
}
