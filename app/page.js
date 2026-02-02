"use client";
import SearchInput from "../components/searchInput";
import FilterTypes from "../components/filtterTypes";
import { mockAssets, mockAssetsType } from "../data/mockData";
import { useCallback, useEffect, useMemo, useState } from "react";
import AssetsTable from "@/components/assetsTable";
import useDebounce from "@/hooks/useDebounce";
import AssetCard from "@/components/assetscard";
import SortTable from "@/components/sortTable";
import OrderTable from "@/components/orderTable";

export default function Home() {
  const assetsType = mockAssetsType;
  const [selectedAssetType, setSelectedAssetType] = useState("All");
  const [assets, setAssets] = useState(mockAssets);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const interval = setInterval(() => {
      setAssets((prev) =>
        prev.map((a) => ({
          ...a,
          price: +(a.price + (Math.random() - 0.5)).toFixed(2),
          change: +(Math.random() * 4 - 2).toFixed(2),
        })),
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const filteredAssets = useMemo(() => {
    const filtered = assets.filter((asset) => {
      const matchesSearch = asset.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchesType =
        selectedAssetType === "All" || asset.type === selectedAssetType;

      return matchesSearch && matchesType;
    });

    const sorted = [...filtered].sort((a, b) => {
      let valueA = a[sortBy];
      let valueB = b[sortBy];

      if (typeof valueA === "string") {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }

      if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
      if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [assets, debouncedSearch, selectedAssetType, sortBy, sortOrder]);

  const handleFilterChange = useCallback((value) => {
    setSelectedAssetType(value);
  }, []);

  return (
    <>
      <header className="flex items-center justify-center mb-5">
        <h1 className="text-3xl font-bold underline text-center pt-10 text-gray-600 hover:text-gray-800 transition-colors duration-300 cursor-pointer">
          Investment Dashboard
        </h1>
      </header>

      <main className="flex flex-col items-center justify-start h-screen gap-4">
        <section className="flex items-center justify-center gap-4 flex-wrap">
          <SearchInput value={search} onChange={setSearch} />
          <FilterTypes
            types={assetsType}
            selected={selectedAssetType}
            onChange={handleFilterChange}
          />
          <SortTable
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSortChange={setSortBy}
          />
          <OrderTable sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </section>

        <section>
          <AssetsTable mockAssets={filteredAssets} />

          {filteredAssets.map((a) => (
            <AssetCard key={a.id} asset={a} />
          ))}
        </section>
      </main>
    </>
  );
}
