import React, { useMemo, useState } from 'react';

function UseMemo() {
  const [number, setNumber] = useState(1000000000);

  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    let sum = 0;
    for (let i = 0; i < number; i++) {
      sum += i;
    }
    return sum;
  }, [number]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>{expensiveCalculation}</p>
    </div>
  );
}

export default UseMemo;
