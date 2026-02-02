import React from 'react'

const SearchInput = React.memo(function  SearchInput({value, onChange}) {
  // console.log("SearchInput rendered");
  // console.log(value);
  // console.log(onChange);
  return (
    <input type="text" placeholder="Search name...." className="border border-gray-300 rounded-md px-4 py-2" value={value} onChange={(e) => onChange(e.target.value)}/>
  )
})

export default SearchInput