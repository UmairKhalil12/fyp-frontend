import React, { useEffect, useState } from 'react';
import { Drawer, Button, Input, Collapse, Typography } from 'antd';
import { FilterOutlined, CloseOutlined } from '@ant-design/icons';
import './SideFilterBar.css'; // Optional for additional custom styles

const { Panel } = Collapse;
const { Text } = Typography;

export default function SideFilterBar({ onFilterChange, setFilters }) {
  const [timeStamp, setTimeStamp] = useState(null);
  const [color, setColor] = useState(null);
  const [model, setModel] = useState(null);
  const [numberPlate, setNumberPlate] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const applyFilters = () => {
    onFilterChange({ model, color, timeStamp, numberPlate });
    setSidebarOpen(false);
  };

  const handleResetFilters = () => {
    const resetValues = { timeStamp: null, model: null, numberPlate: null, color: null };

    setColor(null);
    setTimeStamp(null);
    setModel(null);
    setNumberPlate(null);

    onFilterChange(resetValues);
  };

  const filterContent = (
    <>
      <Collapse defaultActiveKey={['timestamp', 'color', 'model', 'numberplate']} ghost>
        <Panel header="Time Stamp" key="timestamp">
          <Input
            className='input-side-bar'
            type="datetime-local"
            value={timeStamp}
            onChange={(e) => setTimeStamp(e.target.value)}
            style={{ width: '100%', minWidth: '200px' }}
          />
        </Panel>
        <Panel header="Color" key="color">
          <Input
            className='input-side-bar'
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter color"
            style={{ width: '100%', minWidth: '200px' }}
          />
        </Panel>
        <Panel header="Car" key="model">
          <Input
            className='input-side-bar'
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Enter car"
            style={{ width: '100%', minWidth: '200px' }}
          />
        </Panel>

        <Panel header="Number plate" key="numberplate">
          <Input
            className='input-side-bar'
            type="text"
            value={numberPlate}
            onChange={(e) => setNumberPlate(e.target.value)}
            placeholder="Enter number plate"
            style={{ width: '100%', minWidth: '200px' }}
          />
        </Panel>
      </Collapse>

      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <Button type="primary" className='apply-filters' onClick={applyFilters} style={{ width: '100%' }}>
          Apply Filters
        </Button>
        <Text
          className='reset-filter'
          style={{
            display: 'block',
            marginTop: '1rem',
            color: 'var(--primary-purple)',
            cursor: 'pointer',
          }}
          onClick={handleResetFilters}
        >
          Reset Filters
        </Text>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      {windowWidth <= 1024 && (
        <Button
          type="primary"
          className='mobile-filter-button'
          icon={<FilterOutlined />}
          onClick={() => setSidebarOpen(true)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
          }}
        >
          Filter
        </Button>
      )}

      {/* Desktop Sidebar */}
      {windowWidth > 1024 && (
        <div
          style={{
            width: '20%',
            padding: '1rem',
            backgroundColor: '#fff',
            border: '1px solid #f0f0f0',
            borderRadius: '8px',
            margin: '1rem',
          }}
        >
          {filterContent}
        </div>
      )}

      {/* Mobile Drawer */}
      <Drawer
        title="Filters"
        placement="right"
        onClose={() => setSidebarOpen(false)}
        visible={isSidebarOpen}
        width={windowWidth <= 550 ? '80%' : '60%'}
        closeIcon={<CloseOutlined />}
      >
        {filterContent}
      </Drawer>
    </>
  );
}