export default function AssetCard({ asset }) {
  console.log("AssetCard rendered");

  return (
    <div className="sm:hidden border rounded-md p-4 shadow-sm w-[85vw] mb-3 flex justify-between">
      <div className="flex flex-col  items-center">
        <h3 className="font-semibold">{asset.name}</h3>

        <p>{asset.type}</p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <p className="text-sm text-gray-500">Volume: {asset.volume}</p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <p>change: {asset.change}</p>
        <p className="mt-2 font-medium">price: ${asset.price.toLocaleString("en-US")}</p>
      </div>
    </div>
  );
}
