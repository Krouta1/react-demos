import React, { useEffect } from 'react';

const BasicEffect = () => {
  useEffect(() => {
    console.log(
      'Use useEffect to log a message to the console whenever the component mounts (i.e., when it’s rendered the first time).'
    );
  }, []);

  return <div>BasicEffect</div>;
};

export default BasicEffect;
