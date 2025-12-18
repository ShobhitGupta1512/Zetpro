import React, { useEffect, useState } from "react";
import { useData } from "../Context/DataContext";
import { useSearchParams } from "react-router-dom";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/Loading4.webm";
import ProductCart from "../components/ProductCart";

const Products = () => {
  const { data, fetchAllProducts, categoryOnlyData, brandOnlyData, addToCart } = useData();
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100000]);

  useEffect(() => {
    fetchAllProducts(); // fetch products on mount
  }, []);

  useEffect(() => {
    // Set category from URL params if present
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [searchParams]);

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleBrandChange = (e) => setBrand(e.target.value);

  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || !item.brand || item.brand === brand) && // safe check
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              brand={brand}
              setBrand={setBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              handleCategoryChange={handleCategoryChange}
              handleBrandChange={handleBrandChange}
              categories={categoryOnlyData}
              brands={brandOnlyData}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10">
              {filteredData?.map((product, index) => (
                <ProductCart key={index} product={product} addToCart={addToCart} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
