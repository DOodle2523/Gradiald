// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import React from 'react';
import GradientBackground from './main'; // Assuming you're testing locally before publishing

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Gradient Background Demo</h1>
      {/* Linear Gradient Example */}
      <GradientBackground
        type="linear"
        colors={['#6a11cb', '#2575fc']}
        position="center"
        width="100%"
        height="200px"
      >
        <h2 style={{ color: '#fff' }}>Linear Gradient</h2>
      </GradientBackground>

      {/* Radial Gradient Example */}
      <GradientBackground
        type="radial"
        colors={['#ff7eb3', '#ff758c']}
        position="center"
        width="100%"
        height="200px"
        borderRadius="50%"
      >
        <h2 style={{ color: '#fff' }}>Radial Gradient</h2>
      </GradientBackground>

      {/* Ripple Effect Example */}
      <GradientBackground
        type="radial"
        colors={['#34e89e', '#0f3443']}
        position="center"
        width="100%"
        height="200px"
        rippleEffect={true}
      >
        <h2 style={{ color: '#fff' }}>Ripple Gradient Effect</h2>
      </GradientBackground>
    </div>
  );
}

export default App;
