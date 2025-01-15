import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SideFilterBar({ onFilter }) {
  const [filters, setFilters] = useState({
    color: '',
    timestamp: '',
    numberplate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  return (
    <div className="d-flex flex-column p-3 bg-light border" style={{ width: '300px', minHeight: '100vh' }}>
      <h5 className="text-center mb-4 text-primary">Filter Options</h5>

      {/* Filter by Color */}
      <div className="mb-3">
        <label htmlFor="color" className="form-label">
          Color
        </label>
        <input
          type="text"
          id="color"
          name="color"
          className="form-control"
          placeholder="Enter color (e.g., red)"
          value={filters.color}
          onChange={handleChange}
        />
      </div>

      {/* Filter by Timestamp */}
      <div className="mb-3">
        <label htmlFor="timestamp" className="form-label">
          Timestamp
        </label>
        <input
          type="datetime-local"
          id="timestamp"
          name="timestamp"
          className="form-control"
          value={filters.timestamp}
          onChange={handleChange}
        />
      </div>

      {/* Filter by Number Plate */}
      <div className="mb-3">
        <label htmlFor="numberplate" className="form-label">
          Number Plate
        </label>
        <input
          type="text"
          id="numberplate"
          name="numberplate"
          className="form-control"
          placeholder="Enter number plate"
          value={filters.numberplate}
          onChange={handleChange}
        />
      </div>

      {/* Apply Filters Button */}
      <button
        className="btn btn-primary mt-auto"
        onClick={handleFilter}
      >
        Apply Filters
      </button>
    </div>
  );
}
