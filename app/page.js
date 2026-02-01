"use client"
import SearchInput from "../components/searchInput";
import FilterTypes from "../components/filtterTypes";
import { mockAssets, mockAssetsType } from "../data/mockData";
import { useState } from "react";
import AssetsTable from "@/components/assetsTable";

export default function Home() {
  const assetsType = mockAssetsType;
  const [selectedAssetType, setSelectedAssetType] = useState("All");
  return (
    <>
    <header className="flex items-center justify-center mb-5">
    <h1 className="text-3xl font-bold underline text-center pt-10 text-gray-600 hover:text-gray-800 transition-colors duration-300 cursor-pointer">Investment Dashboard</h1>
    </header>

    <main className="flex flex-col items-center justify-start h-screen gap-4">
    <section className="flex items-center justify-center gap-4">
    <SearchInput />
    <input type="text" placeholder="Search name...." className="border border-gray-300 rounded-md px-4 py-2" value={selectedAssetType} onChange={(e) => setSelectedAssetType(e.target.value)}/>
    <FilterTypes assetsType={assetsType} selectedAssetType={selectedAssetType} setSelectedAssetType={setSelectedAssetType} />
    </section>

    <section>     
      <AssetsTable mockAssets={mockAssets} />
    </section>
    </main>
    </>
  );
}
