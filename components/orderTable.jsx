import React from "react";

const OrderTable = ({ sortOrder, setSortOrder }) => {
  return (
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="border border-gray-300 rounded-md px-4 py-2"
    >
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
};

export default OrderTable;
