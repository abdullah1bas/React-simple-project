import './setting.css';

import React, { useCallback, useMemo, useState } from 'react';

const Setting = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const incrementCountOne = () => {
    
    setCountOne(countOne + 1);
  }
  const incrementCountTwo = () => {
    setCountTwo(countTwo + 1);
  }
  // {useMemo, useCallback} => optemize lel performance
  const isEven = useMemo(() => { // return (result return)
    let x = 1;
    // while( x < 1000000000 ) x++;
    return countOne % 2 === 0 ;
  }, [countOne]);
  
  useCallback(()=> {}, []); // return (fun only not => return)
  return (
    <div>
      Setting
      <button style={{display:'block'}} onClick={() => incrementCountOne()}>Count One - {countOne} </button>
      {/* {isEven ? 'even' : 'odd'} */}
      <button style={{display:'block'}} onClick={() => incrementCountTwo()}>Count Two - {countTwo} </button>
    </div>
  );
}

export default Setting;
