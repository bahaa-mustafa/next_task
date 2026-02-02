import React from "react";

const AssetsTable = React.memo(function AssetsTable({mockAssets}) {
  
 if (mockAssets.length === 0) {
    return (
      <p className="text-gray-500 text-center">
        No assets found
      </p>
    );
  }

  return (

      <table className="w-full hidden sm:table">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Change</th>
            <th className="border border-gray-300 px-4 py-2">Volume</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {mockAssets.map((asset) => (
            <tr key={asset.id}>
              <td className="border border-gray-300 px-4 py-2">{asset.name}</td>
              <td className="border border-gray-300 px-4 py-2">{asset.type}</td>
              <td className="border border-gray-300 px-4 py-2">{asset.price}</td>
              <td className="border border-gray-300 px-4 py-2">{asset.change}</td>
              <td className="border border-gray-300 px-4 py-2">{asset.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
})

export default AssetsTable