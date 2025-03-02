import React from 'react';
import { createContext } from 'react';
import ComponentB from './ComponentB';

export const Data = createContext();

const ComponentA = () => {
  const name = 'Petr';
  return (
    <Data.Provider value={name}>
      <ComponentB />
    </Data.Provider>
  );
};

export default ComponentA;
