import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const FilterSection = ({
  search,
  setSearch,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleCategoryChange,
  handleBrandChange,
  categories = [],
  brands = [],
}) => {
  return (
    <div className="bg-gray-100 mt-10 rounded-md h-max p-4">
      {/* Search */}
      <div className="flex items-center border-2 border-gray-400 rounded-md bg-white">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="flex-1 p-2 rounded-l-md focus:outline-none"
        />
        <button className="p-2 text-gray-600 hover:text-gray-900">
          <IoSearchSharp size={22} />
        </button>
      </div>

      {/* Category */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {categories?.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <input
                type="checkbox"
                name={item}
                checked={category === item}
                value={item}
                onChange={handleCategoryChange}
              />
              <span className="cursor-pointer uppercase">{item}</span>
            </div>
          );
        })}
      </div>

      {/* Brand */}
      <h1 className="mt-5 font-semibold text-xl mb-3">Brand</h1>
      <select
        value={brand}
        onChange={handleBrandChange}
        className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
      >
        {brands?.map((item, index) => {
          if (!item) return null; // ✅ skip undefined/null
          return (
            <option key={index} value={item}>
              {item.toUpperCase()}
            </option>
          );
        })}
      </select>

      {/* Price Range */}
      <h1 className="mt-5 font-semibold text-xl mb-3">Price Range</h1>
      <div className="flex flex-col gap-2">
        <label>
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <input
          type="range"
          min="0"
          max="5000"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </div>

      {/* Reset */}
      <button
        className="bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer"
        onClick={() => {
          setSearch("");
          setCategory("All");
          setBrand("All");
          setPriceRange([0, 5000]);
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
