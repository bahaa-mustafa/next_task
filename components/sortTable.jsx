import React from 'react'

const SortTable = ({sortBy, sortOrder, onSortChange}) => {
  return (
    <select value={sortBy} onChange={(e) => onSortChange(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2">
      <option value="name">Name</option>
      <option value="type">Type</option>
      <option value="price">Price</option>
      <option value="change">Change</option>
      <option value="volume">Volume</option>
    </select>
  )
}

export default SortTable