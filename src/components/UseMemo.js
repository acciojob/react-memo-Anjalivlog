import React, { useMemo, useState } from 'react';

function UseMemo() {
  const [number, setNumber] = useState(100000); // Reduced number

  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    let sum = 0;
    for (let i = 0; i < number; i++) {
      sum += i;
    }
    return sum;
  }, [number]);

  const handleChange = (event) => {
    setNumber(Number(event.target.value));
  };

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <input type="number" value={number} onChange={handleChange} />
      <p>Sum: {expensiveCalculation}</p>
    </div>
  );
}

export default UseMemo;