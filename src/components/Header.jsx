import React, { useState, useEffect } from 'react';

export default function () {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    console.log('CHANGED~');
  }, [num]);

  return <button onClick={handleClick}>Another header: {num}</button>;
}
