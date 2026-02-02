import React from 'react'
const FilterTypes = React.memo(function FilterTypes({ types, selected, onChange }) {
  console.log("FilterTypes rendered");

  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      {types.map((t) => (
        <option key={t.id} value={t.name}>{t.name}</option>
      ))}
    </select>
  );
});
export default FilterTypes