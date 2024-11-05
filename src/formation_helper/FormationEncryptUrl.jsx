const FormationEncryptUrl = ({ encryptedSetupCode }) => {
  // Get the domain of the current URL
  const currentDomain = window.location.origin;

  let copyUrl = `${currentDomain}/formation-helper`;

  if (encryptedSetupCode) {
    copyUrl += `?setupcode=${encryptedSetupCode}`;
  }

  // Function to copy the URL to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(copyUrl)
      .then(() => {
        alert('URL copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy: ', error);
      });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
      <button
        style={{
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          padding: '10px',
        }}
        onClick={copyToClipboard}
      >
        Copy URL
      </button>
      <p
        style={{
          width: '80%',
          fontSize: '16px',
          wordBreak: 'break-all',
          padding: '10px', // Add padding for height
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginRight: '10px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {copyUrl}
      </p>
    </div>
  );
};

export default FormationEncryptUrl;
