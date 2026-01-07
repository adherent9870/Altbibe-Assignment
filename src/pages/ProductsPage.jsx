import { useState } from "react";
import { products } from "../data/product";
import ProductCard from "../components/product/ProductCard";
import ProductFilters from "../components/product/ProductFilters";
import styled from "styled-components";
const Wrapper = styled.div`
  max-width: 900px;
  margin: 32px auto;
  padding: 0 16px;
`;
function ProductsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("date");
  let filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) &&
      (status ? p.status === status : true)
  );
  if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filtered.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }
  return (
    <Wrapper>
      {" "}
      <h1>Products</h1>
      <ProductFilters
        query={query}
        setQuery={setQuery}
        status={status}
        setStatus={setStatus}
        sort={sort}
        setSort={setSort}
      />
      {filtered.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </Wrapper>
  );
}
export default ProductsPage;
