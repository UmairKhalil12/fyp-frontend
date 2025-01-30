import React, { useEffect, useState } from 'react';
import './SideFilterBar.css';

export default function SideFilterBar({ onFilterChange, setFilters }) {
  const [timeStamp, setTimeStamp] = useState('');
  const [color, setColor] = useState('');
  const [car, setCar] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isTimeStampOpen, setIsTimeStampOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [isCarOpen, setIsCarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSection = (section) => {
    if (section === 'timestamp') {
      setIsTimeStampOpen(!isTimeStampOpen);
    } else if (section === 'color') {
      setIsColorOpen(!isColorOpen);
    } else if (section === 'car') {
      setIsCarOpen(!isCarOpen);
    }
  };

  const applyFilters = () => {
    onFilterChange({
      car, color, timeStamp,
    });
    setSidebarOpen(false);
  };

  const handleResetFilters = () => {
    setColor('');
    setTimeStamp('');
    setCar('');
  };

  return (
    <>
      <button
        className="mobile-filter-button"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        Filter
      </button>

      <div className={windowWidth > 1024 ? "filter-sidebar" : `filter-sidebar-open ${isSidebarOpen ? "active" : ""}`}>
        {isSidebarOpen && (
          <div className="close-icon-product-filter" onClick={() => setSidebarOpen(false)}>
            &times;
          </div>
        )}

        <div className="filter-section">
          <div className="filter-heading" onClick={() => toggleSection('timestamp')}>
            Time Stamp <span className={isTimeStampOpen ? 'arrow-up' : 'arrow-down'} />
          </div>
          {isTimeStampOpen && (
            <div>
              <input
                className='filter-side-bar-input'
                type="datetime-local"
                value={timeStamp}
                onChange={(e) => setTimeStamp(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="filter-section">
          <div className="filter-heading" onClick={() => toggleSection('color')}>
            Color <span className={isColorOpen ? 'arrow-up' : 'arrow-down'} />
          </div>
          {isColorOpen && (
            <div>
              <input
                className='filter-side-bar-input'
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="filter-section">
          <div className="filter-heading" onClick={() => toggleSection('car')}>
            Car <span className={isCarOpen ? 'arrow-up' : 'arrow-down'} />
          </div>
          {isCarOpen && (
            <div>
              <input
                className='filter-side-bar-input'
                type="text"
                value={car}
                onChange={(e) => setCar(e.target.value)}
              />
            </div>
          )}
        </div>

        <br />
        <div className='apply-filters-btn-div'>
          <button
            className="btn btn-primary apply-filters-button mt-auto"
            onClick={applyFilters}
          >
            Apply Filters
          </button>
        </div>

        <p className="reset-filters-btn" onClick={handleResetFilters}>
          Reset Filters
        </p>
      </div>
    </>
  );
}
