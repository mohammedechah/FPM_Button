import React from 'react';

const SimplePanel: React.FC = () => {
  const handleDownload = () => {
    // Path to the PDF file inside the public assets folder
    const pdfUrl = '/assets/FPM.pdf';

    // Create a hidden anchor element and trigger the download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'FPM.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Custom Plugin</h2>
      <button
        onClick={handleDownload}
        style={{
          padding: '10px 20px',
          backgroundColor: '#1f78c1',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Download PDF
      </button>
    </div>
  );
};

export default SimplePanel;
