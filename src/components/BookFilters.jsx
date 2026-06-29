function BookFilters({ filters, onChange, genres, years }) {
  return (
    <div className="filters">
      <input
        className="search-input"
        type="text"
        placeholder="Buscar por título o autor..."
        value={filters.search}
        onChange={e => onChange({ ...filters, search: e.target.value })}
      />
      <select
        value={filters.genre}
        onChange={e => onChange({ ...filters, genre: e.target.value })}
      >
        <option value="">Todos los géneros</option>
        {genres.map(g => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
      <select
        value={filters.year}
        onChange={e => onChange({ ...filters, year: e.target.value })}
      >
        <option value="">Todos los años</option>
        {years.map(y => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </div>
  );
}

export default BookFilters;