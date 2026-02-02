"use client"
import SearchInput from "../components/searchInput";
import FilterTypes from "../components/filtterTypes";
import { mockAssets, mockAssetsType } from "../data/mockData";
import { useCallback, useEffect, useState } from "react";
import AssetsTable from "@/components/assetsTable";
import useDebounce from "@/hooks/useDebounce";

export default function Home() {
  const assetsType = mockAssetsType;
  const [selectedAssetType, setSelectedAssetType] = useState("All");
  const [assets, setAssets] = useState(mockAssets); 
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

 useEffect(() => {
    const interval = setInterval(() => {
      setAssets((prev) =>
        prev.map((a) => ({
          ...a,
          price: +(a.price + (Math.random() - 0.5)).toFixed(2),
          change: +(Math.random() * 4 - 2).toFixed(2),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleFilterChange = useCallback((e) => {
    // console.log(e.target.value);
    console.log(e);
    setSelectedAssetType(e);
  }, []);  
  
  return (
    <>
    <header className="flex items-center justify-center mb-5">
    <h1 className="text-3xl font-bold underline text-center pt-10 text-gray-600 hover:text-gray-800 transition-colors duration-300 cursor-pointer">Investment Dashboard</h1>
    </header>

    <main className="flex flex-col items-center justify-start h-screen gap-4">
    <section className="flex items-center justify-center gap-4">
    <SearchInput value={search} onChange={setSearch} />
    <FilterTypes types={assetsType} selected={selectedAssetType} onChange={handleFilterChange} />
    {/* <FilterTypes assetsType={assetsType} selectedAssetType={selectedAssetType} setSelectedAssetType={setSelectedAssetType} /> */}
    </section>

    <section>     
      <AssetsTable mockAssets={assets} />
    </section>
    </main>
    </>
  );
}
