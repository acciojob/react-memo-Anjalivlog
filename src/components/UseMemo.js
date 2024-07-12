// import React, { useMemo, useState } from 'react';

// function UseMemo() {
//   const [number, setNumber] = useState(1000000000);

//   const expensiveCalculation = useMemo(() => {
//     console.log('Calculating...');
//     let sum = 0;
//     for (let i = 0; i < number; i++) {
//       sum += i;
//     }
//     return sum;
//   }, [number]);

//   return (
//     <div>
//       <h2>Expensive Calculation</h2>
//       <p>{expensiveCalculation}</p>
//       <hr/>
//       <hr/>
//     </div>
//   );
// }

// export default UseMemo;

import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const expensiveCalculation = useMemo(() => {
    let total = 0;
    for (let i = 0; i <= number; i++) {
      total += i;
    }
    return total;
  }, [number]);

  return (
    <div>
      <h2>UseMemo Component</h2>
      <button onClick={incrementNumber}>Increment Number</button>
      <p>Number: {number}</p>
      <p>Expensive Calculation: {expensiveCalculation}</p>
    </div>
  );
}

export default UseMemo;