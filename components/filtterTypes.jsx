import React from 'react'
const FilterTypes = React.memo(function FilterTypes({ types, selected, onChange }) {
  // console.log("FilterTypes rendered");
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2">
      {types.map((t) => (
        <option key={t.id} value={t.name}>{t.name}</option>
      ))}
    </select>
  );
});
export default FilterTypes