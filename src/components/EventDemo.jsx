import React, { useState } from 'react';

const EventDemo = () => {
  const [buttonText, setButtonText] = useState('Click the button');
  const [copyText, setCopyText] = useState('Copy this text');
  const [bgColor, setBgColor] = useState('transparent');

  return (
    <div>
      <button onClick={() => setButtonText('Button Clicked!')}>
        {buttonText}
      </button>

      <div>
        <p onCopy={() => setCopyText('Text Copied!')}>{copyText}</p>
      </div>

      <div>
        <p
          onMouseEnter={() => setBgColor('lightyellow')}
          onMouseLeave={() => setBgColor('transparent')}
          style={{ backgroundColor: bgColor }}
        >
          Hover over this text
        </p>
      </div>
    </div>
  );
};

export default EventDemo;
