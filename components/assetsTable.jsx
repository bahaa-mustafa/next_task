

function AssetsTable({mockAssets}) {
  return (
    <section>
      <table className="w-full">
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
    </section>
  )
}

export default AssetsTable