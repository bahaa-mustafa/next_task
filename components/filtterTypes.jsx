

function FilterTypes({assetsType, selectedAssetType, setSelectedAssetType}) {
  return (
    <select name="" id="" className="border border-gray-300 rounded-md px-4 py-2" value={selectedAssetType} onChange={(e) => setSelectedAssetType(e.target.value)}>
      {assetsType.map((assetType) => (
        <option key={assetType.id} value={assetType.type}>{assetType.type}</option> 
      ))}
    </select>
  )
}

export default FilterTypes