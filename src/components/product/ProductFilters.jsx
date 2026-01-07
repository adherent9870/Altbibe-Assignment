function ProductFilters({ query, setQuery, status, setStatus, sort, setSort }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
      <input
        type="search"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option value="Draft">Draft</option>
        <option value="Submitted">Submitted</option>
        <option value="Published">Published</option>
      </select>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="date">Sort by date</option>
        <option value="name">Sort by name</option>
      </select>
    </div>
  );
}
export default ProductFilters;
