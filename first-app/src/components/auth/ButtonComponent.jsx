const ButtonComponent = ({ text, onClick }) => {
  const buttonStyle = {
    backgroundColor: '#007bff', // Primary blue color
    color: '#ffffff', // White text color
    padding: '10px 20px', // Padding inside the button
    border: 'none', // No border
    borderRadius: '5px', // Rounded corners
    cursor: 'pointer', // Cursor changes to pointer on hover
    textAlign: 'center', // Center the text
    display: 'inline-block', // Display as inline-block
    fontSize: '16px', // Font size
    margin: '5px',
    textDecoration: 'none', // No underline on text
    transition: 'background-color 0.3s', // Smooth background color transition
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default ButtonComponent;
