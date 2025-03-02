import React from 'react';
import { createPortal } from 'react-dom';

const PopUp = ({ copied }) => {
  return createPortal(
    <section>{copied && <div>Copied to clipbord </div>}</section>,
    document.querySelector('#popUP')
  );
};

export default PopUp;
