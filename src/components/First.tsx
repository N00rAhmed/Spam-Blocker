import React from 'react';
import { Link } from 'react-router-dom';
  
function First() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Logged in</p>
  
        <Link to="/">go back</Link>
      </header>
    </div>
  );
}
  
export default First;
