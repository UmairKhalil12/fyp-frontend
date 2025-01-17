import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SideFilterBar.css';

export default function SideFilterBar({ onFilter }) {
  const [filters, setFilters] = useState({
    color: '',
    timestamp: '',
    numberplate: '',
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Button to open/close the sidebar on smaller screens */}
      <button
        className="btn btn-primary side-filter-button d-md-none"
        onClick={toggleSidebar}
      >
        Filter
      </button>

      <div className={`side-filter-bar ${isOpen ? 'open' : ''}`}>
        {isOpen ? <div className="close-btn" onClick={handleClose}>
          &times;
        </div> : null}

        <h5 className="text-center mb-4">Filter Options</h5>


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
          className="btn btn-primary apply-filters-button mt-auto"
          onClick={handleFilter}
        >
          Apply Filters
        </button>
      </div>
    </>
  );
}
