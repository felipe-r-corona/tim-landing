import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <video playsInline autoPlay muted loop preload="auto">
      <source src="/tim-logo-animation-v2.mp4" type="video/mp4" />
     </video> 
    </div>
  );
}

export default App;
