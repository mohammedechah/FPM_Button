import React from 'react';

const SimplePanel: React.FC = () => {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Custom Plugin</h2>
      <button
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          backgroundColor: '#1f78c1',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default SimplePanel;